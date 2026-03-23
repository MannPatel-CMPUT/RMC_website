"use client";

import { useState } from "react";
import { Button, TextAreaField, TextField, Card } from "@/components/ui/Primitives";
import { WHATSAPP_NUMBER } from "@/lib/siteConfig";

type ContactFormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const waDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!/^\+?\d{8,15}$/.test(form.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Enter a valid contact number.";
    }
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please add a short message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const cleanPhone = form.phone.replace(/\s+/g, "");
    const cleanEmail = form.email.trim();
    const cleanCompany = form.company.trim();
    const cleanMessage = form.message.trim();

    const whatsappMessageParts: string[] = [
      "Hi Perfect RMC, I would like a quote.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${cleanPhone}`,
      `Email: ${cleanEmail}`,
      `Project Type: ${cleanCompany ? cleanCompany : "General Enquiry"}`,
      "Concrete Requirement: —",
      "Location: —",
      "Preferred Date: —",
      `Additional Details: ${cleanMessage || "—"}`,
      "",
      "Please contact me regarding this inquiry."
    ];

    const whatsappMessage = whatsappMessageParts.filter(Boolean).join("\n");
    const nextWhatsappUrl = `https://wa.me/${waDigits}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    try {
      if (typeof window !== "undefined") {
        window.open(nextWhatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      // ignore (popup blocker); link below still works
    }

    setWhatsappUrl(nextWhatsappUrl);
    setStatus("success");
  };

  return (
    <Card className="space-y-6 border-accent/25">
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Name"
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />
          <TextField
            label="Company"
            value={form.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Phone"
            required
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            error={errors.phone}
          />
          <TextField
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
          />
        </div>
        <TextAreaField
          label="Message"
          required
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          error={errors.message}
          helperText="Share your project type, approximate timeline and any specific queries."
        />
        <div className="flex items-center justify-between gap-4">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Send Message"}
          </Button>
          {status === "success" && (
            <p className="text-xs text-emerald-700">
              Continue on WhatsApp to send your request to Perfect RMC.
              <br />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4"
              >
                Open WhatsApp
              </a>
            </p>
          )}
        </div>
      </form>
    </Card>
  );
}


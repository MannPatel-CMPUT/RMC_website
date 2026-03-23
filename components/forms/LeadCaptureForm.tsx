"use client";

import { useState } from "react";
import { Button, TextAreaField, TextField, Card } from "@/components/ui/Primitives";
import { WHATSAPP_NUMBER } from "@/lib/siteConfig";

type LeadFormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  grade: string;
  quantity: string;
  date: string;
  message: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormState, string>>;

export function LeadCaptureForm() {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    grade: "",
    quantity: "",
    date: "",
    message: ""
  });
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const waDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  const handleChange = (field: keyof LeadFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: LeadFormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!/^\+?\d{8,15}$/.test(form.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Enter a valid contact number.";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.location.trim()) newErrors.location = "Project location is required.";
    if (!form.quantity.trim()) newErrors.quantity = "Approx. quantity is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const cleanPhone = form.phone.replace(/\s+/g, "");
    const cleanEmail = form.email.trim();

    const whatsappMessageParts: Array<string | null> = [
      "Hi Perfect RMC, I would like a quote.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${cleanPhone}`,
      cleanEmail ? `Email: ${cleanEmail}` : null,
      "Project Type: Ready Mix Concrete (RMC)",
      `Concrete Requirement: Grade ${form.grade.trim() || "—"} · Qty ${form.quantity.trim()} m³`,
      `Location: ${form.location.trim()}`,
      `Preferred Date: ${form.date.trim() || "—"}`,
      `Additional Details: ${form.message.trim() || "—"}`,
      "",
      "Please contact me regarding this inquiry."
    ];

    const whatsappMessage = whatsappMessageParts.filter(Boolean).join("\n");
    const nextWhatsappUrl = `https://wa.me/${waDigits}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab; if blocked, user can still click the link below.
    try {
      if (typeof window !== "undefined") {
        window.open(nextWhatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      // If window.open fails (popup blocker), the user still has the WhatsApp link.
    }

    setWhatsappUrl(nextWhatsappUrl);
    setStatus("success");
  };

  return (
    <Card className="space-y-6 border-accent/20">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Name"
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />
          <TextField
            label="Company Name"
            required
            value={form.company}
            onChange={(e) => handleChange("company", e.target.value)}
            error={errors.company}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Phone"
            required
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            error={errors.phone}
            helperText="Include country code for outstation contacts."
          />
          <TextField
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Project Location"
            required
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
            error={errors.location}
          />
          <TextField
            label="Concrete Grade (e.g. M20, M25)"
            value={form.grade}
            onChange={(e) => handleChange("grade", e.target.value)}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Required Quantity (Approx. m³)"
            required
            value={form.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
            error={errors.quantity}
          />
          <TextField
            label="Tentative Delivery Date"
            type="date"
            value={form.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </div>
        <TextAreaField
          label="Project Details / Message"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          helperText="Share project type, pour sequence, site constraints or any specific requirements."
        />
        <div className="flex items-center justify-between gap-4">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
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


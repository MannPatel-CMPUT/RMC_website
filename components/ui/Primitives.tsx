import { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants: Record<typeof variant, string> = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-700",
    outline:
      "border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-500 hover:text-zinc-900",
    ghost: "bg-transparent text-zinc-700 hover:text-zinc-900"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-8 space-y-3 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-sm text-zinc-600">{subtitle}</p>}
    </div>
  );
}

export function Card({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`card-surface p-6 ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <Card className="flex flex-col gap-2 border-zinc-300/70 bg-gradient-to-b from-white to-zinc-100">
      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </span>
      <span className="text-xl font-semibold text-zinc-900">{value}</span>
    </Card>
  );
}

type BaseFieldProps = {
  label: string;
  error?: string;
  required?: boolean;
  helperText?: string;
};

export function TextField({
  label,
  error,
  required,
  helperText,
  ...props
}: BaseFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5 text-sm">
      <label className="flex items-center justify-between text-xs font-medium text-zinc-700">
        <span>
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
      </label>
      <input
        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-500 focus:bg-white"
        {...props}
      />
      {helperText && !error && (
        <p className="text-xs text-zinc-500">{helperText}</p>
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function TextAreaField({
  label,
  error,
  required,
  helperText,
  ...props
}: BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="space-y-1.5 text-sm">
      <label className="flex items-center justify-between text-xs font-medium text-zinc-700">
        <span>
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
      </label>
      <textarea
        className="min-h-[100px] w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-500 focus:bg-white"
        {...props}
      />
      {helperText && !error && (
        <p className="text-xs text-zinc-500">{helperText}</p>
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

// Motion helpers can be added in dedicated client components if needed.

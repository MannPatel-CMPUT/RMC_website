"use client";

import { useState } from "react";
import { Button, SectionHeading, TextField, Card } from "@/components/ui/Primitives";

type CalculatorForm = {
  length: string;
  width: string;
  depth: string;
};

export function ConcreteCalculator() {
  const [form, setForm] = useState<CalculatorForm>({
    length: "",
    width: "",
    depth: ""
  });
  const [volume, setVolume] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof CalculatorForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const calculate = () => {
    setError(null);
    const length = parseFloat(form.length);
    const width = parseFloat(form.width);
    const depth = parseFloat(form.depth);

    if ([length, width, depth].some((v) => Number.isNaN(v) || v <= 0)) {
      setError("Please enter valid positive values for all fields.");
      setVolume(null);
      return;
    }

    const volumeMeters = (length * width * depth) / 1000000;
    setVolume(Number(volumeMeters.toFixed(2)));
  };

  return (
    <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
      <div className="container-default">
        <SectionHeading
          eyebrow="Concrete Calculator"
          title="Estimate concrete volume in cubic meters"
          subtitle="Enter basic dimensions for a slab or foundation to get an initial estimate. Final quantities must be validated by your structural consultant."
          align="left"
        />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <Card className="space-y-6 border-zinc-300 bg-white">
            <div className="grid gap-4 sm:grid-cols-3">
              <TextField
                label="Length (mm)"
                required
                type="number"
                inputMode="decimal"
                value={form.length}
                onChange={(e) => handleChange("length", e.target.value)}
              />
              <TextField
                label="Width (mm)"
                required
                type="number"
                inputMode="decimal"
                value={form.width}
                onChange={(e) => handleChange("width", e.target.value)}
              />
              <TextField
                label="Depth (mm)"
                required
                type="number"
                inputMode="decimal"
                value={form.depth}
                onChange={(e) => handleChange("depth", e.target.value)}
              />
            </div>
            {error && <p className="text-xs text-red-400">{error}</p>}
            <div className="flex items-center justify-between gap-4">
              <Button type="button" onClick={calculate}>
                Calculate Volume
              </Button>
              {volume !== null && (
                <div className="text-right">
                  <p className="text-xs font-medium text-zinc-500">
                    Estimated Volume
                  </p>
                  <p className="text-2xl font-semibold text-zinc-900">
                    {volume} m³
                  </p>
                </div>
              )}
            </div>
            <p className="text-xs text-zinc-500">
              This tool is indicative only. Final concrete quantities, wastage and
              pumping requirements should be vetted by your structural and project
              consultants.
            </p>
          </Card>
          <div className="space-y-4">
            <Card className="space-y-3 border-zinc-200 bg-white">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-700">
                Typical use cases
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-700">
                <li>Industrial floors and warehouse slabs</li>
                <li>Machine foundations and pedestals</li>
                <li>Roads, pavements and service yards</li>
                <li>Retaining walls and core walls</li>
              </ul>
            </Card>
            <Card className="space-y-2 border-zinc-200 bg-white">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-700">
                Need assistance?
              </h3>
              <p className="text-sm text-zinc-700">
                Share your drawings or BOQ with our team and we can assist with RMC
                grade selection and pour planning for your project in Vadodara region.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


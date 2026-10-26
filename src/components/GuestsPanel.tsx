"use client";

import type { ReactNode } from "react";

export type GuestsState = {
  adults: number;
  children: number;
  infants: number;
  pets: number;
};

export const emptyGuests: GuestsState = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
};

export function formatGuestsLabel(guests: GuestsState) {
  const people = guests.adults + guests.children;
  const parts: string[] = [];

  if (people > 0) {
    parts.push(`${people} guest${people === 1 ? "" : "s"}`);
  }
  if (guests.infants > 0) {
    parts.push(`${guests.infants} infant${guests.infants === 1 ? "" : "s"}`);
  }
  if (guests.pets > 0) {
    parts.push(`${guests.pets} pet${guests.pets === 1 ? "" : "s"}`);
  }

  return parts.length > 0 ? parts.join(", ") : "Add guests";
}

type RowKey = keyof GuestsState;

const ROWS: {
  key: RowKey;
  label: string;
  description: ReactNode;
  max: number;
}[] = [
  { key: "adults", label: "Adults", description: "Ages 13 or above", max: 16 },
  { key: "children", label: "Children", description: "Ages 2 – 12", max: 15 },
  { key: "infants", label: "Infants", description: "Under 2", max: 5 },
  {
    key: "pets",
    label: "Pets",
    description: (
      <span className="underline decoration-[#6A6A6A]/underline-offset-2">
        Bringing a service animal?
      </span>
    ),
    max: 5,
  },
];

function StepperButton({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`flex h-8 w-8 items-center justify-center rounded-full border text-[18px] leading-none transition ${
        disabled
          ? "cursor-not-allowed border-[#EBEBEB] text-[#DDDDDD]"
          : "border-[#B0B0B0] text-[#222] hover:border-[#222]"
      }`}
    >
      {label === "Increase" ? "+" : "−"}
    </button>
  );
}

type GuestsPanelProps = {
  value: GuestsState;
  onChange: (next: GuestsState) => void;
};

export default function GuestsPanel({ value, onChange }: GuestsPanelProps) {
  const update = (key: RowKey, delta: number) => {
    const row = ROWS.find((item) => item.key === key);
    if (!row) return;

    let nextValue = value[key] + delta;
    nextValue = Math.max(0, Math.min(row.max, nextValue));

    // Airbnb-style: adding a child/infant/pet with 0 adults bumps adults to 1
    const next = { ...value, [key]: nextValue };
    if (delta > 0 && key !== "adults" && next.adults === 0) {
      next.adults = 1;
    }

    onChange(next);
  };

  return (
    <div className="px-6 py-2">
      {ROWS.map((row, index) => {
        const count = value[row.key];
        const minDisabled =
          count <= 0 ||
          (row.key === "adults" &&
            count <= 1 &&
            (value.children > 0 || value.infants > 0 || value.pets > 0));

        return (
          <div
            key={row.key}
            className={`flex items-center justify-between gap-6 py-5 ${
              index < ROWS.length - 1 ? "border-b border-[#EBEBEB]" : ""
            }`}
          >
            <div className="min-w-0">
              <p className="text-[15px] font-semibold leading-none text-[#222]">{row.label}</p>
              <p className="mt-1.5 text-[13px] leading-none text-[#6A6A6A]">{row.description}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <StepperButton
                label="Decrease"
                disabled={minDisabled}
                onClick={() => update(row.key, -1)}
              />
              <span className="w-5 text-center text-[15px] tabular-nums text-[#222]">{count}</span>
              <StepperButton
                label="Increase"
                disabled={count >= row.max}
                onClick={() => update(row.key, 1)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

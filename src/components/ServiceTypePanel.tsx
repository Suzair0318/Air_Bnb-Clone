"use client";

import type { ReactNode } from "react";

export const SERVICE_TYPES = [
  "Photography",
  "Chefs",
  "Massage",
  "Prepared meals",
  "Training",
  "Makeup",
  "Hair",
  "Spa treatments",
  "Catering",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

function PhotographyIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 8.5h2.2l1.3-2h9l1.3 2H20a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18v-8A1.5 1.5 0 0 1 4 8.5z" strokeLinejoin="round" />
      <circle cx="12" cy="13.5" r="3.2" />
    </svg>
  );
}

function ChefsIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M7 11c-1.5 0-2.5-1.2-2.5-2.6S6 6 7.2 6c.3-1.5 1.6-2.5 3.1-2.5 1.2 0 2.2.6 2.7 1.6.5-.7 1.4-1.1 2.3-1.1 1.7 0 3 1.4 3 3.1 0 .3 0 .6-.1.9 1.1.3 1.8 1.3 1.8 2.5 0 1.3-1 2.4-2.3 2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11.5h8v2.2c0 .7-.4 1.3-1 1.6v3.2H9v-3.2c-.6-.3-1-.9-1-1.6v-2.2z" strokeLinejoin="round" />
    </svg>
  );
}

function MassageIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M5 18.5h14" strokeLinecap="round" />
      <path d="M7 18.5V9.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9" strokeLinejoin="round" />
      <path d="M9.5 7.5V6a2.5 2.5 0 0 1 5 0v1.5" strokeLinecap="round" />
      <path d="M9 12.5h6M9 15h6" strokeLinecap="round" />
    </svg>
  );
}

function MealsIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M4 11h16M10 6v12" strokeLinecap="round" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="13" r="6.5" />
      <path d="M12 13V9.5" strokeLinecap="round" />
      <path d="M12 3.5v2M9.5 4.5l.8 1.4M14.5 4.5l-.8 1.4" strokeLinecap="round" />
    </svg>
  );
}

function MakeupIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M8 4.5h3.5v7H8z" strokeLinejoin="round" />
      <path d="M8 11.5c0 2.5 1.5 4 3.5 5.5v2.5H8v-2.5C6.2 15.5 5 13.8 5 11.5" strokeLinejoin="round" />
      <path d="M14.5 7.5l4 4-3 3-4-4z" strokeLinejoin="round" />
    </svg>
  );
}

function HairIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M8 4.5h5.5a3 3 0 0 1 3 3V12H8V4.5z" strokeLinejoin="round" />
      <path d="M10 12v5.5a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V12" strokeLinejoin="round" />
      <path d="M7 8.5h1.5M15.5 8.5H17" strokeLinecap="round" />
    </svg>
  );
}

function SpaIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 4.5c1.8 2.2 3 4.4 3 6.5a3 3 0 1 1-6 0c0-2.1 1.2-4.3 3-6.5z" strokeLinejoin="round" />
      <path d="M7.5 18.5c1.2-1.8 2.7-2.7 4.5-2.7s3.3.9 4.5 2.7" strokeLinecap="round" />
    </svg>
  );
}

function CateringIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4.5 10.5h15l-1.2 7.2a2 2 0 0 1-2 1.8H7.7a2 2 0 0 1-2-1.8L4.5 10.5z" strokeLinejoin="round" />
      <path d="M8 10.5V8.8A4 4 0 0 1 12 4.5h0a4 4 0 0 1 4 4.3v1.7" strokeLinejoin="round" />
      <path d="M9.5 14h5" strokeLinecap="round" />
    </svg>
  );
}

const ICONS: Record<ServiceType, () => ReactNode> = {
  Photography: PhotographyIcon,
  Chefs: ChefsIcon,
  Massage: MassageIcon,
  "Prepared meals": MealsIcon,
  Training: TrainingIcon,
  Makeup: MakeupIcon,
  Hair: HairIcon,
  "Spa treatments": SpaIcon,
  Catering: CateringIcon,
};

type ServiceTypePanelProps = {
  selected: ServiceType | null;
  onSelect: (service: ServiceType) => void;
};

export default function ServiceTypePanel({ selected, onSelect }: ServiceTypePanelProps) {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex flex-wrap gap-2.5">
        {SERVICE_TYPES.map((service) => {
          const Icon = ICONS[service];
          const isActive = selected === service;
          return (
            <button
              key={service}
              type="button"
              onClick={() => onSelect(service)}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2.5 text-[13px] font-medium transition ${
                isActive
                  ? "border-[#222] bg-[#F7F7F7] text-[#222]"
                  : "border-[#DDDDDD] bg-white text-[#222] hover:border-[#B0B0B0]"
              }`}
            >
              <span className="text-[#222]">
                <Icon />
              </span>
              {service}
            </button>
          );
        })}
      </div>
    </div>
  );
}

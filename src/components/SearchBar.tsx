"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CloseIcon, MapPinIcon, SearchIcon } from "./Icons";
import DatePickerPanel, { formatDateLabel } from "./DatePickerPanel";
import GuestsPanel, {
  emptyGuests,
  formatGuestsLabel,
  type GuestsState,
} from "./GuestsPanel";
import ServiceTypePanel, { type ServiceType } from "./ServiceTypePanel";

type Field = "where" | "when" | "who" | null;

const DESTINATIONS = [
  { primary: "London", secondary: "United Kingdom" },
  { primary: "Central London", secondary: "London, United Kingdom" },
  { primary: "London Bridge", secondary: "London, United Kingdom" },
  { primary: "London Eye", secondary: "London, United Kingdom" },
  { primary: "London", secondary: "Ontario, Canada" },
  { primary: "Paris", secondary: "France" },
  { primary: "New York", secondary: "United States" },
  { primary: "Tokyo", secondary: "Japan" },
  { primary: "Kuala Lumpur", secondary: "Malaysia" },
  { primary: "Los Angeles", secondary: "California, United States" },
  { primary: "Lahore", secondary: "Pakistan" },
  { primary: "Islamabad", secondary: "Pakistan" },
  { primary: "Murree", secondary: "Pakistan" },
];

function highlightMatch(text: string, query: string) {
  if (!query.trim()) {
    return <span className="font-medium text-[#222]">{text}</span>;
  }

  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) {
    return <span className="font-medium text-[#222]">{text}</span>;
  }

  return (
    <>
      <span className="font-medium text-[#222]">{text.slice(0, index)}</span>
      <span className="font-bold text-[#222]">{text.slice(index, index + query.length)}</span>
      <span className="font-medium text-[#222]">{text.slice(index + query.length)}</span>
    </>
  );
}

export default function SearchBar() {
  const pathname = usePathname();
  const isServices = pathname === "/services";

  const [active, setActive] = useState<Field>(null);
  const [hovered, setHovered] = useState<Field>(null);
  const [where, setWhere] = useState("");
  const [whenDate, setWhenDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState<GuestsState>(emptyGuests);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const whereInputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const thirdLabel = isServices ? "Type of service" : "Who";
  const guestsLabel = formatGuestsLabel(guests);
  const thirdPlaceholder = isServices
    ? serviceType ?? "Add service"
    : guestsLabel;
  const wherePlaceholder = "Search destinations";
  const hasGuests = guestsLabel !== "Add guests";
  const hasService = Boolean(serviceType);

  const suggestions = useMemo(() => {
    const q = where.trim().toLowerCase();
    if (!q) {
      return DESTINATIONS.slice(0, 5);
    }
    return DESTINATIONS.filter(
      (d) =>
        d.primary.toLowerCase().includes(q) ||
        d.secondary.toLowerCase().includes(q) ||
        `${d.primary}, ${d.secondary}`.toLowerCase().includes(q),
    ).slice(0, 5);
  }, [where]);

  useEffect(() => {
    if (active === "where") {
      whereInputRef.current?.focus();
    }
  }, [active]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const isSelected = (field: Field) => active === field;
  const showGrey = (field: Field) => !active && hovered === field;

  const segmentClass = (field: Field) => {
    if (isSelected(field)) return "bg-white shadow-[0_3px_12px_rgba(0,0,0,0.12)]";
    if (active) return "bg-transparent hover:bg-[#DDDDDD]";
    if (showGrey(field)) return "bg-[#EBEBEB]";
    return "bg-transparent hover:bg-[#EBEBEB]";
  };

  const hideDivider = (a: Field, b: Field) =>
    active === a || active === b || hovered === a || hovered === b;

  const selectDestination = (primary: string, secondary: string) => {
    setWhere(`${primary}, ${secondary}`);
    setActive("when");
  };

  const selectDate = (date: Date) => {
    setWhenDate(date);
    setActive("who");
  };

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-[850px] px-6 pb-6 pt-1 md:px-10">
      <div
        className={`relative z-20 mx-auto flex h-[64px] max-w-[850px] items-center rounded-full border border-black/8 transition ${
          active ? "bg-[#EBEBEB]" : "bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
        }`}
        role="search"
      >
        <div
          onMouseEnter={() => setHovered("where")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setActive("where")}
          className={`relative flex h-full min-w-0 flex-[1.35] cursor-text items-center rounded-full pl-7 pr-3 transition ${segmentClass("where")}`}
        >
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center text-left">
            <span className="text-[12px] font-bold leading-none text-[#222]">Where</span>
            <input
              ref={whereInputRef}
              value={where}
              onChange={(e) => {
                setWhere(e.target.value);
                setActive("where");
              }}
              onFocus={() => setActive("where")}
              placeholder={wherePlaceholder}
              className="mt-1 w-full truncate bg-transparent text-[14px] leading-none text-[#222] outline-none placeholder:text-[#6A6A6A]"
              aria-label="Where"
            />
          </div>
          {where && active === "where" && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setWhere("");
                whereInputRef.current?.focus();
              }}
              className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDDDDD] text-[#222] transition hover:bg-[#C1C1C1]"
              aria-label="Clear destination"
            >
              <CloseIcon className="h-2.5 w-2.5" />
            </button>
          )}
        </div>

        <div className={`h-7 w-px shrink-0 ${hideDivider("where", "when") ? "bg-transparent" : "bg-[#DDDDDD]"}`} />

        <button
          type="button"
          onClick={() => setActive(active === "when" ? null : "when")}
          onMouseEnter={() => setHovered("when")}
          onMouseLeave={() => setHovered(null)}
          className={`flex h-full min-w-0 flex-[0.95] flex-col items-start justify-center rounded-full px-6 text-left transition ${segmentClass("when")}`}
        >
          <span className="text-[12px] font-bold leading-none text-[#222]">When</span>
          <span
            className={`mt-1 truncate text-[14px] leading-none ${
              whenDate ? "font-medium text-[#222]" : "text-[#6A6A6A]"
            }`}
          >
            {formatDateLabel(whenDate)}
          </span>
        </button>

        <div className={`h-7 w-px shrink-0 ${hideDivider("when", "who") ? "bg-transparent" : "bg-[#DDDDDD]"}`} />

        <div
          onMouseEnter={() => setHovered("who")}
          onMouseLeave={() => setHovered(null)}
          className={`flex h-full min-w-0 flex-[1.25] items-center rounded-full pl-6 pr-2 transition ${segmentClass("who")}`}
        >
          <button
            type="button"
            onClick={() => setActive(active === "who" ? null : "who")}
            className="flex min-w-0 flex-1 flex-col items-start justify-center text-left"
          >
            <span className="text-[12px] font-bold leading-none text-[#222]">{thirdLabel}</span>
            <span
              className={`mt-1 truncate text-[14px] leading-none ${
                (isServices && hasService) || (!isServices && hasGuests)
                  ? "font-medium text-[#222]"
                  : "text-[#6A6A6A]"
              }`}
            >
              {thirdPlaceholder}
            </span>
          </button>
          <button
            type="button"
            className={`flex shrink-0 items-center justify-center rounded-full bg-[#FF385C] text-white transition hover:bg-[#D90B3E] ${
              active ? "h-[48px] gap-2 px-4" : "h-[48px] w-[48px]"
            }`}
            aria-label="Search"
          >
            <SearchIcon className="h-4 w-4 text-white" />
            {active && <span className="text-[15px] font-semibold tracking-wide">Search</span>}
          </button>
        </div>
      </div>

      {active === "where" && suggestions.length > 0 && (
        <div className="absolute left-6 right-6 top-[72px] z-30 mx-auto max-w-[850px] md:left-10 md:right-auto md:w-[420px]">
          <div className="overflow-hidden rounded-[28px] bg-white py-4 shadow-[0_6px_28px_rgba(0,0,0,0.14)]">
            <ul>
              {suggestions.map((item) => {
                const key = `${item.primary}-${item.secondary}`;
                return (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => selectDestination(item.primary, item.secondary)}
                      className="flex w-full items-center gap-4 px-5 py-3 text-left transition hover:bg-[#F7F7F7]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EBEBEB] text-[#222]">
                        <MapPinIcon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 text-[15px] leading-5">
                        {highlightMatch(item.primary, where)}
                        <span className="text-[#6A6A6A]">, {item.secondary}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {active === "when" && (
        <div className="absolute left-1/2 top-[72px] z-30 w-[min(100%,560px)] -translate-x-1/2 px-0 sm:w-[560px]">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_6px_28px_rgba(0,0,0,0.14)]">
            <DatePickerPanel
              selected={whenDate}
              onSelect={selectDate}
              month={calendarMonth}
              onMonthChange={setCalendarMonth}
            />
          </div>
        </div>
      )}

      {active === "who" && !isServices && (
        <div className="absolute right-6 top-[72px] z-30 w-[min(100%-3rem,380px)] md:right-10">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_6px_28px_rgba(0,0,0,0.14)]">
            <GuestsPanel value={guests} onChange={setGuests} />
          </div>
        </div>
      )}

      {active === "who" && isServices && (
        <div className="absolute right-6 top-[72px] z-30 w-[min(100%-3rem,460px)] md:right-10">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_6px_28px_rgba(0,0,0,0.14)]">
            <ServiceTypePanel
              selected={serviceType}
              onSelect={(service) => {
                setServiceType(service);
                setActive(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

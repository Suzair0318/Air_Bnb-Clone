"use client";

import { ChevronLeft, ChevronRight } from "./Icons";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatShortDate(date: Date) {
  return `${SHORT_MONTHS[date.getMonth()]} ${date.getDate()}`;
}

export function formatDateLabel(date: Date | null) {
  if (!date) return "Add dates";
  return formatShortDate(date);
}

function getThisWeekend(today: Date) {
  const day = today.getDay(); // 0 Sun … 6 Sat
  const toFriday = day <= 5 ? 5 - day : 6;
  const friday = new Date(today);
  friday.setDate(today.getDate() + toFriday);
  const sunday = new Date(friday);
  sunday.setDate(friday.getDate() + 2);
  return { start: startOfDay(friday), end: startOfDay(sunday) };
}

type DatePickerPanelProps = {
  selected: Date | null;
  onSelect: (date: Date) => void;
  month: Date;
  onMonthChange: (month: Date) => void;
};

export default function DatePickerPanel({
  selected,
  onSelect,
  month,
  onMonthChange,
}: DatePickerPanelProps) {
  const today = startOfDay(new Date());
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const weekend = getThisWeekend(today);

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstWeekday = new Date(year, monthIndex, 1).getDay();

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && monthIndex > today.getMonth());

  const goPrev = () => {
    if (!canGoPrev) return;
    onMonthChange(new Date(year, monthIndex - 1, 1));
  };

  const goNext = () => {
    onMonthChange(new Date(year, monthIndex + 1, 1));
  };

  const quickOptions = [
    { label: "Today", value: formatShortDate(today), date: today },
    { label: "Tomorrow", value: formatShortDate(tomorrow), date: tomorrow },
    {
      label: "This weekend",
      value: `${formatShortDate(weekend.start)} – ${formatShortDate(weekend.end)}`,
      date: weekend.start,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6 p-5 sm:flex-row sm:gap-8 sm:p-6">
      <div className="flex w-full shrink-0 flex-col gap-3 sm:w-[168px]">
        {quickOptions.map((option) => {
          const isActive = sameDay(selected, option.date);
          return (
            <button
              key={option.label}
              type="button"
              onClick={() => {
                onSelect(option.date);
                onMonthChange(new Date(option.date.getFullYear(), option.date.getMonth(), 1));
              }}
              className={`rounded-[16px] border px-4 py-3.5 text-left transition ${
                isActive
                  ? "border-[#222] bg-white"
                  : "border-[#DDDDDD] bg-white hover:border-[#B0B0B0]"
              }`}
            >
              <span className="block text-[14px] font-semibold leading-none text-[#222]">
                {option.label}
              </span>
              <span className="mt-1.5 block text-[13px] leading-none text-[#6A6A6A]">
                {option.value}
              </span>
            </button>
          );
        })}
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex items-center justify-between px-1">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
              canGoPrev
                ? "text-[#222] hover:bg-[#F7F7F7]"
                : "cursor-default text-[#DDDDDD]"
            }`}
            aria-label="Previous month"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <h3 className="text-[15px] font-semibold text-[#222]">
            {MONTHS[monthIndex]} {year}
          </h3>
          <button
            type="button"
            onClick={goNext}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#222] transition hover:bg-[#F7F7F7]"
            aria-label="Next month"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mb-1 grid grid-cols-7">
          {WEEKDAYS.map((day, index) => (
            <div
              key={`${day}-${index}`}
              className="flex h-9 items-center justify-center text-[12px] font-medium text-[#6A6A6A]"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {cells.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="h-10" />;
            }

            const date = new Date(year, monthIndex, day);
            const isPast = date < today;
            const isSelected = sameDay(selected, date);
            const isToday = sameDay(today, date);

            return (
              <button
                key={`${year}-${monthIndex}-${day}`}
                type="button"
                disabled={isPast}
                onClick={() => onSelect(date)}
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[14px] transition ${
                  isSelected
                    ? "bg-[#222] font-semibold text-white"
                    : isPast
                      ? "cursor-default text-[#DDDDDD]"
                      : isToday
                        ? "font-semibold text-[#222] underline decoration-2 underline-offset-4 hover:bg-[#F7F7F7]"
                        : "font-medium text-[#222] hover:bg-[#F7F7F7]"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

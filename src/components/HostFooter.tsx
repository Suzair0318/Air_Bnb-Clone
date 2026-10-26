import { GlobeIcon } from "./Icons";

const columns = [
  {
    title: "Support",
    links: [
      "Help Center",
      "Get help with a safety issue",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighborhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "Airbnb your experience",
      "Airbnb your service",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Airbnb-friendly apartments",
      "Join a free hosting class",
      "Find a co-host",
      "Refer a host",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
  },
];

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.7 22H2.6l7.3-8.3L1 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

function PrivacyChoiceIcon() {
  return (
    <svg className="h-3.5 w-7" viewBox="0 0 28 14" aria-hidden>
      <rect x="0.5" y="0.5" width="27" height="13" rx="6.5" fill="#0066FF" stroke="#0066FF" />
      <circle cx="8" cy="7" r="4.5" fill="#fff" />
      <path d="M6.6 7.1l1.1 1.1 2.2-2.4" fill="none" stroke="#0066FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.2 4.8l3.6 4.4M22.8 4.8l-3.6 4.4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function HostFooter() {
  return (
    <footer className="bg-[#F7F7F7] text-[#222]">
      <div className="mx-auto max-w-[1760px] px-6 py-12 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-[14px] font-semibold">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <button type="button" className="text-[14px] text-[#222] transition hover:underline">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#DDDDDD] pt-6 text-[14px] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span aria-hidden>·</span>
            <button type="button" className="hover:underline">
              Privacy
            </button>
            <span aria-hidden>·</span>
            <button type="button" className="hover:underline">
              Terms
            </button>
            <span aria-hidden>·</span>
            <button type="button" className="inline-flex items-center gap-1.5 hover:underline">
              Your Privacy Choices
              <PrivacyChoiceIcon />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-semibold">
            <button type="button" className="inline-flex items-center gap-2 hover:underline">
              <GlobeIcon className="h-4 w-4" />
              English (US)
            </button>
            <button type="button" className="hover:underline">
              $ USD
            </button>
            <div className="flex items-center gap-3">
              <button type="button" aria-label="Facebook" className="hover:opacity-70">
                <FacebookIcon />
              </button>
              <button type="button" aria-label="X" className="hover:opacity-70">
                <XIcon />
              </button>
              <button type="button" aria-label="Instagram" className="hover:opacity-70">
                <InstagramIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

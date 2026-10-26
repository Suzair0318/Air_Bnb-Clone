const inspiration = [
  { title: "Murree", subtitle: "Apartment rentals" },
  { title: "Lahore", subtitle: "House rentals" },
  { title: "Islamabad", subtitle: "Villa rentals" },
  { title: "Karachi", subtitle: "Apartment rentals" },
  { title: "Nathiagali", subtitle: "Cabin rentals" },
  { title: "Hunza", subtitle: "Home rentals" },
  { title: "Skardu", subtitle: "Pet-friendly rentals" },
  { title: "Swat", subtitle: "Cottage rentals" },
  { title: "Galiyat", subtitle: "Family-friendly rentals" },
  { title: "Rawalpindi", subtitle: "Apartment rentals" },
  { title: "Multan", subtitle: "House rentals" },
  { title: "Bhurban", subtitle: "Vacation rentals" },
];

const columns = [
  {
    title: "Support",
    links: ["Help Center", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighborhood concern"],
  },
  {
    title: "Hosting",
    links: ["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly"],
  },
  {
    title: "Airbnb",
    links: ["Newsroom", "New features", "Careers", "Investors", "Gift cards", "Airbnb.org emergency stays"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-4 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1760px] px-6 py-12 md:px-12 lg:px-16 xl:px-20">
        <h2 className="mb-6 text-xl font-semibold text-neutral-900">Inspiration for future getaways</h2>
        <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {inspiration.map((item) => (
            <button key={item.title} type="button" className="text-left">
              <p className="text-sm font-semibold text-neutral-800">{item.title}</p>
              <p className="text-sm text-neutral-500">{item.subtitle}</p>
            </button>
          ))}
        </div>

        <div className="grid gap-8 border-t border-neutral-200 py-10 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <button type="button" className="text-sm text-neutral-600 transition hover:underline">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-700 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Airbnb Clone, Inc.</span>
            <span>·</span>
            <button type="button" className="hover:underline">
              Terms
            </button>
            <span>·</span>
            <button type="button" className="hover:underline">
              Sitemap
            </button>
            <span>·</span>
            <button type="button" className="hover:underline">
              Privacy
            </button>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <button type="button" className="hover:underline">
              English (US)
            </button>
            <button type="button" className="hover:underline">
              $ USD
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

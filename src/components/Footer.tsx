"use client";

import { useState } from "react";

const tabs = [
  "Popular",
  "Arts & culture",
  "Beach",
  "Mountains",
  "Outdoors",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments",
] as const;

type Tab = (typeof tabs)[number];

type Destination = { title: string; subtitle: string };

const destinationsByTab: Record<Tab, Destination[]> = {
  Popular: [
    { title: "Raleigh", subtitle: "Villa rentals" },
    { title: "St. Petersburg", subtitle: "Cottage rentals" },
    { title: "San Juan", subtitle: "Monthly Rentals" },
    { title: "London", subtitle: "Villa rentals" },
    { title: "West Palm Beach", subtitle: "Monthly Rentals" },
    { title: "Santo Domingo", subtitle: "Villa rentals" },
    { title: "Big Bear Lake", subtitle: "Monthly Rentals" },
    { title: "Oahu", subtitle: "Monthly Rentals" },
    { title: "Kyoto", subtitle: "Condo rentals" },
    { title: "Charleston", subtitle: "Cottage rentals" },
    { title: "Philadelphia", subtitle: "Condo rentals" },
    { title: "Wilmington", subtitle: "Monthly Rentals" },
    { title: "Key West", subtitle: "Monthly Rentals" },
    { title: "San Diego", subtitle: "Cottage rentals" },
    { title: "Daytona Beach", subtitle: "Villa rentals" },
    { title: "Tokyo", subtitle: "Villa rentals" },
    { title: "Nashville", subtitle: "House rentals" },
  ],
  "Arts & culture": [
    { title: "Paris", subtitle: "Apartment rentals" },
    { title: "New York", subtitle: "Loft rentals" },
    { title: "Rome", subtitle: "Condo rentals" },
    { title: "Barcelona", subtitle: "Apartment rentals" },
    { title: "Florence", subtitle: "Villa rentals" },
    { title: "Vienna", subtitle: "Apartment rentals" },
    { title: "Prague", subtitle: "Condo rentals" },
    { title: "Berlin", subtitle: "Apartment rentals" },
    { title: "Amsterdam", subtitle: "Houseboat rentals" },
    { title: "Lisbon", subtitle: "Apartment rentals" },
    { title: "Madrid", subtitle: "Condo rentals" },
    { title: "Budapest", subtitle: "Apartment rentals" },
  ],
  Beach: [
    { title: "Malibu", subtitle: "Beachfront rentals" },
    { title: "Miami", subtitle: "Condo rentals" },
    { title: "Maui", subtitle: "Villa rentals" },
    { title: "Bali", subtitle: "Villa rentals" },
    { title: "Cancún", subtitle: "Condo rentals" },
    { title: "Santorini", subtitle: "Villa rentals" },
    { title: "Phuket", subtitle: "Villa rentals" },
    { title: "Nice", subtitle: "Apartment rentals" },
    { title: "Mykonos", subtitle: "Villa rentals" },
    { title: "Gold Coast", subtitle: "Apartment rentals" },
    { title: "Cape Town", subtitle: "House rentals" },
    { title: "Tulum", subtitle: "Villa rentals" },
  ],
  Mountains: [
    { title: "Aspen", subtitle: "Cabin rentals" },
    { title: "Banff", subtitle: "Chalet rentals" },
    { title: "Whistler", subtitle: "Condo rentals" },
    { title: "Zermatt", subtitle: "Chalet rentals" },
    { title: "Lake Tahoe", subtitle: "Cabin rentals" },
    { title: "Park City", subtitle: "Condo rentals" },
    { title: "Chamonix", subtitle: "Chalet rentals" },
    { title: "Queenstown", subtitle: "House rentals" },
    { title: "Jackson Hole", subtitle: "Cabin rentals" },
    { title: "Innsbruck", subtitle: "Apartment rentals" },
    { title: "Murree", subtitle: "Apartment rentals" },
    { title: "Nathiagali", subtitle: "Cabin rentals" },
  ],
  Outdoors: [
    { title: "Yosemite", subtitle: "Cabin rentals" },
    { title: "Sedona", subtitle: "House rentals" },
    { title: "Moab", subtitle: "Cabin rentals" },
    { title: "Joshua Tree", subtitle: "House rentals" },
    { title: "Yellowstone", subtitle: "Cabin rentals" },
    { title: "Zion", subtitle: "House rentals" },
    { title: "Patagonia", subtitle: "Cabin rentals" },
    { title: "Reykjavík", subtitle: "Apartment rentals" },
    { title: "Hunza", subtitle: "Home rentals" },
    { title: "Skardu", subtitle: "Cabin rentals" },
    { title: "Swat", subtitle: "Cottage rentals" },
    { title: "Denali", subtitle: "Cabin rentals" },
  ],
  "Things to do": [
    { title: "Disney World", subtitle: "Vacation rentals" },
    { title: "Las Vegas", subtitle: "Condo rentals" },
    { title: "Orlando", subtitle: "Villa rentals" },
    { title: "Dubai", subtitle: "Apartment rentals" },
    { title: "Singapore", subtitle: "Condo rentals" },
    { title: "Hong Kong", subtitle: "Apartment rentals" },
    { title: "Seoul", subtitle: "Apartment rentals" },
    { title: "Istanbul", subtitle: "Apartment rentals" },
    { title: "Cairo", subtitle: "Apartment rentals" },
    { title: "Bangkok", subtitle: "Condo rentals" },
    { title: "Lahore", subtitle: "House rentals" },
    { title: "Islamabad", subtitle: "Villa rentals" },
  ],
  "Travel tips & inspiration": [
    { title: "Family travel hub", subtitle: "Tips and inspiration" },
    { title: "One-of-a-kind stays", subtitle: "Unique homes" },
    { title: "Pet-friendly stays", subtitle: "Travel with pets" },
    { title: "Weekend getaways", subtitle: "Nearby escapes" },
    { title: "Budget travel", subtitle: "Affordable stays" },
    { title: "Luxury stays", subtitle: "Premium homes" },
    { title: "Remote work", subtitle: "Work-friendly homes" },
    { title: "Winter trips", subtitle: "Seasonal ideas" },
    { title: "Summer escapes", subtitle: "Warm destinations" },
    { title: "City breaks", subtitle: "Urban weekends" },
    { title: "National parks", subtitle: "Outdoor trips" },
    { title: "Foodie destinations", subtitle: "Culinary travel" },
  ],
  "Airbnb-friendly apartments": [
    { title: "Atlanta", subtitle: "Apartment rentals" },
    { title: "Austin", subtitle: "Apartment rentals" },
    { title: "Chicago", subtitle: "Condo rentals" },
    { title: "Dallas", subtitle: "Apartment rentals" },
    { title: "Denver", subtitle: "Condo rentals" },
    { title: "Houston", subtitle: "Apartment rentals" },
    { title: "Los Angeles", subtitle: "Apartment rentals" },
    { title: "Phoenix", subtitle: "Condo rentals" },
    { title: "Portland", subtitle: "Apartment rentals" },
    { title: "Seattle", subtitle: "Condo rentals" },
    { title: "Toronto", subtitle: "Apartment rentals" },
    { title: "Vancouver", subtitle: "Condo rentals" },
  ],
};

const columns = [
  {
    title: "Support",
    links: [
      "Help Center",
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
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
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

export default function Footer() {
  const [activeTab, setActiveTab] = useState<Tab>("Popular");
  const [showMore, setShowMore] = useState(false);

  const items = destinationsByTab[activeTab];
  const visibleItems = showMore ? items : items.slice(0, 17);

  return (
    <footer className="border-t border-neutral-200 bg-[#F7F7F7]">
      <div className="mx-auto max-w-[1760px] px-5 py-12 md:px-8 lg:px-10 xl:px-16">
        <h2 className="mb-5 text-[22px] font-semibold tracking-tight text-[#222]">
          Inspiration for future getaways
        </h2>

        <div className="mb-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-6 border-b border-neutral-300">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    setShowMore(false);
                  }}
                  className={`relative whitespace-nowrap pb-3 text-[14px] transition ${
                    isActive
                      ? "font-semibold text-[#222]"
                      : "font-normal text-[#6A6A6A] hover:text-[#222]"
                  }`}
                >
                  {tab}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isActive ? "bg-[#222]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visibleItems.map((item) => (
            <button key={`${activeTab}-${item.title}`} type="button" className="text-left">
              <p className="text-[14px] font-semibold leading-5 text-[#222]">{item.title}</p>
              <p className="text-[14px] leading-5 text-[#6A6A6A]">{item.subtitle}</p>
            </button>
          ))}
          {!showMore && items.length > 17 && (
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="flex items-center gap-1 self-start text-left text-[14px] font-semibold text-[#222] hover:underline"
            >
              Show more
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        <div className="grid gap-8 border-t border-neutral-300 py-10 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold text-[#222]">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <button type="button" className="text-sm text-[#222] transition hover:underline">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-300 pt-6 text-sm text-[#222] md:flex-row md:items-center md:justify-between">
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

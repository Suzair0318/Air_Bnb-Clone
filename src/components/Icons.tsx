type IconProps = { className?: string };

/** Official Airbnb wordmark (Bélo + "airbnb") */
export function AirbnbLogo({ className = "h-8 w-[102px]" }: IconProps) {
  return (
    <svg
      className={className}
      width="102"
      height="32"
      viewBox="0 0 3490 1080"
      fill="currentColor"
      aria-hidden
    >
      <path d="M1494.71 456.953C1458.28 412.178 1408.46 389.892 1349.68 389.892C1233.51 389.892 1146.18 481.906 1146.18 605.892C1146.18 729.877 1233.51 821.892 1349.68 821.892C1408.46 821.892 1458.28 799.605 1494.71 754.83L1500.95 810.195H1589.84V401.588H1500.95L1494.71 456.953ZM1369.18 736.895C1295.33 736.895 1242.08 683.41 1242.08 605.892C1242.08 528.373 1295.33 474.888 1369.18 474.888C1443.02 474.888 1495.49 529.153 1495.49 605.892C1495.49 682.63 1443.8 736.895 1369.18 736.895ZM1656.11 810.195H1750.46V401.588H1656.11V810.195ZM948.912 666.715C875.618 506.859 795.308 344.664 713.438 184.809C698.623 155.177 670.554 98.2527 645.603 67.8412C609.736 24.1733 556.715 0.779785 502.915 0.779785C449.115 0.779785 396.094 24.1733 360.227 67.8412C335.277 98.2527 307.207 155.177 292.392 184.809C210.522 344.664 130.212 506.859 56.9187 666.715C47.5621 687.769 24.9504 737.675 16.3736 760.289C6.2373 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.362 1079.22 235.473 1079.22C346.193 1079.22 434.3 1008.26 502.915 934.18C571.53 1008.26 659.638 1079.22 770.357 1079.22C904.468 1079.22 1005.83 975.509 1005.83 846.845C1005.83 817.213 999.593 787.581 989.457 760.289C980.88 737.675 958.268 687.769 948.912 666.715ZM502.915 810.195C447.555 738.455 396.094 649.56 396.094 577.819C396.094 506.079 446.776 470.209 502.915 470.209C559.055 470.209 610.516 508.419 610.516 577.819C610.516 647.22 558.275 738.455 502.915 810.195ZM770.357 998.902C688.362 998.902 618.032 941.557 555.741 872.656C619.966 792.541 690.826 679.121 690.826 577.819C690.826 458.513 598.04 389.892 502.915 389.892C407.79 389.892 315.784 458.513 315.784 577.819C315.784 679.098 386.145 792.478 450.144 872.593C387.845 941.526 317.491 998.902 235.473 998.902C146.586 998.902 81.0898 931.061 81.0898 846.845C81.0898 826.57 84.2087 807.856 91.2261 788.361C98.2436 770.426 120.855 720.52 130.212 701.025C203.505 541.17 282.256 380.534 364.126 220.679C378.941 191.047 403.891 141.921 422.605 119.307C442.877 94.3538 470.947 81.0975 502.915 81.0975C534.883 81.0975 562.953 94.3538 583.226 119.307C601.939 141.921 626.89 191.047 641.704 220.679C723.574 380.534 802.325 541.17 875.618 701.025C884.975 720.52 907.587 770.426 914.604 788.361C921.622 807.856 925.52 826.57 925.52 846.845C925.52 931.061 859.244 998.902 770.357 998.902ZM3285.71 389.892C3226.91 389.892 3175.97 413.098 3139.91 456.953V226.917H3045.56V810.195H3134.45L3140.69 754.83C3177.12 799.605 3226.94 821.892 3285.71 821.892C3401.89 821.892 3489.22 729.877 3489.22 605.892C3489.22 481.906 3401.89 389.892 3285.71 389.892ZM3266.22 736.895C3191.6 736.895 3139.91 682.63 3139.91 605.892C3139.91 529.153 3191.6 474.888 3266.22 474.888C3340.85 474.888 3393.32 528.373 3393.32 605.892C3393.32 683.41 3340.07 736.895 3266.22 736.895ZM2827.24 389.892C2766.15 389.892 2723.56 418.182 2699.37 456.953L2693.13 401.588H2604.24V810.195H2698.59V573.921C2698.59 516.217 2741.47 474.888 2800.73 474.888C2856.87 474.888 2888.84 513.097 2888.84 578.599V810.195H2983.19V566.903C2983.19 457.733 2923.15 389.892 2827.24 389.892ZM1911.86 460.072L1905.62 401.588H1816.73V810.195H1911.08V604.332C1911.08 532.592 1954.74 486.585 2027.26 486.585C2042.85 486.585 2058.44 488.144 2070.92 492.043V401.588C2059.22 396.91 2044.41 395.35 2028.04 395.35C1978.58 395.35 1936.66 421.177 1911.86 460.072ZM2353.96 389.892C2295.15 389.892 2244.21 413.098 2208.15 456.953V226.917H2113.8V810.195H2202.69L2208.93 754.83C2245.36 799.605 2295.18 821.892 2353.96 821.892C2470.13 821.892 2557.46 729.877 2557.46 605.892C2557.46 481.906 2470.13 389.892 2353.96 389.892ZM2334.46 736.895C2259.84 736.895 2208.15 682.63 2208.15 605.892C2208.15 529.153 2259.84 474.888 2334.46 474.888C2409.09 474.888 2461.56 528.373 2461.56 605.892C2461.56 683.41 2408.31 736.895 2334.46 736.895ZM1703.28 226.917C1669.48 226.917 1642.08 254.326 1642.08 288.13C1642.08 321.934 1669.48 349.343 1703.28 349.343C1737.09 349.343 1764.49 321.934 1764.49 288.13C1764.49 254.326 1737.09 226.917 1703.28 226.917Z" />
    </svg>
  );
}

export function SearchIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden>
      <circle cx="13" cy="13" r="8" />
      <path d="M19.5 19.5L27 27" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 .25a7.75 7.75 0 100 15.5A7.75 7.75 0 008 .25zm0 1.5c1.1 0 2.13.3 3.02.82A12.4 12.4 0 009.4 6.5H6.6a12.4 12.4 0 00-1.62-3.93A6.2 6.2 0 018 1.75zm4.66 2.1A6.2 6.2 0 0114.25 8c0 1.55-.57 2.97-1.52 4.06A12.5 12.5 0 0011.1 8c.3-1.45.85-2.8 1.56-4.15zM8 14.25a6.2 6.2 0 01-3.02-.82A12.4 12.4 0 006.6 9.5h2.8a12.4 12.4 0 001.62 3.93A6.2 6.2 0 018 14.25zm-4.66-2.1A6.2 6.2 0 011.75 8c0-1.55.57-2.97 1.52-4.06A12.5 12.5 0 004.9 8c-.3 1.45-.85 2.8-1.56 4.15z" />
    </svg>
  );
}

/** Desk globe — Airbnb "All" tab */
export function NavGlobeIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <ellipse cx="20" cy="33.5" rx="7" ry="1.8" fill="#D4D4D4" />
      <rect x="18.6" y="27" width="2.8" height="6.5" rx="1" fill="#BDBDBD" />
      <circle cx="20" cy="16" r="11.5" fill="#7CB342" />
      <circle cx="20" cy="16" r="11.5" fill="url(#globeShine)" fillOpacity="0.25" />
      <ellipse cx="20" cy="16" rx="11.5" ry="4.2" stroke="#558B2F" strokeWidth="1.1" fill="none" />
      <path d="M20 4.5c2.8 3.2 4.2 7.2 4.2 11.5S22.8 24.3 20 27.5c-2.8-3.2-4.2-7.2-4.2-11.5S17.2 7.7 20 4.5z" stroke="#558B2F" strokeWidth="1.1" fill="none" />
      <path d="M9.2 12.2c3.4 1 7 1.5 10.8 1.5s7.4-.5 10.8-1.5M9.2 19.8c3.4-1 7-1.5 10.8-1.5s7.4.5 10.8 1.5" stroke="#558B2F" strokeWidth="1" fill="none" />
      <path d="M8.5 16h23" stroke="#558B2F" strokeWidth="1.1" />
      <defs>
        <radialGradient id="globeShine" cx="0.35" cy="0.3" r="0.7">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#7CB342" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/** House with tree — Airbnb "Homes" tab */
export function NavHomeIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <ellipse cx="11" cy="28" rx="5" ry="2" fill="#81C784" opacity="0.7" />
      <path d="M11 27c-2.8-4.5-1.2-9 0-9s2.8 4.5 0 9z" fill="#66BB6A" />
      <path d="M11 20v8" stroke="#5D4037" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 18.5L26.5 9l10.5 9.5V31a1.5 1.5 0 01-1.5 1.5H17.5A1.5 1.5 0 0116 31V18.5z" fill="#FFAB91" />
      <path d="M16 18.5L26.5 9l10.5 9.5" stroke="#E64A19" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <rect x="23.2" y="23" width="6.5" height="9.5" rx="0.8" fill="#FFE0B2" stroke="#E64A19" strokeWidth="1" />
      <rect x="19" y="21" width="3.2" height="3.2" rx="0.4" fill="#81D4FA" stroke="#0288D1" strokeWidth="0.7" />
      <rect x="30.5" y="21" width="3.2" height="3.2" rx="0.4" fill="#81D4FA" stroke="#0288D1" strokeWidth="0.7" />
    </svg>
  );
}

/** Hot air balloon — Airbnb "Experiences" tab */
export function NavBalloonIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <ellipse cx="20" cy="14" rx="9.5" ry="11" fill="#FF7043" />
      <path d="M12 10c2.5 1.2 5.2 1.8 8 1.8s5.5-.6 8-1.8" stroke="#FFAB91" strokeWidth="1.2" opacity="0.9" />
      <path d="M13.5 17.5c2 1 4.2 1.5 6.5 1.5s4.5-.5 6.5-1.5" stroke="#FFAB91" strokeWidth="1" opacity="0.8" />
      <path d="M20 3c2.2 3.5 3.3 7.2 3.3 11S22.2 21.5 20 25c-2.2-3.5-3.3-7.2-3.3-11S17.8 6.5 20 3z" fill="#FF8A65" opacity="0.55" />
      <path d="M14.5 24.5L20 28.5l5.5-4" stroke="#E64A19" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <rect x="16.5" y="28.2" width="7" height="4.2" rx="1" fill="#FFCCBC" stroke="#E64A19" strokeWidth="1" />
      <path d="M18 32.4v2.2M22 32.4v2.2" stroke="#E64A19" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/** Service bell — Airbnb "Services" tab */
export function NavServicesIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="10" y="29" width="20" height="3.5" rx="1.5" fill="#90A4AE" />
      <path d="M9 29c0-8.5 4.5-14.5 11-14.5S31 20.5 31 29H9z" fill="#CFD8DC" />
      <path d="M9 29c0-8.5 4.5-14.5 11-14.5" fill="#ECEFF1" />
      <ellipse cx="20" cy="29" rx="11" ry="2.2" fill="#B0BEC5" />
      <circle cx="20" cy="12.5" r="2.2" fill="#90A4AE" />
      <rect x="19.1" y="14.2" width="1.8" height="2.2" fill="#90A4AE" />
      <path d="M12 22c2.5-1.5 5.2-2.2 8-2.2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function MenuIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M4 10h24v2.2H4V10zm0 5.9h24v2.2H4v-2.2zm0 5.9h24V24H4v-2.2z" />
    </svg>
  );
}

export function UserIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="16" cy="16" r="12.5" />
      <circle cx="16" cy="12.5" r="4.2" />
      <path d="M8.2 24.2c1.8-3.2 4.6-4.8 7.8-4.8s6 1.6 7.8 4.8" strokeLinecap="round" />
    </svg>
  );
}

export function UserAvatarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <circle cx="16" cy="11" r="5.5" />
      <path d="M5 27.5c0-5.5 4.8-9 11-9s11 3.5 11 9" />
    </svg>
  );
}

export function HeartIcon({ className = "h-6 w-6", filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M16 28s-12-7.4-12-15.2C4 7.8 7.8 4.5 12 4.5c2.4 0 4.5 1.2 5.8 3 1.3-1.8 3.4-3 5.8-3 4.2 0 8 3.3 8 8.3C28 20.6 16 28 16 28z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = "h-3 w-3" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M6 0l1.5 3.8L12 4.2 8.8 7l.9 4.8L6 9.4 2.3 11.8 3.2 7 0 4.2l4.5-.4L6 0z" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s7-7.2 7-12.2A7 7 0 1 0 5 9.8C5 14.8 12 22 12 22z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function CloseIcon({ className = "h-3 w-3" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M2 2l8 8M10 2L2 10" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronLeft({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FilterIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M3 2h10l-3.5 5.5V13l-3-1.5V7.5L3 2z" />
    </svg>
  );
}

export function ShareIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="24" cy="8" r="3" />
      <circle cx="8" cy="16" r="3" />
      <circle cx="24" cy="24" r="3" />
      <path d="M11 14.5l10-5M11 17.5l10 5" strokeLinecap="round" />
    </svg>
  );
}

const categoryPaths: Record<string, string> = {
  icons: "M16 4l3 6h7l-5.5 4.5 2 7L16 17l-6.5 4.5 2-7L6 10h7z",
  beach: "M4 22c4-8 8-12 12-12s8 4 12 12H4zm12-14a3 3 0 100-6 3 3 0 000 6z",
  cabin: "M4 14l12-10 12 10v12H18v-8h-4v8H4V14z",
  views: "M16 6c-8 0-14 10-14 10s6 10 14 10 14-10 14-10S24 6 16 6zm0 14a4 4 0 110-8 4 4 0 010 8z",
  omg: "M8 8h4v4H8V8zm12 0h4v4h-4V8zM10 18c2 3 10 3 12 0",
  treehouse: "M16 2c-4 4-6 8-6 12h4v10h4V14h4c0-4-2-8-6-12z",
  countryside: "M2 22l8-14 6 10 4-6 8 10H2zm18-14a3 3 0 100-6 3 3 0 000 6z",
  mansion: "M4 28V12l12-8 12 8v16H20v-8h-8v8H4z",
  tiny: "M8 28V14l8-6 8 6v14H8zm4-10h8v2h-8v-2z",
  lake: "M4 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0v6c-2 2-4 2-6 0s-4-2-6 0-4 2-6 0-4-2-6 0v-6zm8-8a4 4 0 118 0c0 3-4 6-4 6s-4-3-4-6z",
  trending: "M6 22V12h4v10H6zm8 0V6h4v16h-4zm8 0v-8h4v8h-4z",
  tropical: "M16 28V16m0 0C10 16 6 10 6 6c6 0 10 4 10 10zm0 0c6 0 10-6 10-10-6 0-10 4-10 10z",
  park: "M16 4c-4 6-8 10-8 14a8 8 0 0016 0c0-4-4-8-8-14zm0 12a2 2 0 110 4 2 2 0 010-4z",
  castle: "M6 28V10h4V6h4v4h4V6h4v4h4v18H6zm6-8h4v8h-4v-8z",
  camping: "M4 26l12-20 12 20H4zm12-8l-4 6h8l-4-6z",
};

export function CategoryIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const path = categoryPaths[name] ?? categoryPaths.icons;
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  );
}

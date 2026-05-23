export function LogoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="7" fill="#FBBF24" />
      <path
        d="M8 28c0-5.5 4.5-10 10-10s10 4.5 10 10"
        fill="#93C5FD"
        opacity="0.9"
      />
      <ellipse cx="26" cy="18" rx="9" ry="6" fill="#60A5FA" />
      <ellipse cx="32" cy="20" rx="7" ry="5" fill="#3B82F6" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function SunToggleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
    </svg>
  );
}

export function HumidityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" aria-hidden>
      <path d="M12 3c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13z" strokeLinejoin="round" />
    </svg>
  );
}

export function WindIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" aria-hidden>
      <path d="M4 8h12a3 3 0 1 0-3-3M4 16h14a4 4 0 1 1-4 4" strokeLinecap="round" />
    </svg>
  );
}

export function ThermometerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" aria-hidden>
      <path d="M14 4v10.5a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0z" />
      <line x1="12" y1="16" x2="12" y2="18" strokeLinecap="round" />
    </svg>
  );
}

export function PressureIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" strokeLinecap="round" />
    </svg>
  );
}

export function CloudIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" aria-hidden>
      <path d="M7 18h11a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.5A4 4 0 0 0 7 18z" />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" aria-hidden>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function HazeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M3 10h18M3 14h14M5 18h10" strokeLinecap="round" />
    </svg>
  );
}

export function SunWeatherIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden>
      <circle cx="36" cy="36" r="16" fill="#FBBF24" />
      <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round">
        <line x1="36" y1="8" x2="36" y2="16" />
        <line x1="36" y1="56" x2="36" y2="64" />
        <line x1="8" y1="36" x2="16" y2="36" />
        <line x1="56" y1="36" x2="64" y2="36" />
        <line x1="16.2" y1="16.2" x2="21.8" y2="21.8" />
        <line x1="50.2" y1="50.2" x2="55.8" y2="55.8" />
        <line x1="16.2" y1="55.8" x2="21.8" y2="50.2" />
        <line x1="50.2" y1="21.8" x2="55.8" y2="16.2" />
      </g>
    </svg>
  );
}

export function Skyline() {
  return (
    <svg className="hero-skyline" viewBox="0 0 600 80" preserveAspectRatio="xMidYMax meet" aria-hidden>
      <path
        fill="#94A3B8"
        opacity="0.35"
        d="M0 80V55 L30 45 L55 52 L80 38 L110 48 L140 35 L170 50 L200 30 L230 45 L260 40 L290 55 L320 42 L350 50 L380 35 L410 48 L440 38 L470 52 L500 40 L530 48 L560 35 L600 45 V80 Z"
      />
      <path fill="#64748B" opacity="0.25" d="M180 80V25 L195 15 L210 25 V80 M350 80V20 L365 8 L380 20 V80 M480 80V30 L495 18 L510 30 V80" />
    </svg>
  );
}

const STAT_ICONS = {
  Humidity: HumidityIcon,
  "Wind Speed": WindIcon,
  "Min / Max": ThermometerIcon,
  Pressure: PressureIcon,
  "Cloud Cover": CloudIcon,
  Visibility: EyeIcon,
};

export function StatIcon({ label }) {
  const Icon = STAT_ICONS[label] || CloudIcon;
  return <Icon />;
}

export function GlanceIcon({ label }) {
  return <StatIcon label={label === "Max/Min" ? "Min / Max" : label} />;
}

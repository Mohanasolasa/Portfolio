import './Rail.css';

export default function Rail() {
  return (
    <svg className="trace-rail" width="3" height="100%" viewBox="0 0 3 2000" preserveAspectRatio="none">
      <line x1="1.5" y1="0" x2="1.5" y2="2000" stroke="var(--copper)" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="1.5" cy="120" r="4" fill="var(--copper)" />
      <circle cx="1.5" cy="640" r="4" fill="var(--copper)" />
      <circle cx="1.5" cy="1180" r="4" fill="var(--copper)" />
      <circle cx="1.5" cy="1720" r="4" fill="var(--copper)" />
    </svg>
  );
}

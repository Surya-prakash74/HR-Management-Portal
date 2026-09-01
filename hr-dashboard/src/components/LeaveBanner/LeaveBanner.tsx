import './LeaveBanner.css';

export default function LeaveBanner() {
  return (
    <div className="leave-banner">
      <div className="leave-banner-text">
        <h3>
          Manage ALL <span>Leave Applications</span>
        </h3>
        <p>A relaxed employee is a performing employee.</p>
      </div>

      {/* Stand-in illustration — swap for the Figma export when the asset is available */}
      <svg className="leave-banner-art" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="150" width="220" height="6" rx="3" fill="#ffffff33" />
        <circle cx="60" cy="45" r="22" fill="#ffd166" />
        <rect x="45" y="66" width="30" height="55" rx="12" fill="#ffffff" />
        <rect x="95" y="95" width="80" height="8" rx="4" fill="#ffffff" opacity="0.85" />
        <rect x="95" y="112" width="60" height="8" rx="4" fill="#ffd166" opacity="0.9" />
        <rect x="90" y="130" width="90" height="20" rx="4" fill="#ffffff22" />
        <circle cx="205" cy="55" r="8" fill="#ffd166" />
        <path d="M205 63 v20 M198 70 h14" stroke="#ffd166" strokeWidth="3" strokeLinecap="round" />
        <rect x="185" y="120" width="16" height="30" rx="3" fill="#ffffff55" />
        <rect x="30" y="30" width="4" height="4" fill="#ffd166" />
      </svg>
    </div>
  );
}
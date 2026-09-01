import { Grid3x3, CircleUserRound } from 'lucide-react';
import { NAV_ITEMS, type NavKey } from '../../nav';
import './Sidebar.css';

const SECTIONS = ['Features', 'Recruitment', 'Organization'] as const;

interface Props {
  active: NavKey;
  onSelect: (key: NavKey) => void;
  open: boolean;
}

export default function Sidebar({ active, onSelect, open }: Props) {
  return (
    <aside className={`sidebar${open ? '' : ' sidebar--closed'}`}>
      <div className="brand">
        <Grid3x3 size={20} className="brand-icon" />
        <span>XCELTECH</span>
      </div>

      <div className="profile">
        <CircleUserRound size={44} strokeWidth={1.25} />
        <div>
          <div className="profile-name">Admin</div>
          <div className="profile-role">Admin</div>
        </div>
      </div>

      <nav className="nav">
        {SECTIONS.map((section) => (
          <div key={section}>
            <div className="nav-section-label">{section}</div>
            {NAV_ITEMS.filter((item) => item.section === section).map((item) => (
              <button
                key={item.key}
                className={`nav-item${active === item.key ? ' active' : ''}`}
                onClick={() => onSelect(item.key)}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
                {item.badge && <span className="nav-dot" />}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
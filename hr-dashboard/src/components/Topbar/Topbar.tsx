import { useEffect, useRef, useState } from 'react';
import { Menu, ChevronDown, Search, Bell, Wrench, Mail, ArrowLeft } from 'lucide-react';
import { messages } from '../../data';
import './Topbar.css';

const CANDIDATE_FILTERS = ['All Candidates', 'Active Candidates', 'Archived Candidates'];

const NOTIFICATIONS = [
  'Priya Patel submitted a new leave request.',
  'Payroll run for July completed successfully.',
  '3 new candidates applied for Frontend Engineer.',
];

type Menu = 'candidates' | 'notifications' | 'mail' | null;

interface Props {
  onOpenMessages: () => void;
  onToggleSidebar: () => void;
  onBack?: () => void;
}

export default function Topbar({ onOpenMessages, onToggleSidebar, onBack }: Props) {
  const [openMenu, setOpenMenu] = useState<Menu>(null);
  const [candidateFilter, setCandidateFilter] = useState(CANDIDATE_FILTERS[0]);
  const rootRef = useRef<HTMLElement>(null);
  const unread = messages.filter((m) => m.unread).length;

  // Close whichever dropdown is open on an outside click.
  useEffect(() => {
    if (!openMenu) return;
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, [openMenu]);

  const toggle = (menu: Menu) => setOpenMenu((cur) => (cur === menu ? null : menu));

  return (
    <header className="topbar" ref={rootRef}>
      <button className="icon-btn plain" aria-label="Toggle menu" onClick={onToggleSidebar}>
        <Menu size={22} />
      </button>

      {onBack && (
        <button className="icon-btn plain" aria-label="Go back" onClick={onBack}>
          <ArrowLeft size={22} />
        </button>
      )}

      <div className="dropdown">
        <button className="candidates-select" onClick={() => toggle('candidates')}>
          <span>{candidateFilter}</span>
          <ChevronDown size={16} />
        </button>
        {openMenu === 'candidates' && (
          <div className="dropdown-menu">
            {CANDIDATE_FILTERS.map((f) => (
              <button
                key={f}
                className="dropdown-item"
                onClick={() => {
                  setCandidateFilter(f);
                  setOpenMenu(null);
                }}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <Search size={16} />
      </div>

      <div className="topbar-icons">
        <div className="dropdown">
          <button className="badge-icon blue" onClick={() => toggle('notifications')} aria-label="Notifications">
            <Bell size={16} />
            <i>{NOTIFICATIONS.length}</i>
          </button>
          {openMenu === 'notifications' && (
            <div className="dropdown-menu right">
              <div className="dropdown-title">Notifications</div>
              {NOTIFICATIONS.map((n) => (
                <div className="dropdown-item static" key={n}>
                  {n}
                </div>
              ))}
            </div>
          )}
        </div>

        <span className="badge-icon yellow static" aria-label="Settings">
          <Wrench size={16} />
        </span>

        <div className="dropdown">
          <button className="badge-icon green" onClick={() => toggle('mail')} aria-label="Messages">
            <Mail size={16} />
            {unread > 0 && <i>{unread}</i>}
          </button>
          {openMenu === 'mail' && (
            <div className="dropdown-menu right">
              <div className="dropdown-title">Messages</div>
              {messages.slice(0, 4).map((m) => (
                <div className="dropdown-item static" key={m.id}>
                  <strong>{m.sender}</strong>
                  <span>{m.subject}</span>
                </div>
              ))}
              <button
                className="dropdown-view-all"
                onClick={() => {
                  setOpenMenu(null);
                  onOpenMessages();
                }}
              >
                View all messages
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
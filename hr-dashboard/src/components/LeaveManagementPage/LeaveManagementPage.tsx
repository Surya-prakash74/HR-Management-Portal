import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import LeaveBanner from '../LeaveBanner/LeaveBanner';
import LeaveSettingsView from '../LeaveSettingsView/LeaveSettingsView';
import LeaveRecallView from '../LeaveRecallView/LeaveRecallView';
import LeaveHistoryView from '../LeaveHistoryView/LeaveHistoryView';
import './LeaveManagementPage.css';

type Tab = 'none' | 'settings' | 'recall' | 'history';

const TABS: { key: Tab; label: string }[] = [
  { key: 'settings', label: 'Leave Settings' },
  { key: 'recall', label: 'Leave Recall' },
  { key: 'history', label: 'Leave History' },
];

export default function LeaveManagementPage() {
  const [tab, setTab] = useState<Tab>('none');

  return (
    <div className="leave-page">
      <div className="leave-page-title">
        <BookOpen size={20} />
        <h2>Leave Management</h2>
      </div>

      <div className="leave-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`tab-btn${tab === t.key ? ' active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
        {/* Relief Officers: not needed yet — kept visually, no behavior wired up. */}
        <button className="tab-btn" disabled>
          Relief Officers
        </button>
      </div>

      {tab === 'none' && <LeaveBanner />}
      {tab === 'settings' && <LeaveSettingsView />}
      {tab === 'recall' && <LeaveRecallView />}
      {tab === 'history' && <LeaveHistoryView />}
    </div>
  );
}
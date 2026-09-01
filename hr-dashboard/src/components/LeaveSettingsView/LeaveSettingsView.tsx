import { ChevronDown } from 'lucide-react';
import { leaveSettings } from '../../data';
import '../shared/shared.css';
import './LeaveSettingsView.css';

export default function LeaveSettingsView() {
  return (
    <div className="settings-grid">
      <section className="card">
        <h4>Create Leave Settings</h4>

        <label className="field">
          <span>Leave Plan Name</span>
          <input type="text" placeholder="Maternity" />
        </label>

        <label className="field">
          <span>Duration (days)</span>
          <input type="number" placeholder="60" />
        </label>

        <label className="field">
          <span>Do you want to activate Leave Recall for this plan?</span>
          <div className="select-like">
            Select option from dropdown <ChevronDown size={16} />
          </div>
        </label>

        <label className="field">
          <span>Would you like to activate leave bonus?</span>
          <div className="select-like">
            Select option from dropdown <ChevronDown size={16} />
          </div>
        </label>

        <label className="field">
          <span>How much percentage of leave bonus</span>
          <input type="text" placeholder="Percentage (%)" />
        </label>

        <label className="field">
          <span>Select Leave Allocation</span>
          <div className="select-like">
            Senior Level <ChevronDown size={16} />
          </div>
        </label>

        <label className="field">
          <span>Reason for Recall</span>
          <textarea rows={3} />
        </label>

        <button className="btn-create">Create</button>
      </section>

      <section className="card">
        <div className="card-header-row">
          <h4>Manage Leave Settings</h4>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Leave Plan</th>
              <th>Duration(s)</th>
              <th>Recall / Autorenew</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveSettings.map((s) => (
              <tr key={s.id}>
                <td>{s.plan}</td>
                <td>{s.durationDays}</td>
                <td>{s.recallAutorenew}</td>
                <td>
                  <button className="btn-actions">
                    Actions <ChevronDown size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
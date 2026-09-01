import { Filter, Download, ChevronDown } from 'lucide-react';
import { leaveHistory } from '../../data';
import '../shared/shared.css';
import './LeaveHistoryView.css';

export default function LeaveHistoryView() {
  return (
    <section className="card">
      <div className="card-header-row">
        <h4>Leave History</h4>
        <div className="card-header-actions">
          <button className="icon-btn plain" aria-label="Filter">
            <Filter size={16} />
          </button>
          <button className="btn-export">
            Export <Download size={14} />
          </button>
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name(s)</th>
            <th>Duration(s)</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Type</th>
            <th>Reason(s)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveHistory.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.durationDays}</td>
              <td>{r.startDate}</td>
              <td>{r.endDate}</td>
              <td>{r.type}</td>
              <td>{r.reason}</td>
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
  );
}
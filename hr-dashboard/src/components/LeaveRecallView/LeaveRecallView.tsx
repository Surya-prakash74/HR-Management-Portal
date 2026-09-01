import { useState } from 'react';
import { ongoingLeaveApplications } from '../../data';
import '../shared/shared.css';
import './LeaveRecallView.css';

export default function LeaveRecallView() {
  const [rows, setRows] = useState(ongoingLeaveApplications);

  return (
    <section className="card">
      <div className="card-header-row">
        <h4>Ongoing Leave Applications</h4>
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
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.durationDays}</td>
              <td>{r.startDate}</td>
              <td>{r.endDate}</td>
              <td>{r.type}</td>
              <td>{r.reason}</td>
              <td>
                <button
                  className="btn-recall"
                  onClick={() => setRows((prev) => prev.filter((row) => row.id !== r.id))}
                >
                  Recall
                </button>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className="empty-row">
                No ongoing leave applications.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
import { LayoutGrid, Users, Briefcase, UserPlus, CalendarClock } from 'lucide-react';
import { employees, jobPostings, candidates, ongoingLeaveApplications } from '../../data';
import '../shared/shared.css';
import './Dashboard.css';

const STATS = [
  { label: 'Total Employees', value: employees.length, icon: Users, tone: 'blue' },
  { label: 'Open Positions', value: jobPostings.filter((j) => j.status === 'Open').length, icon: Briefcase, tone: 'green' },
  { label: 'Candidates in Pipeline', value: candidates.length, icon: UserPlus, tone: 'yellow' },
  { label: 'Pending Leave Requests', value: ongoingLeaveApplications.length, icon: CalendarClock, tone: 'red' },
] as const;

export default function Dashboard() {
  return (
    <div>
      <div className="page-title">
        <LayoutGrid size={20} />
        <h2>Dashboard</h2>
      </div>

      <div className="stat-grid">
        {STATS.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className={`stat-icon ${s.tone}`}>
              <s.icon size={20} />
            </span>
            <div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <section className="card">
          <h4>Recent Leave Applications</h4>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {ongoingLeaveApplications.slice(0, 5).map((l) => (
                <tr key={l.id}>
                  <td>{l.name}</td>
                  <td>{l.type}</td>
                  <td>{l.durationDays} days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="card">
          <h4>Open Positions</h4>
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Department</th>
                <th>Applicants</th>
              </tr>
            </thead>
            <tbody>
              {jobPostings
                .filter((j) => j.status === 'Open')
                .slice(0, 5)
                .map((j) => (
                  <tr key={j.id}>
                    <td>{j.title}</td>
                    <td>{j.department}</td>
                    <td>{j.applicants}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
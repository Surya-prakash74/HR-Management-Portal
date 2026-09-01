import { Users, ChevronDown } from 'lucide-react';
import { candidates } from '../../data';
import '../shared/shared.css';

const STAGE_PILL: Record<string, string> = {
  Screening: 'pill-red',
  Interview: 'pill-blue',
  Offer: 'pill-green',
  Hired: 'pill-white',
};

export default function Candidates() {
  return (
    <div>
      <div className="page-title">
        <Users size={30} />
        <h2>CANDIDATES</h2>
      </div>

      <section className="card">
        <div className="card-header-row">
          <h3>All Candidates</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Applied For</th>
              <th>Stage</th>
              <th>Experience</th>
              <th>Applied Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.appliedFor}</td>
                <td>
                  <span className={`pill ${STAGE_PILL[c.stage]}`}>{c.stage}</span>
                </td>
                <td>{c.experience}</td>
                <td>{c.appliedDate}</td>
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
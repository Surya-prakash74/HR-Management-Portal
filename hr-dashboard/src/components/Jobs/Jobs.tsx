import { Briefcase, Plus, ChevronDown } from 'lucide-react';
import { jobPostings } from '../../data';
import '../shared/shared.css';

export default function Jobs() {
  return (
    <div>
      <div className="page-title">
        <Briefcase size={20} />
        <h2>Jobs</h2>
      </div>

      <section className="card">
        <div className="card-header-row">
          <h4>Open Positions</h4>
          <button className="btn-primary">
            <Plus size={14} /> Post a Job
          </button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Type</th>
              <th>Applicants</th>
              <th>Posted</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobPostings.map((j) => (
              <tr key={j.id}>
                <td>{j.title}</td>
                <td>{j.department}</td>
                <td>{j.location}</td>
                <td>{j.type}</td>
                <td>{j.applicants}</td>
                <td>{j.postedDate}</td>
                <td>
                  <span className={`pill ${j.status === 'Open' ? 'pill-green' : 'pill-gray'}`}>
                    {j.status}
                  </span>
                </td>
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
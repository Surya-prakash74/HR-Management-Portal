import { BarChart3, Star, ChevronDown } from 'lucide-react';
import { performanceReviews } from '../../data';
import '../shared/shared.css';
import './PerformanceManagement.css';

const STATUS_PILL: Record<string, string> = {
  Completed: 'pill-green',
  'In Progress': 'pill-yellow',
  'Not Started': 'pill-gray',
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="star-row">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={14} fill={i < rating ? '#f6b40e' : 'none'} color="#f6b40e" />
      ))}
    </span>
  );
}

export default function PerformanceManagement() {
  return (
    <div>
      <div className="page-title">
        <BarChart3 size={20} />
        <h2>Performance Management</h2>
      </div>

      <section className="card">
        <div className="card-header-row">
          <h4>Performance Reviews</h4>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Review Period</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {performanceReviews.map((p) => (
              <tr key={p.id}>
                <td>{p.employee}</td>
                <td>{p.period}</td>
                <td>
                  <Stars rating={p.rating} />
                </td>
                <td>
                  <span className={`pill ${STATUS_PILL[p.status]}`}>{p.status}</span>
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
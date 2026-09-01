import { CreditCard, PlayCircle, ChevronDown } from 'lucide-react';
import { payrollEntries } from '../../data';
import '../shared/shared.css';

const currency = (n: number) => `ETB ${n.toLocaleString()}`;

export default function PayrollManagement() {
  return (
    <div>
      <div className="page-title">
        <CreditCard size={20} />
        <h2>Payroll Management</h2>
      </div>

      <section className="card">
        <div className="card-header-row">
          <h4>Payroll — July 2026</h4>
          <button className="btn-primary">
            <PlayCircle size={14} /> Run Payroll
          </button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Salary</th>
              <th>Bonus</th>
              <th>Deductions</th>
              <th>Net Pay</th>
              <th>Pay Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payrollEntries.map((p) => (
              <tr key={p.id}>
                <td>{p.employee}</td>
                <td>{currency(p.salary)}</td>
                <td>{currency(p.bonus)}</td>
                <td>{currency(p.deductions)}</td>
                <td>{currency(p.salary + p.bonus - p.deductions)}</td>
                <td>{p.payDate}</td>
                <td>
                  <span className={`pill ${p.status === 'Paid' ? 'pill-green' : 'pill-yellow'}`}>
                    {p.status}
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
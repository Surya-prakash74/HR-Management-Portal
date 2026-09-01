import { useEffect, useRef, useState } from 'react';
import { User, ChevronDown } from 'lucide-react';
import { employees } from '../../data';
import type { Employee } from '../../types';
import EmployeeProfile from '../EmployeeProfile/EmployeeProfile';
import '../shared/shared.css';

export default function EmployeeManagement() {
  const [viewing, setViewing] = useState<Employee | null>(null);
  const [openRow, setOpenRow] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openRow) return;
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenRow(null);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, [openRow]);

  if (viewing) {
    return <EmployeeProfile employee={viewing} onBack={() => setViewing(null)} />;
  }

  return (
    <div ref={rootRef}>
      <div className="page-title">
        <User size={20} />
        <h2>Employee Management</h2>
      </div>

      <section className="card">
        <div className="card-header-row">
          <h4>Employees</h4>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.department}</td>
                <td>{e.role}</td>
                <td>{e.email}</td>
                <td>
                  <span className={`pill ${e.status === 'Active' ? 'pill-green' : 'pill-yellow'}`}>
                    {e.status}
                  </span>
                </td>
                <td>
                  <div className="dropdown">
                    <button className="btn-actions" onClick={() => setOpenRow((cur) => (cur === e.id ? null : e.id))}>
                      Actions <ChevronDown size={14} />
                    </button>
                    {openRow === e.id && (
                      <div className="dropdown-menu">
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setOpenRow(null);
                            setViewing(e);
                          }}
                        >
                          View Profile
                        </button>
                        <button className="dropdown-item" onClick={() => setOpenRow(null)}>
                          Edit Profile
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
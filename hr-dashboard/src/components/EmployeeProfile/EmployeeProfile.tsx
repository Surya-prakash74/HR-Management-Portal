import { useState } from 'react';
import { UserCircle2, Pencil } from 'lucide-react';
import type { Employee } from '../../types';
import '../shared/shared.css';
import './EmployeeProfile.css';

type Tab =
  | 'personal'
  | 'contact'
  | 'nextOfKin'
  | 'education'
  | 'guarantor'
  | 'family'
  | 'job'
  | 'financial';

const TABS: { key: Tab; label: string }[] = [
  { key: 'personal', label: 'Personal Details' },
  { key: 'contact', label: 'Contact Details' },
  { key: 'nextOfKin', label: 'Next of kin Details' },
  { key: 'education', label: 'Education Qualifications' },
  { key: 'guarantor', label: 'Guarantor Details' },
  { key: 'family', label: 'Family Details' },
  { key: 'job', label: 'Job Details' },
  { key: 'financial', label: 'Financial Details' },
];

interface Props {
  employee: Employee;
  onBack: () => void;
}

export default function EmployeeProfile({ employee, onBack }: Props) {
  const [tab, setTab] = useState<Tab>('personal');
  const p = employee.profile;

  return (
    <div>
      <div className="page-title breadcrumb">
        <button className="crumb-link" onClick={onBack}>
          Employee Mgmt
        </button>
        <span>/</span>
        <span>Employee Profile</span>
        <span>/</span>
        <span>{employee.name}</span>
      </div>

      <div className="profile-layout">
        <nav className="card profile-tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`profile-tab-btn${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <section className="card profile-content">
          {tab === 'personal' && (
            <div className="profile-personal">
              <UserCircle2 size={96} className="profile-avatar" />
              <div className="profile-edit-icon" aria-hidden="true">
                <Pencil size={16} />
              </div>
              <div className="profile-name">Employee Name</div>
              <div className="profile-name-value">{employee.name}</div>
              <div className="profile-field-label">Department</div>
              <div className="profile-field-value">{employee.department}</div>
              <div className="profile-grid-2">
                <div>
                  <div className="profile-field-label">Job Title</div>
                  <div className="profile-field-value">{employee.role}</div>
                </div>
                <div>
                  <div className="profile-field-label">Job Category</div>
                  <div className="profile-field-value">{p.jobCategory}</div>
                </div>
              </div>
            </div>
          )}

          {tab === 'contact' && (
            <div>
              <div className="profile-grid-2">
                <Field label="Phone Number 1" value={p.phone1} />
                <Field label="Phone Number 2" value={p.phone2 || '—'} />
              </div>
              <Field label="E-mail Address" value={employee.email} />
              <Field label="City of residence" value={p.city} />
              <Field label="Residential Address" value={p.address} />
            </div>
          )}

          {tab === 'nextOfKin' && (
            <div>
              <h4>Next of Kin Details</h4>
              <div className="profile-grid-2">
                <Field label="Next of kin name" value={p.nextOfKin.name} />
                <Field label="Job / Occupation" value={p.nextOfKin.occupation} />
              </div>
              <div className="profile-grid-2">
                <Field label="Phone Number" value={p.nextOfKin.phone} />
                <Field label="Relationship" value={p.nextOfKin.relationship} />
              </div>
              <Field label="Residential Address" value={p.nextOfKin.address} />
            </div>
          )}

          {tab === 'education' && (
            <div>
              <h4>Academic Records</h4>
              {p.academicRecords.map((r) => (
                <div className="profile-list-item" key={r.institution}>
                  <strong>{r.institution}</strong>
                  {r.detail && <span>{r.detail}</span>}
                </div>
              ))}

              <h4 className="profile-section-gap">Professional Qualifications</h4>
              {p.professionalQualifications.map((r) => (
                <div className="profile-list-item" key={r.title}>
                  <strong>{r.title}</strong>
                  {r.detail && <span>{r.detail}</span>}
                  {r.bullets && (
                    <ul>
                      {r.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab === 'guarantor' && (
            <div>
              <h4>Guarantor Details</h4>
              {p.guarantors.map((g) => (
                <div className="profile-list-item" key={g.name}>
                  <strong>{g.name}</strong>
                  {g.detail && <span>{g.detail}</span>}
                </div>
              ))}
            </div>
          )}

          {tab === 'family' && (
            <div>
              <h4>Family Details</h4>
              {p.family.map((f) => (
                <div className="profile-list-item" key={f.name}>
                  <strong>{f.name}</strong>
                  <span>
                    Relationship : {f.relationship} | Phone No : {f.phone}
                  </span>
                  <span>Address: {f.address}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'job' && (
            <div>
              <h4>View Job Details</h4>
              <div className="profile-job-block">
                <div className="profile-field-label">Job Role</div>
                <div className="profile-name-value">{employee.role}</div>
              </div>
              <div className="profile-job-block">
                <div className="profile-field-label">Department</div>
                <div className="profile-name-value">{employee.department}</div>
              </div>
              <div className="profile-job-block">
                <div className="profile-field-label">Job Description</div>
                <ul>
                  {p.jobDescription.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <button className="btn-primary" disabled>
                View Documents
              </button>
            </div>
          )}

          {tab === 'financial' && (
            <div>
              <h4>Financial Details</h4>
              <Field label="Bank Name" value={p.bankName} />
              <div className="profile-grid-2">
                <Field label="Account No" value={p.accountNo} />
                <Field label="Account Name" value={p.accountName} />
              </div>
              <button className="btn-primary profile-update-btn" disabled>
                Update Account Details
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="profile-field">
      <span>{label}</span>
      <div className="profile-field-box">{value}</div>
    </label>
  );
}
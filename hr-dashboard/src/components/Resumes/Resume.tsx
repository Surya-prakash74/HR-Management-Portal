import { FileText, Download } from 'lucide-react';
import { resumeEntries } from '../../data';
import '../shared/shared.css';

export default function Resumes() {
  return (
    <div>
      <div className="page-title">
        <FileText size={20} />
        <h2>Resumes</h2>
      </div>

      <section className="card">
        <div className="card-header-row">
          <h4>Uploaded Resumes</h4>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>File</th>
              <th>Skills</th>
              <th>Uploaded</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resumeEntries.map((r) => (
              <tr key={r.id}>
                <td>{r.candidateName}</td>
                <td>{r.fileName}</td>
                <td>
                  {r.skills.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </td>
                <td>{r.uploadedDate}</td>
                <td>
                  <button className="btn-actions">
                    <Download size={14} /> Download
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
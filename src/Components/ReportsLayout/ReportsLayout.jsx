import React from "react";
import "./ReportsLayout.css";

function ReportsLayout() {

  const reports = [
    {
      id: 1,
      name: "Blood Test Report",
      file: "/patient_report.pdf"
    },
    {
      id: 2,
      name: "X-Ray Report",
      file: "/patient_report.pdf"
    }
  ];

  return (
    <div className="reports-container">

      <h2>My Reports</h2>

      {reports.map((report) => (
        <div key={report.id} className="report-card">

          <span>{report.name}</span>

          <div className="report-actions">

            {/* VER */}
            <a href={report.file} target="_blank" rel="noreferrer">
              <button>View</button>
            </a>

            {/* DESCARGAR */}
            <a href={report.file} download>
              <button>Download</button>
            </a>

          </div>

        </div>
      ))}

    </div>
  );
}

export default ReportsLayout;
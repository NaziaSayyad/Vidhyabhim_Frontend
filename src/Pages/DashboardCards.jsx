import React from "react";
import "./dashboardcard.css"; // Import the CSS file

const DashboardCards = () => {
  const stats = [
    { count: 118, label: "Total Students", color: "#17a2b8" }, // Blue
    { count: 7, label: "Total Courses", color: "#28a745" }, // Green
    { count: 14, label: "Total Batches", color: "#ffc107" }, // Yellow
    { count: 8, label: "Total Subjects", color: "#dc3545" }, // Red
  ];

  return (
    <div id="dashboard-cards">
      {stats.map((stat, index) => (
        <div key={index} className="card" style={{ backgroundColor: stat.color }}>
          <h2>{stat.count}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;

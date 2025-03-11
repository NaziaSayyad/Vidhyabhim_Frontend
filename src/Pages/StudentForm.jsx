import React from "react";
import "./StudentForm.css";

const StudentForm = () => {
  return (
    <div className="container">
    {/* Add New Student Form */}
   
     <div className="form-section yellow">
        <div style={{backgroundColor: 'yellow', color : 'black'}}> <h2 >Upload Document</h2> </div>
        <div className="form-group">
          <label>Father Name:</label>
          <input type="text" />
          <input type="text" placeholder="Father Phone No." />
        </div>

        <div className="form-group">
          <label>Mother Name:</label>
          <input type="text" />
          <input type="text" placeholder="Mother Phone No." />
        </div>

        <div className="form-group">
          <label>Upload Candidate Photo:</label>
          <input type="file" />
          <label>Upload Candidate Sign:</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Upload Document 1:</label>
          <input type="file" />
          <label>Upload Document 2:</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Upload Document 3:</label>
          <input type="file" />
          <label>Upload Document 4:</label>
          <input type="file" />
        </div>
     </div>

  </div>
  );
};

export default StudentForm;

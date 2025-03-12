import { useState } from "react";

export const UploadData = ({ formData, setFormData }) => {
  
  console.log('formdata',formData);
  
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  // };

  return (
    <div className="content-wrapper">
      <div style={{ backgroundColor: "yellow" }}>
        <h2 className="form-title">Add New Student</h2>
      </div>

      
    </div>
  );
};
/* 
<form>
        {/* Batch, Stream, Course Selection }*/
      //   <div style={{ display: "flex" }}>
      //     <div className="form-group">
      //       <label>Select Batch:</label>
      //       <select name="batch" onChange={handleChange} value={formData.batch || ""}>
      //         <option value="">Select Batch</option>
      //         <option value="Batch 1">Batch 1</option>
      //         <option value="Batch 2">Batch 2</option>
      //       </select>
      //     </div>

      //     <div className="form-group">
      //       <label>Select Stream:</label>
      //       <select name="stream" onChange={handleChange} value={formData.stream || ""}>
      //         <option value="">Select Stream</option>
      //         <option value="Stream 1">Stream 1</option>
      //         <option value="Stream 2">Stream 2</option>
      //       </select>
      //     </div>

      //     <div className="form-group">
      //       <label>Select Course:</label>
      //       <select name="course" onChange={handleChange} value={formData.course || ""}>
      //         <option value="">Select Course</option>
      //         <option value="Course 1">Course 1</option>
      //         <option value="Course 2">Course 2</option>
      //       </select>
      //     </div>
      //   </div>

      //   {/* Student Details */}
      //   <div id="form-input">
      //     <div className="form-group">
      //       <label>Enrolment Number:</label>
      //       <input type="text" name="enrolmentNumber" onChange={handleChange} value={formData.enrolmentNumber || ""} />
      //     </div>
      //     <div className="form-group">
      //       <label>Student Name:</label>
      //       <input type="text" name="studentName" onChange={handleChange} value={formData.studentName || ""} />
      //     </div>
      //     <div className="form-group">
      //       <label>Email ID:</label>
      //       <input type="email" name="email" onChange={handleChange} value={formData.email || ""} />
      //     </div>
      //     <div className="form-group">
      //       <label>Phone:</label>
      //       <input type="text" name="phone" onChange={handleChange} value={formData.phone || ""} />
      //     </div>
      //     <div className="form-group">
      //       <label>Address:</label>
      //       <input type="text" name="address" onChange={handleChange} value={formData.address || ""} />
      //     </div>
      //   </div>

      //   {/* Parent Details & File Uploads */}
      //   <div className="content-wrapper">
      //     <div style={{ backgroundColor: "skyBlue" }}>
      //       <h2 className="form-title">Upload Student</h2>
      //     </div>

      //     <div id="form-input">
      //       <div className="form-group">
      //         <label>Father Name:</label>
      //         <input type="text" name="fatherName" onChange={handleChange} value={formData.fatherName || ""} />
      //       </div>
      //       <div className="form-group">
      //         <label>Father Phone:</label>
      //         <input type="text" name="fatherPhone" onChange={handleChange} value={formData.fatherPhone || ""} />
      //       </div>
      //       <div className="form-group">
      //         <label>Mother Name:</label>
      //         <input type="text" name="motherName" onChange={handleChange} value={formData.motherName || ""} />
      //       </div>
      //       <div className="form-group">
      //         <label>Mother Phone:</label>
      //         <input type="text" name="motherPhone" onChange={handleChange} value={formData.motherPhone || ""} />
      //       </div>

      //       {/* File Uploads */}
      //       <div className="form-group">
      //         <label>Upload Candidate Photo:</label>
      //         <input type="file" name="photo" onChange={handleFileChange} />
      //       </div>
      //       <div className="form-group">
      //         <label>Upload Candidate Sign:</label>
      //         <input type="file" name="sign" onChange={handleFileChange} />
      //       </div>
      //       <div className="form-group">
      //         <label>Upload Document 1:</label>
      //         <input type="file" name="document1" onChange={handleFileChange} />
      //       </div>
      //       <div className="form-group">
      //         <label>Upload Document 2:</label>
      //         <input type="file" name="document2" onChange={handleFileChange} />
      //       </div>
      //       <div className="form-group">
      //         <label>Upload Document 3:</label>
      //         <input type="file" name="document3" onChange={handleFileChange} />
      //       </div>
      //       <div className="form-group">
      //         <label>Upload Document 4:</label>
      //         <input type="file" name="document4" onChange={handleFileChange} />
      //       </div>
      //     </div>
      //   </div>

      //   {/* Submit Button */}
      //   <button type="button" onClick={handleSubmit}>
      //     Submit
      //   </button>
      // </form>
// 

import { useState } from "react";

export const NewStudent = () =>{
  
  const [formData, setFormData] = useState({
    batch: "",
    batchTime: "",
    stream: "",
    enrolmentNumber: "",
    course: "",
    admissionNumber: "",
    semester: "",
    admissionDate: "",
    session: "",
    studentName: "",
    gender: "",
    nationality: "",
    caste: "",
    religion: "",
    maritalStatus: "",
    bloodGroup: "",
    email: "",
    dob: "",
    address: "",
    pinCode: "",
    phone: "",
    aadharCard: "",
    fatherName: "",
    fatherPhone: "",
    motherName: "",
    motherPhone: "",
    password: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, documents: { ...formData.documents, [name]: files[0] } });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="content-wrapper">
      <h2 className="form-title">Add New Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label>Select Batch:</label>
          <select name="batch" onChange={handleChange} value={formData.batch}>
            <option>Select Batch</option>
            <option>Batch 1</option>
            <option>Batch 2</option>
          </select>
        </div>
        {/* select Stream  */}
        <div className="form-group">
          <label>Select Stream :</label>
          <select name="batch" onChange={handleChange} value={formData.batch}>
            <option>Select Stream </option>
            <option>Batch 1</option>
            <option>Batch 2</option>
          </select>
        </div>
        {/* ...... */}
        <div className="form-group">
          <label>Enrolment Number:</label>
          <input type="text" name="enrolmentNumber" onChange={handleChange} value={formData.enrolmentNumber} />
        </div>
        <div className="form-group">
          <label>Student Name:</label>
          <input type="text" name="studentName" onChange={handleChange} value={formData.studentName} />
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" onChange={handleChange} value={formData.phone} />
        </div>
        <div className="form-group">
          <label>Upload Document:</label>
          <input type="file" name="document1" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn-submit">Add Student</button>
      </form>
    </div>
  );
};



import { useState } from "react";export const NewStudent = () =>{
  
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
  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData({ ...formData, documents: { ...formData.documents, [name]: files[0] } });
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
    {/* <div id="main-box">  */}
    {/* <div className="content-wrapper">
      <div style={{backgroundColor : 'yellow'}}> <h2 className="form-title">Add New Student</h2> </div>
      <form onSubmit={handleSubmit} className="student-form">
        <div style={{display: 'flex'}}>
        <div className="form-group">
          <label>Select Batch:</label>
          <select name="batch" onChange={handleChange} value={formData.batch}>
            <option>Select Batch</option>
            <option>Batch 1</option>
            <option>Batch 2</option>
          </select>
        </div>
        select Stream 
        <div className="form-group">
          <label>Select Stream :</label>
          <select name="batch" onChange={handleChange} value={formData.stream}>
            <option>Select Stream </option>
            <option>Batch 1</option>
            <option>Batch 2</option>
          </select>
        </div>
        select Course 
        <div className="form-group">
          <label>Select Course :</label>
          <select name="batch" onChange={handleChange} value={formData.course}>
            <option>Select Course </option>
            <option>Batch 1</option>
            <option>Batch 2</option>
          </select>
        </div>
        </div>
        <div id="form-input">
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
          <label>admissionNumber:</label>
          <input type="text" name="admissionNumber" onChange={handleChange} value={formData.admissionNumber} />
        </div>
        <div className="form-group">
          <label>session:</label>
          <input type="text" name="session" onChange={handleChange} value={formData.session} />
        </div>
        <div className="form-group">
          <label>nationality:</label>
          <input type="text" name="nationality" onChange={handleChange} value={formData.nationality} />
        </div>
        <div className="form-group">
          <label>Caste:</label>
          <input type="text" name="Caste" onChange={handleChange} value={formData.caste} />
        </div>
        <div className="form-group">
          <label>religion:</label>
          <input type="text" name="religion" onChange={handleChange} value={formData.religion} />
        </div>
        <div className="form-group">
          <label>maritial Status:</label>
          <input type="text" name="maritialstatus" onChange={handleChange} value={formData.maritialstatus} />
        </div>
        <div className="form-group">
          <label>bloodGroup:</label>
          <input type="text" name="bloodGroup" onChange={handleChange} value={formData.bloodGroup} />
        </div>
        <div className="form-group">
          <label>DOB:</label>
          <input type="text" name="DOB" onChange={handleChange} value={formData.dob} />
        </div>
        <div className="form-group">
          <label>address:</label>
          <input type="text" name="address" onChange={handleChange} value={formData.address} />
        </div>
        <div className="form-group">
          <label>pinCode:</label>
          <input type="text" name="pinCode" onChange={handleChange} value={formData.pinCode} />
        </div>
        <div className="form-group">
          <label>aadharCard:</label>
          <input type="text" name="aadharCard" onChange={handleChange} value={formData.aadharCard} />
        </div>
        </div>
        <div>  
          <h2> Upload Students </h2>

        </div>
       
      </form>
    </div> */}
   {/* ........................................Upload Students .............................................. */}
      {/* <UploadData 
      /> */}
    {/* </div> */}
    </>
  );
};



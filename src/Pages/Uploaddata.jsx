import { useState } from "react";

export const UploadData = () =>{
    const [formData, setFormData] = useState({
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
      const handleFileChange = () =>{

      }
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    return (
        <>
        <div>
        <div className="content-wrapper">
          <div style={{backgroundColor : 'skyBlue'}}> <h2 className="form-title">Upload Student </h2> </div>
      <form onSubmit={handleSubmit} className="student-form">
       
        {/* ...... */}
        <div id="form-input">
        <div className="form-group">
          <label>Father Name :</label>
          <input type="text" name="fathername" onChange={handleChange} value={formData.fatherName} />
        </div>
        <div className="form-group">
          <label>Father Phone Nu :</label>
          <input type="text" name="FatherPhone" onChange={handleChange} value={formData.fatherPhone} />
        </div>
        <div className="form-group">
          <label>Mother Name:</label>
          <input type="text" name="motherName" onChange={handleChange} value={formData.motherName} />
        </div>
        <div className="form-group">
          <label>Mother Phone:</label>
          <input type="text" name="Motherphone" onChange={handleChange} value={formData.motherPhone} />
        </div>
        <div className="form-group">
          <label>Upload Candidate Photo : </label>
        {/* <input type="text" name="aadharCard" onChange={handleChange} value={formData.aadharCard} /> */}
        <input type="file" name="photo" onChange={handleFileChange} />
           
        </div>

        <div className="form-group">
          <label>Upload Candidate Sign  : </label>
        {/* <input type="text" name="aadharCard" onChange={handleChange} value={formData.aadharCard} /> */}
        <input type="file" name="photo" onChange={handleFileChange} />
           
        </div>
        <div className="form-group">
          <label>Upload Document 1: </label>
        {/* <input type="text" name="aadharCard" onChange={handleChange} value={formData.aadharCard} /> */}
        <input type="file" name="photo" onChange={handleFileChange} />
           
        </div>
        <div className="form-group">
          <label>Upload Document 2 : </label>
        {/* <input type="text" name="aadharCard" onChange={handleChange} value={formData.aadharCard} /> */}
        <input type="file" name="photo" onChange={handleFileChange} />
           
        </div>
        <div className="form-group">
          <label>Upload Document 3: </label>
        {/* <input type="text" name="aadharCard" onChange={handleChange} value={formData.aadharCard} /> */}
        <input type="file" name="photo" onChange={handleFileChange} />
           
        </div>
        <div className="form-group">
          <label>Upload Document 4 : </label>
        {/* <input type="text" name="aadharCard" onChange={handleChange} value={formData.aadharCard} /> */}
        <input type="file" name="photo" onChange={handleFileChange} />
           
        </div>
        </div>
        <div>  
          <h2> Upload Students </h2>
          
        </div>
       
      </form>
        </div>
        </div>
        </>
    )
}
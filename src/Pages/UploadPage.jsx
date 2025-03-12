import { useEffect, useState } from "react";
import { UploadData } from "./Uploaddata";

export const UploadPage = () => {
  const [formData, setFormData] = useState({});
  useEffect(() =>{
    console.log('same compo',formData);
  
  }, [formData])
    // batch: "",
    // // batchTime: "",
    // stream: "",
    // enrolmentNumber: "",
    // course: "",
    // admissionNumber: "",
    // semester: "",
    // admissionDate: "",
    // session: "",
    // studentName: "",
    // gender: "",
    // nationality: "",
    // caste: "",
    // religion: "",
    // maritalStatus: "",
    // bloodGroup: "",
    // email: "",
    // dob: "",
    // address: "",
    // pinCode: "",
    // phone: "",
    // aadharCard: "",
    // fatherName: "",
    // fatherPhone: "",
    // motherName: "",
    // motherPhone: "",
    // password: "",
    // status: "Active",
    // photo: null,
    // sign: null,
    // document1: null,
    // document2: null,
    // document3: null,
    // document4: null,
//   });

  return (
    <div>
      {/* Pass formData and setFormData to UploadData */}
     {/*  /> */}
     <UploadData formData={formData} setFormData={setFormData}  />
      {/* <NextComponent formData={formData} /> */}

    </div>
  );
};

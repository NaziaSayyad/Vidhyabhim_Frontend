// import React, { useState } from "react";
// import Certificate from "./Certificate";
// import "./certificate.css";
// import MarksheetQRCode from "./Qrcode";
// function CertificateInput() {
 
//   const [id,setid] = useState();
//   const [getinput,setinput] = useState("");
 
//   const handleSubmit = (value) =>{
//     // if(getinput.trim() === "") return;
    
//     setid(value)
//     console.log(value,"handleSubmit");
//     setinput("");
   
//    }
// const handlekeypress = (event) =>{
//   if(event.key === 'Enter'){

//     handleSubmit(event.target.value);
//   }
// }
//     return (
//       <div className="Certificate_Input">
//          <div id='input_box'> 
//             <input  
//               placeholder="Type your Id"  
//               value={getinput} 
//              onChange={(e) => setinput(e.target.value)}
//              onKeyDown={handlekeypress}
//             /> 
//               <button className="btn-btn"
//               type="submit"
//               onClick={handleSubmit}            
//               >  Submit  </button>
//           </div>
//           <MarksheetQRCode studentId={id}/>
         
//           <Certificate id={id} />
//           {/* <Certifica  id={id} />  */}
//      </div>
//     )
  
// }

// export default CertificateInput;

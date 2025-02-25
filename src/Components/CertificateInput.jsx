import React, { useState } from "react";
import Certificate from "./Certificate";

function CertificateInput() {
 
  const [id,setid] = useState();
  const [getinput,setinput] = useState("");
 
  const handleSubmit = (value) =>{
    // if(getinput.trim() === "") return;
    
    setid(value)
    console.log(value,"handleSubmit");
    setinput("");
   
   }
const handlekeypress = (event) =>{
  if(event.key === 'Enter'){

    handleSubmit(event.target.value);
  }
}
    return (
      <div className="Certificate_Input">
         <div id='input_box'> 
            <input  
              placeholder="Type your Id"  
              value={getinput} 
             onChange={(e) => setinput(e.target.value)}
             onKeyDown={handlekeypress}
            /> 
              <button
              type="submit"
              onClick={handleSubmit}            
              >  Submit  </button>
          </div>
          <Certificate id={id} />
          {/* <Certifica  id={id} />  */}
     </div>
    )
  
}

export default CertificateInput;

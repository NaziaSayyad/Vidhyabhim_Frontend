import axios from "axios";
import "./Marksheet.css";
import { useEffect, useState } from "react";
import Marksheet from "./Marksheet";

function MarksheetData() {

    const [id,setid] = useState();
    const [getinput,setinput] = useState("");
  const [data, setdata] = useState([]);
  const API = `https://vidhyabhim-backend.onrender.com/marksheet/${id}`;

  const getdata = async () => {
    try {
      const response = await axios.get(API);
    //   return response.data
    if(response.data === ""){
        alert ("No Student found")
    }
    else{
        return response.data
    }
    //   console.log(response);

    }
    catch (error) {
      const message = error.response;
      console.log(message);
    //   alert(message)
    }

  }
  const fetch_data = async () => {
    const dt = await getdata();
    setdata(dt)
    console.log(dt, "data from fetch func ");

  }
  const handleSubmit = (value) =>{
    setid(value);
   console.log(value,"handleSubmit");
   setinput("");
  
  }
const handlekeypress = (event) =>{
 if(event.key === 'Enter'){

   handleSubmit(event.target.value);
 }
}
    
    useEffect(() => {
    console.log("Component Mounted");
    if (id !== undefined) {
      fetch_data()
    }
  }, [id]);
   
    return (
      
        <div>
       <div className="marksheet">
       <div id='input_box'> 
            <input  
              placeholder="Type your Id"  
              value={getinput} 
             onChange={(e) => setinput(e.target.value)}
             onKeyDown={handlekeypress}
            /> 
              <button className="btn-btn"
              type="submit"
              onClick={handleSubmit}            
              >  Submit  </button>
          </div>
        <Marksheet data = {data} />
       </div>
         </div>
       
    )

}
export default MarksheetData;
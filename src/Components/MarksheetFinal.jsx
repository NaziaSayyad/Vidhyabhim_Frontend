import MarksheetTable from "./MarksheetTables";
import "./Marksheet.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


export const FinalMarksheet = () =>{
    const {id} = useParams();
    
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
      
      useEffect(() => {
      console.log("Component Mounted");
      if (id !== undefined) {
        fetch_data()
      }
    }, [id]);   
  
    return (
        <>
       <div>
        <div id= "batch_1stdiv" > 
            <div>
                 <p> Batch No.</p>
                 <p> {data?.BatchNo} </p>
            </div>
            <div> 
                <p> Enroll No.</p> 
                <p>{data?.enroll} </p>
            </div>
            <div> 
             </div>
            <div> 
                <p> Session</p>  
                <p> {data?.session} </p>
            </div>
        </div>
        <img src="https://i.postimg.cc/SxW40T7w/Vidhyabhim-logo.jpg" alt="logo" />
       
        <div id="course">
        <div > 
          <p> Certified that student</p> 
          <p>______________________{data?.Name}__________________________</p>
          </div>

          <div>
          <p> Son/Daughter of </p>
          <p >_____________________{data?.FName}___________________________</p>
         {/* <p>.................. Course Name...................................... </p> */}

         </div>
        </div>
         <MarksheetTable data = {data?.course} date = {data?.DATE}  />
        </div>
        </>
    )
}

// import Group from "./New";
import { useEffect, useState } from "react";
import "./certificate.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Certificate() {
  const {id} = useParams();

  const [data, setdata] = useState([]);
  const API = `https://vidhyabhim-backend.onrender.com/students/${id}`;

  const getdata = async () => {
    try {
      const response = await axios.get(API);
      return response.data.json;
      // console.log(response.data, "data");

    }
    catch (error) {
      const message = error.response.data.message;
      console.log(message);
      alert(message)
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
      <div id="certificate">

        {/* ................certificate No  */}
        <div className="box1">
           <div id="enroll">
              <p>  certificate No: </p>
          </div>
          <div id="enroll">
            {<p> Enroll No :  </p>}
            <p className="enroll_no_p">{" "}{data?.enrol} </p>
          </div>
          <div id="enroll">
            {<p>  Batch Name : </p>}
            {<p className="enroll_no_p"> {data?.batchname}</p>}
          </div>
          <div id="enroll">
            {<p>  Session : </p>}
            {<p className="enroll_no_p"> {" "}{data?.session}</p>}
          </div>
        </div>
        {/* <h1> Logo will come here </h1> */}

        <img src="https://i.postimg.cc/SxW40T7w/Vidhyabhim-logo.jpg" alt="logo" />
          
          {/* ................... Course Name Div .............. */}
          
          <div>
            <p id="Course_P"> {data?.coursename} </p>
          </div>
          {/* ...................Name Div........................... */}
          
          <div id="st_name_div"> 
          <p> Certified that student</p> <p> {" "} {" "} </p>
          <p id="name">  ___________{data?.studentname}___________________</p>
          </div>
        {/* ..................................Next...................................  */}
         <div id="courseName_related_div">
          <p> has satisfactorily completed the </p>
          <p className="heighlight"> 2 Year Course of Training in The Theory and Practical of </p>
          {/* <p>.................. Course Name...................................... </p> */}

         </div>
        {/* ..................................3rd..................................... */}

        <p> This Certifcate is, therefore, awarded to him/her
           on this day date _______________day of _______________ Two Thousand and _______________
        </p>
        <img src="https://i.postimg.cc/V6BfM9nX/Whats-App-Image-2025-02-17-at-3-06-48-PM.jpg" alt="sign" />
      </div>
    </>
  ) 
}

export default Certificate;

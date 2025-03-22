import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Loading } from "../Components/Loading";
import "./StudentDetails.css";

export const StudentDetails = () =>{
    const {id} = useParams();
    const storage = localStorage.setItem("student_ID", JSON.stringify(id));
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
  
  
    return(
        <>
        <h1> Student Details </h1>
        <div className="student-details">
            {data.length === 0 ? (
               <div> <Loading /> </div>
            ) : (
                <div className="student-table-details">
                    <div> <p> Name </p> </div>
                    <div>  <h4> {data.studentname} </h4></div>


                   <div> <p> Father's Name </p> </div>
                     <div> <h4> {data.fname} </h4> </div> 
                     <div> <p>  Mother's Name </p> </div>
                     <div> <h4> {data.mname} </h4> </div> 

                     <div> <p> stream  Name </p> </div>
                     <div> <h4> {data.streamname} </h4> </div> 

                     <div> <p>  Course Name </p> </div>
                     <div>  <h4> {data.coursename} </h4></div>

                     <div> <p> Semester </p> </div>
                     <div> <h4> {data.semester} </h4> </div>
                    <div> <p> Stream Name </p> </div>
                    <div>  <h4> {data.streamname} </h4></div>
                    <button className="button-link" > <Link to= {`/certificate/${data.id}`}> Certificate </Link></button>
                    <button className="button-link"> <Link to= {`/marksheet/${data._id}`}> Marksheet </Link></button>
                </div>
            )}
        </div>
        </>
    )
}
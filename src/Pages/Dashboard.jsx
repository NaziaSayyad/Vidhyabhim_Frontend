import MapComponent from "../Components/MapComponent"
import CustomCalendar from "../Components/Calender"
import SalesChart from "../Components/Sales"
import "./dasboard.css";
import StudentChart from "../Components/StudentData";
import DashboardCards from "./DashboardCards";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export const Dashboard = () =>{
  const navigate = useNavigate();

  const handleLogout = () => {
      localStorage.removeItem("student");
      navigate("/login");
  };
    return(
        <>
       <div>
       <div style={{display : 'flex'}}>
            <h2 style={{width: '100%'}}>Welcome to Student Dashboard</h2>
            <button style={{fontSize: '20px',width : '120px'}} onClick={handleLogout}>Logout</button>
        </div> 
       <div>  <DashboardCards /> </div>
       
       <div className="dashboard-grid">
         <SalesChart />
         <CustomCalendar />
         <MapComponent />
       </div>
       </div>
        </>
    )
}
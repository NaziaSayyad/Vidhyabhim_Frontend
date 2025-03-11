import MapComponent from "../Components/MapComponent"
import CustomCalendar from "../Components/Calender"
import SalesChart from "../Components/Sales"
import "./dasboard.css";
import StudentChart from "../Components/StudentData";
import DashboardCards from "./DashboardCards";
import Navbar from "./Navbar";

export const Dashboard = () =>{
    return(
        <>
       <div>
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
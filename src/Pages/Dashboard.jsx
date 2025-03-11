import MapComponent from "../Components/MapComponent"
import CustomCalendar from "../Components/Calender"
import SalesChart from "../Components/Sales"
import "./dasboard.css";
import StudentChart from "../Components/StudentData";

export const Dashboard = () =>{
    return(
        <>
       
       <div className="dashboard-container">
      <div className="dashboard-grid">
        <SalesChart />
        <CustomCalendar />
        <MapComponent />
      </div>
    </div>
        </>
    )
}
import MarksheetTable from "./MarksheetTables";
import "./Marksheet.css";
function Marksheet ( {data }){
    return(
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
    )
}
export default Marksheet;

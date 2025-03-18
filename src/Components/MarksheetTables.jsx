import { useEffect } from "react";
import "./Marksheet.css";
import { toWords } from "number-to-words";

function MarksheetTable ( {data, date}){

  const grandtot = data?.reduce ((sum,i) => sum+(i.MAX || 0),0)
  const totalobtained = data?.reduce((sum,item) => sum +(item.obtained || 0), 0)
  const isPassed = data?.every((subject) => subject.PASS >= 33 );
    console.log(totalobtained,"dataobt");
    console.log(grandtot,"grand");
    
    return (
    <>
    <div className="table-container">
      <div className="table-wrapper">
      {/* <img  id="watermark" src="https://i.postimg.cc/dtqqqDxh/Whats-App-Image-2025-03-15-at-1-10-22-PM.jpg"/> */}
        <table className="styled-table">
        <thead>
            <tr>
              <th>Paper Code</th>
              <th>Subject</th>
              <th colSpan="3">Marks</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>Marks Obtained</th>
              <th>Maximum Marks</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {
            data?.map(({ papercode, subject, MAX, PASS, obtained }, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{papercode} </td>
                <td>{subject} </td>
                <td>{MAX} </td>
                <td>{PASS} </td>
                <td>{obtained} </td>
              
              </tr>
            ))}
          </tbody>
         
        </table>
        {/* ................. Grand Total ...........  */}
        <div id="grant">
        <h3> Grand Total : {grandtot} </h3> 
        <h3> Total Obtained : {totalobtained}</h3>
        </div>
        {/* ................... Total marks in word  */}
        <div id="tot_marks">
          <h4> Total Marks Obtained (In Words) : {"  "}  {"  "}
            </h4>  
              <h3>
                {isNaN(totalobtained) || totalobtained === undefined
                  ? "Invalid Marks"
                  : toWords(totalobtained).toUpperCase()}
               </h3>
          </div>
          <div id="check_pass_fail">
            <p> Your Division :   </p>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: isPassed ? "green" : "red" }}> {isPassed ? "PASS" : "FAIL"}</p>
          <div>
          <p> Date : {date} </p>
          </div>
          </div>
      </div>
    </div>
        </>
    )
}

export default MarksheetTable;

import "./TableComponent.css"
export const TableComponent = () =>{
    return(
        <>
          <table className="student-table">
                    <thead>
                         <tr>
                            <th>Sr.</th>
                            <th>Student Photo</th>
                            <th>Student Name</th>
                            <th>Enroll No.</th>
                            <th>Father Name</th>
                            <th>Stream Name</th>
                            <th>Course Name</th>
                            <th>Smester Name</th>
                        </tr>
                    </thead>
                   
                </table>
        </>
    )
}
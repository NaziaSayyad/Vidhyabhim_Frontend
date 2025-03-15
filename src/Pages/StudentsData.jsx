import './student.css';
export const StudentData = ({students}) =>{
    console.log('st',students);

    
    return(
        <>
        <div>
        </div>
        <div id="main-table">
          <table className="student-table"> 
                  <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>Student Photo</th>
                            <th>Student Name</th>
                            <th>Enroll No.</th>
                            <th>Father Name</th>
                            <th>Stream Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={students.id}>
                                {/* <td>
                                    <img src={students.photo} alt="Student" className="student-photo" />
                                </td> */}
                                <td>{students.name}</td>
                                <td>{students.enrollNo}</td>
                                <td>{students.fatherName}</td>
                                <td>{students.streamName}</td>
                            </tr>
                    
                    </tbody>
          </table>
        </div>
        </>
    )
}
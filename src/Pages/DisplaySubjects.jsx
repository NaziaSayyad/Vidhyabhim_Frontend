import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getsubjects } from "../Redux/Subjects/action";
import { Loading } from "../Components/Loading";

export const DisplaySubjects = () =>{
    const subjects = useSelector((store) => store.subjects);
    const dispatch = useDispatch();
   

    console.log(subjects,"subjects");
    
    useEffect(() =>{
        dispatch(getsubjects())
    },[dispatch])
    return (
        <>
        <h1> Display all Subjects </h1>
        <div className="table-container">
            {subjects.length === 0 ? (
               <div> <Loading /> </div>
            ) : (
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
                    <tbody>
                        {/* {students.map((student, index) => (
                            <tr key={student._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={student.photo} alt="Student" className="student-photo" />
                                </td>
                                <td>{student.studentname}</td>
                                <td>{student.enrol}</td>
                                <td>{student.fname}</td>
                                <td>{student.streamname}</td>
                                <td>{student.coursename}</td>
                                <td>{student.semester}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            )}
        </div>
        </>
    )
}
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getstudents } from "../Redux/Student/actions";
import "./student.css";
import { Loading } from "../Components/Loading";
import ReactPaginate from "react-paginate";


export const Student = () =>{
    const students = useSelector((store) => store.student.students);
    const dispatch = useDispatch();

       // Pagination state
       const [currentPage, setCurrentPage] = useState(0);
       const studentsPerPage = 5;  // Number of students per page
       const offset = currentPage * studentsPerPage;
       const currentStudents = students.slice(offset, offset + studentsPerPage);
       const pageCount = Math.ceil(students.length / studentsPerPage);

       
console.log("data",students)
const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
};
    useEffect(() =>{
        dispatch(getstudents());
    }, [])
 return(
    <>
    <div className="table-container">
            {students.length === 0 ? (
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
                        {students.map((student, index) => (
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
                        ))}
                    </tbody>
                </table>
            )}
        </div>
         {/* Pagination Component */}
         <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        previousClassName={"prev-button"}
                        nextClassName={"next-button"}
                        disabledClassName={"disabled"}
                    />
    </>
 )  
}
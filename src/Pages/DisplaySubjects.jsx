import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getsubjects } from "../Redux/Subjects/action";
import { Loading } from "../Components/Loading";

export const DisplaySubjects = () =>{
    const subjects = useSelector((store) => store.subject.subjects);
    const dispatch = useDispatch();
   

        console.log("Subjects Data Type:", typeof subjects);
        console.log("Subjects Data:", subjects);

       
    useEffect(() =>{
        dispatch(getsubjects())
    },[dispatch])
    return (
        <>
        <h1 style={{margin :'5%'}}> Display all Subjects </h1>
        <div className="table-container">
            {subjects.length === 0 ? (
               <div> <Loading /> </div>
            ) : (
                <table className="student-table">
                    <thead>
                         <tr>
                            <th>Sr.</th>
                            <th>Stream Name</th>
                            <th>Course  Name</th>
                            <th>Smester Name</th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((el, index) => (
                            <tr key={el._id}>
                                <td>{index + 1}</td>
                               
                                <td>{el?.streamname}</td>
                                <td>{el?.coursename}</td>
                                <td>{el?.semester}</td>
                                <td style={{backgroundColor : 'green',color :'white'}}> {el.status} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </>
    )
}
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import { Student } from "../Pages/Student"
import AddStudent from "../Pages/AddStudent"
import { DisplaySubjects } from "../Pages/DisplaySubjects"
import { AddSubjects } from "../Pages/AddSubjects"
import { StudentDetails } from "../Pages/StudentDetails"
import Certificate from "../Components/Certificate"
import { FinalMarksheet } from "../Components/MarksheetFinal"
import StudentAuth from "../Pages/StudentLogin"
import ProtectedRoute from "../Middleware/Middleware"

export const AllRoutes =() =>{
    return(
        <>
        <Routes>
        {/* <Route path='/' element={<Dashboard />}/> */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
       <Route path='/allstudent' element = {<Student />}/>
       <Route path='/addstudent' element ={<AddStudent />} />
       <Route path= "view-subjects" element = {<DisplaySubjects />} />
       <Route path="add-subject" element ={<AddSubjects />} />
       <Route path="/details/:id" element={<StudentDetails />} />
       {/* <Route path="marksheet/:id" element ={<MarkShe}/> */}
       <Route path="/certificate/:id" element={<Certificate />} />
       <Route path="/marksheet/:id" element ={<FinalMarksheet />}/>
       <Route  path="/login" element ={<StudentAuth />}/>
      </Routes>
        </>
    )
}
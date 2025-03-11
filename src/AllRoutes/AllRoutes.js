import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import { NewStudent } from "../Pages/NewStudent"
import { Student } from "../Pages/Student"
import AddStudent from "../Pages/AddStudent"
import { MarksheetPage } from "../Pages/Marksheet"
import MarksheetData from "../Components/MarksheetData"
import CertificateInput from "../Components/CertificateInput"
import StudentForm from "../Pages/StudentForm"

export const AllRoutes =() =>{
    return(
        <>
        <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path="/student-form" element ={<StudentForm />} />
        <Route path='/newstudent' element= {<NewStudent />}/>
        <Route path='/allstudent' element = {<Student />}/>

        <Route path='/addstudent' element ={<AddStudent />}/>
        <Route path='/marksheetdata' element={<MarksheetPage />} />
        <Route path="/view-marksheet" element={<MarksheetData />} />
        <Route path="/certificate" element={<CertificateInput />} />
      </Routes>
        </>
    )
}
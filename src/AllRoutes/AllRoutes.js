import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import { Student } from "../Pages/Student"
import AddStudent from "../Pages/AddStudent"
import { MarksheetPage } from "../Pages/Marksheet"
import MarksheetData from "../Components/MarksheetData"
import CertificateInput from "../Components/CertificateInput"
import { DisplaySubjects } from "../Pages/DisplaySubjects"
import { AddSubjects } from "../Pages/AddSubjects"


export const AllRoutes =() =>{
    return(
        <>
        <Routes>
        <Route path='/' element={<Dashboard />}/>
       <Route path='/allstudent' element = {<Student />}/>
       <Route path='/addstudent' element ={<AddStudent />}/>
        <Route path='/marksheetdata' element={<MarksheetPage />} />
        <Route path="/view-marksheet" element={<MarksheetData />} />
        <Route path="/certificate" element={<CertificateInput />} />
        <Route path= "view-subjects" element = {<DisplaySubjects />} />
      <Route path="add-subject" element ={<AddSubjects />} />
      </Routes>
        </>
    )
}
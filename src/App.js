import { Route, Routes } from 'react-router-dom';
import './App.css';
import MarksheetData from './Components/MarksheetData';
import CertificateInput from './Components/CertificateInput';
import { Student } from './Pages/Student';
import { MarksheetPage } from './Pages/Marksheet';
import AddStudent from './Pages/AddStudent';
import { NewStudent } from './Pages/NewStudent';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
        <>
        
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/newstudent' element= {<NewStudent />}/>
        <Route path='/allstudent' element = {<Student />}/>

        <Route path='/addstudent' element ={<AddStudent />}/>
        <Route path='/marksheetdata' element={<MarksheetPage />} />
        <Route path="/marksheet" element={<MarksheetData />} />
        <Route path="/certificate" element={<CertificateInput />} />
      </Routes>
     </>
       
    )
 }

export default App;

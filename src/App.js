import { Route, Routes } from 'react-router-dom';
import './App.css';
import MarksheetData from './Components/MarksheetData';
import CertificateInput from './Components/CertificateInput';
import { Student } from './Pages/Student';
import { MarksheetPage } from './Pages/Marksheet';
import AddStudent from './Pages/AddStudent';
import { NewStudent } from './Pages/NewStudent';
import { Dashboard } from './Pages/Dashboard';
import { Sidebar } from './Components/Sidebar';
import { AllRoutes } from './AllRoutes/AllRoutes';
import Navbar from './Pages/Navbar';

function App() {
  return (
        <>
        <div> <Navbar /> </div>
    
        <div style={{display : 'flex'}}>
       <div>  <Sidebar /> </div>
      <div>  <AllRoutes />  </div>
     
     </div>
    
     </>
       
    )
 }

export default App;

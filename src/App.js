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

function App() {
  return (
        <>
        <div style={{display : 'flex'}}>
     <Sidebar />
      <AllRoutes /> 
        </div>
      
     </>
       
    )
 }

export default App;

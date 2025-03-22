import { Route, Routes } from 'react-router-dom';
import './App.css';
import MarksheetData from './Components/MarksheetData';
import CertificateInput from './Components/CertificateInput';
import { Student } from './Pages/Student';
import { MarksheetPage } from './Pages/Marksheet';
import AddStudent from './Pages/AddStudent';
import { Dashboard } from './Pages/Dashboard';
import { Sidebar } from './Components/Sidebar';
import { AllRoutes } from './AllRoutes/AllRoutes';
import Navbar from './Pages/Navbar';
import StudentAuth from './Pages/StudentLogin';
import ProtectedRoute from './Middleware/Middleware';

function App() {
  const storedUser = JSON.parse(localStorage.getItem("student"));
    console.log(storedUser);
       
  return (
        <>
        {/* <StudentAuth /> */}
        <div> <Navbar /> </div>
    
        <div style={{display : 'flex'}}>
       <div>  <Sidebar /> </div>
      
         <Routes>
            {/* Public Route - Login */}
            <Route path="/login" element={<StudentAuth />} />

            {/* Protected Route - Only logged-in students can access */}
            <Route path="/*" element={<ProtectedRoute><AllRoutes /></ProtectedRoute>} />
          </Routes>
     
     </div>
    
     </>
       
    )
 }

export default App;

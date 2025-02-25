import { Route, Routes } from 'react-router-dom';
import './App.css';
import MarksheetData from './Components/MarksheetData';
import CertificateInput from './Components/CertificateInput';

function App() {
  return (
        <>
      <Routes>
        <Route path='/' />
        <Route path="/marksheet" element={<MarksheetData />} />
        <Route path="/certificate" element={<CertificateInput />} />
      </Routes>
     </>
       
    )
 }

export default App;

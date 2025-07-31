
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from "./Landing.jsx";
import Login from './Login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
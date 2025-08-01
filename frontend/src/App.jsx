
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from "./Landing.jsx";
import Login from './Login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './AdminDashboard.jsx';
import UserDashboard from './UserDashboard.jsx';
import AdminLogin from './AdminLogin.jsx';


function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/admin_login" element={<AdminLogin/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
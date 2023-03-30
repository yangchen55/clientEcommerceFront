import './App.css';
import { Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import myLogo from './assets/b.png';
import Register from './pages/register/Register';
import { NewAccVerify } from './pages/verify/NewAccVerify';
import Login from './pages/login/Login';



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Feminal Fashion</title>
        <link className="fa-3x" rel="shortcut icon" href={myLogo} type="image/png" />
      </Helmet>
      <Browser>
        <Routes>
          {/* public router */}

          <Route path="/register" element={<Register />} />
          <Route path="verify" element={<NewAccVerify />} />
          <Route path="login" element={<Login />} />


          {/* private router */}
          <Route path="/" element={<Dashboard />} />


        </Routes>
      </Browser>
      <ToastContainer />







    </div >
  );
}

export default App;

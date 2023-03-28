import './App.css';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import { Helmet } from 'react-helmet';
import myLogo from './assets/b.png';



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Feminal Fashion</title>
        <link className="fa-3x" rel="shortcut icon" href={myLogo} type="image/png" />
      </Helmet>

      <Dashboard />





    </div >
  );
}

export default App;

import './App.css';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';



function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">



      <Button onClick={notify}><i class="fa-solid fa-circle-plus fa-beat"></i></Button>
      <ToastContainer />




    </div >
  );
}

export default App;

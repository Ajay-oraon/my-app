
import React ,{ useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [Yellowmode, setYellowMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // for toggling color
// const removeBodyClasses=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-success')
// }

  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#011932';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (
    <>
       <Router> 
       {/* <Navbar  /> 
       <Navbar title="TextUtils" aboutText="About" />  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      
      <div className="container my-3">
    
        <Routes>   
         <Route exact path="/about" element={<About mode={mode}/>} /> 
        <Route exact path="/" element = {  
        <TextForm showAlert = {showAlert} heading="Enter Data for Analyzing"  mode = {mode}/>
         } /> 
        </Routes> 
        </div>
    </Router> 
    
  </>
  );
}

export default App;

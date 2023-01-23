// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import { createRoot } from "react-dom/client";
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState("dark");  /// whether dark mode is enabled or not
  const [alert,setAlert]  = useState(null)
  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode= ()=>{
    if(mode === "dark"){
      setMode("light");
      showAlert("light mode Enabled","success")
      document.body.style.backgroundColor= "white"
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor= "grey"
      showAlert("dark mode Enabled","success")
    }
  }
  return (    //react k ander jsx mai app sirf ek hi element return kar sakte hai  
  // <> it is know as jsx fragmants and we use this to send multiple elements  
  <>
  <Router>
  <Navbar title="DJ's App" mode={mode} AboutText={"About us"} toggleMode={toggleMode} />
  <Alert alert ={alert}/>
  <div className="container my-3">
  <Routes>
    {/* we use exact for complete matching otherwise react does partial matching */}
          <Route exact path="/" element={<TextForm mode={mode} heading="Enter the text To analyse here👇" showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
  </Routes>
  </div>
  </Router> 
  </>
  );
}

export default App;

// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';

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
  <Navbar title="DJ's Creation 🎮" AboutText="About Me" toggleMode={toggleMode} mode={mode}/>
  <Alert alert ={alert}/>
  <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to Analyze 👇" />
    <About/>
  </div>
  </>
  );
}

export default App;

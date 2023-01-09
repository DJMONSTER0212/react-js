// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [darkmode,setDarkMode] = useState(false);  /// wether dark mode is enabled or not
  return (    //react k ander jsx mai app sirf ek hi element return kar sakte hai  
  // <> it is know as jsx fragmants and we use this to send multiple elements  
  <>
  <Navbar title="DJ's Creation 🎮" AboutText="About Me"/>
  <div className="container my-3">
    <TextForm heading="Enter the text to Analyze 👇" />
    {/* <About/> */}
  </div>
  </>
  );
}

export default App;

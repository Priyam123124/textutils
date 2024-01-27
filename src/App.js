//import logo from './logo.svg';

import './Components/navbar.css';
import Alert from './Alert';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar'
import Textarea from './Components/Textarea'
import {useState} from 'react';

import React from "react";
import {
  BrowserRouter,
  Route,
  Routes

} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [modetext, setmodetext] = useState('Light Mode')
  const [ Message, setMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const setalert = (message, type) =>{
    setMessage({message: message, type: type})
  }

  const changing = ()=>{
    setShowAlert(true)

    setTimeout(()=>{
      setShowAlert(false)
    }, 1500)
  }

  const togglemode= ()=>{
    if(mode === 'light'){
      setmode('dark')
      setmodetext('Dark Mode')
      setalert('Dark Mode Enabled', 'Success:')
      document.body.style.backgroundColor=" #151515"
      document.body.style.color="white"
    } else {
      setmode('light')
      setmodetext('Light Mode')
      setalert('Light Mode Enabled', 'Success:')
      document.body.style.backgroundColor="#dee2e6"
      document.body.style.color="black"
    }

    changing();
    
  }
  return (
    <>
    {/* <Navbar item1="Home" item2="About" item3="Contact Us"/> */}
    <BrowserRouter>
    <Navbar mode={mode} togglemode={togglemode} modetext={modetext} />
    <Alert mode={mode} message={Message} showAlert={showAlert}/>
          <Routes>
            <Route exact path="/about" element={<About togglemode={togglemode} />}></Route>
            <Route exact path="/" element={<Textarea mode={mode} message={Message} setalert={setalert} changing={changing}/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

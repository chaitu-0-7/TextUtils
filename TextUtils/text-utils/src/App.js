import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled','Success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','Success')
    }
  }
  return (
    <>
     <Router>
      <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
 
    <Routes>
      <Route exact path="/" element={
            <div className='container'>
       <TextForm heading='Please enter your text' mode={mode}/>
    </div>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </Router>
      
    

    </>
  );
};

export default App;

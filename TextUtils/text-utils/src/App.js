// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <div className='container'>
    <TextForm heading='Enter your text' mode={mode}/>
    </div>

    </>
  );
}

export default App;

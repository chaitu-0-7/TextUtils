// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title='Text Utils'/>
    {/* <Navbar/> */}
    <div className='container'>
    <TextForm heading='Enter your text'/>
    <About/>
    </div>

    </>
  );
}

export default App;

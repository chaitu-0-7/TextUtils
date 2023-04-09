// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';


function App() {
  return (
    <>
    <Navbar title='Text Utils'/>
    {/* <Navbar/> */}
    <div className='container'>
    <TextForm heading='Enter your text'/>
    </div>

    </>
  );
}

export default App;

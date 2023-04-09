import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState('Enter your text')
    const handleUpClick=()=>{
        console.log('Upper case was clicked');
        let conertedText=text.toUpperCase();
        setText(conertedText)
    }
    const handleLoClick=()=>{
        console.log('Convert to Lowecase was clicked');
        let conertedText=text.toLowerCase();
        setText(conertedText)
    }
    const handleOnChange=(event)=>{
        // console.log('On changed')
        setText(event.target.value)
    }
  return (
    <>
    <div className="container mb-3">
        <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
    </div>
    <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary my-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <div className='container my-3'>
      <h1> Your Text Summary</h1>
      <p>{text.split(' ').length} words and {text.length} Characters</p>
      <p>{0.008*text.length} Mins Read</p>
      <h2>Text Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState('')
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
    const clearText=()=>{
      console.log('Clear text has been clicked')
      setText('')
    }
  return (
    <>
    <div className="container mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor:props.mode==='light'?'white':'#042743', color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={clearText}>Clear Text</button>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1> Your Text Summary</h1>
      <p>{text.split(' ').length} words and {text.length} Characters</p>
      <p>{0.008*text.length} Mins Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Please enter to Preview'}</p>
    </div>
    </>
  )
}

import React, { useState } from 'react'

export default function About() {

    const [style, setStyle]=useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnText, setBtnText]=useState('Enable Dark Mode');
    const toggleMode=()=>{
        if(style.color==='white'){
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText('Enable Dark Mode')
        }
        else{
            setStyle({
                color:'white',
                backgroundColor:'black'
                // border:'1px white'
            })
            setBtnText('Enable Light Mode')
        }
    }
  return (
            <div className='container'>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
                <strong>Introduction</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={style}>
            <div className="accordion-body" style={style}>
                 Hey! My name is <strong>Chaitanya</strong>. Currently doing my Internship at HP as a Data Engineer. My intrests include Data Engineering, Analytics, Web Development.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" style={style}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
                <strong>Connect</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={style}>
            <div className="accordion-body" style={style}>
                <li>
                    <strong >GitHub</strong> <t href='https://github.com/chaitu-0-7'>chaitu-0-7</t> 
                </li>
                <li>
                    <strong >LinkedIn</strong> <t href='https://github.com/chaitu-0-7'>chaitu_0_7</t> 
                </li>
            </div>
            </div>
        </div>
        </div>
        <div className='contaniner my-3'>
        <button type="button" className="btn btn-primary" onClick={toggleMode}>{btnText}</button>
        </div>
            </div>
  )
}

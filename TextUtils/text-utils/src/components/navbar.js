import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Proptypes are for defining the parameters you pass during to the function it's always better to set the proptypes before itself 
export default function navbar(props){
  const dic={
    'light':'dark',
    'dark':'light'
  }
    return (
        <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
              <Link to='/' className="navbar-brand" >{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to='/' className="nav-link active" >Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link active" >About</Link>
                {/* Have to use link to stop page reload */}
                </li>
                </ul>
                <li className={`form-check form-switch text-${dic[props.mode]}`}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Switch to {dic[props.mode]} Mode</label>
                </li>
              </div>
            </div>
          </nav>
        </div>

    )
}
navbar.propTypes={
    title:PropTypes.string
}
// default props are useful when no arguments are sent
navbar.defaultProps={
    title:'Default prop'
} 
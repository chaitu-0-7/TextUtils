import React from 'react'
import PropTypes from 'prop-types'
// Proptypes are for defining the parameters you pass during to the function it's always better to set the proptypes before itself 
export default function navbar(props){
    return (
        <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>About</a>
        </li>
      </ul>
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
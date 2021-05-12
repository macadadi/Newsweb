import React from 'react'
import './navbar.css'
import img1 from './img1.jpg'
import {Link} from 'react-router-dom'

function NavBar(argument) {
	return(<div >
    <nav class="navbar navbar-expand-lg  navbar-light bg-light fixed-top py-lg-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src={img1}   alt="News Line"/></a>
    <center> <h1 className='nav-sub'>News Line</h1> </center>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
 
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <Link  to="/" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/world" class="nav-link" >World</Link>
        </li>
          <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Science</a>
        </li>
          <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Fiction</a>
        </li>
  
     
      </ul>
    
    </div>
   
  </div>
</nav>
</div>)
	
}export default NavBar
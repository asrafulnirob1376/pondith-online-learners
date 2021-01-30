import React from 'react'
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

import logo1 from '../images/logo1.png';
import './nav.css';

function nav() {
    return (
        <div className="col-md-12" style={{zIndex:"9999",position:"fixed",background:"#1C1C1C",height:"90px",boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"}} >
           <Navbar  expand="lg">
  <Navbar.Brand href="#home"><img style={{height:"100px",width:"244px",marginTop:"-20px"}} src={logo1}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"white"}}/>
  <Navbar.Collapse id="basic-navbar-nav"  style={{marginTop:"-5px"}}>
    <Nav className="ml-auto">
    <Nav.Link href="#home" className="nav-hov" style={{color:"white",fontSize:"22px",fontWeight:"700",lineHeight:"28.13px",marginLeft:"30px",fontFamily:"Roboto"}}>Home</Nav.Link>
    <Nav.Link href="#home"className="nav-hov"  style={{color:"white",fontSize:"22px",fontWeight:"700",lineHeight:"28.13px" ,marginLeft:"30px",fontFamily:"Roboto"}}>Courses</Nav.Link>
    <Nav.Link href="#home" className="nav-hov"  style={{color:"white",fontSize:"22px",fontWeight:"700",lineHeight:"28.13px" ,marginLeft:"30px",fontFamily:"Roboto"}}>Skills</Nav.Link>
    <Nav.Link href="#home" className="nav-hov" style={{color:"white",fontSize:"22px",fontWeight:"700",lineHeight:"28.13px",marginLeft:"30px",fontFamily:"Roboto",marginRight:"30px"}}>Blogs</Nav.Link>
    <Nav.Link href="#home" style={{color:"white",fontSize:"14px",fontWeight:"700",lineHeight:"16.41px",marginLeft:"30px ",fontFamily:"Roboto"}} className="m-auto nav-btn">Start Learning</Nav.Link>
    <Nav.Link href="#home"  className="m-auto">
    <div  class="toggleBox ">
        <div class="toggle">
            <input type="checkbox"/>
            <label for="" class="onbtn">EN</label>
            <label for="" class="ofbtn">BN</label>
    </div>
    </div>
    </Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default nav

import React from 'react'
import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headingmain
 = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
      const onScroll = ()=>{
      if (window.scrollY > 50){
        setScrolled(true)
      }else {
        setScrolled(false)
      }
    }
      window.addEventListener("scroll",onScroll)

      return ()=> window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdatedActiveLink = (value) =>{
      setActiveLink(value)
    }
  return (
    <div>
      <Navbar  data-bs-theme="dark" expand="lg" className={scrolled ? "scrolled" : ""}  >
        <Container>
          <Navbar.Brand href="#home">
            <img src='./images/logo.svg' alt="Logo"/>
            {/* <h1 className='fw-bold'></h1> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdatedActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdatedActiveLink('project')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/tejesh-reddy-eanguwar-a08230296/"><img src='./images/nav-icon1.svg' alt="" /></a>
                <a href="#"><img src='./images/nav-icon2.svg' alt="" /></a>
                <a href="https://github.com/dashboard" className='text-decoration-none github-link'><i className="fa-brands fa-square-github githubs"></i></a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Headingmain


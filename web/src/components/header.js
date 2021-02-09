import React from "react"
// Gatsby
// React Bootstrap
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
// Styled Components
import  NavButton  from '../theme/NavButton'
import NavStyle from '../theme/NavStyle'


const Header = ({ siteTitle }) => (
  <NavStyle>
   <Container>
      <Navbar expand="md">
        <Navbar.Brand id="logo" href="/">{siteTitle}</Navbar.Brand> 
        <Navbar.Toggle id="navToggle" aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="justify-content-center" activeKey="/home">

                  <NavLink id="navlink" as="a" href="/">Home</NavLink>
                  <NavLink id="navlink" as="a" href="/#about">About</NavLink>
                  <NavLink id="navlink" as="a" href="/#work">Work</NavLink>
                  <NavLink id="navlink" as="a" href="/#projects">Projects</NavLink>
                  <NavLink id="navlink" as="a" href="/#contact">Contact</NavLink>
    
            </Nav>  
                  <NavButton as="a" href="/resume">Resume</NavButton>     
          </Navbar.Collapse>
        </Navbar>
    </Container>
  </NavStyle>
);

export default Header
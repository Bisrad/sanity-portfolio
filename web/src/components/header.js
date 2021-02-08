import React from "react"
// Gatsby
// import { Link } from "gatsby";
// React Bootstrap
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
// Styled Components
import styled from 'styled-components';
import Button from "../theme/Button";


const NavStyle = styled.div`
  margin: 0;
  background-color: #181a1f; 
      #logo {
        color: #06BDD6;
        font-weight: 500;
      }
      #navlink {
        margin-right: 1rem;
        color: #06BDD6!important;
        text-decoration: none;
          :hover {
            color: #ffffff!important;
          }
          :active {
            color: #ffffff!important;
          }
      }
      #navToggle {
        border: none;
        color: #06BDD6;
        filter: invert(1);
      }
`;

const NavButton = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #06BDD6;
    border-radius: 4px;
    color:  #06BDD6;
    max-width: 23vw;
    padding: 0.25em 1em;
    margin: 1em 0em;
        a {
            font-size:  15px;
           
        }
        :hover {
            transition: all 0.3s ease 0s;
            background-color:  #8bedf8;
            color: #181a1f;
            text-decoration: none;
        }
`;

const Header = ({ siteTitle }) => (
  <NavStyle>
   <Container>
      <Navbar expand="md">
        <Navbar.Brand id="logo" href="/">{siteTitle}</Navbar.Brand> 
        <Navbar.Toggle id="navToggle" aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="justify-content-center" activeKey="/home">

                  <NavLink id="navlink" as="a" href="/" exact={true} activeClassName='is-active' >Home</NavLink>
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

export default Header;
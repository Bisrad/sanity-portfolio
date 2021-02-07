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
      a {
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
`;

const MainButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Header = ({ siteTitle }) => (
  <NavStyle>
   <Container>
      <Navbar expand="md">
        <Navbar.Brand id="logo" href="/">{siteTitle}</Navbar.Brand> 
        <Navbar.Toggle id="navToggle" aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="justify-content-center" activeKey="/home">

                  <NavLink as="a" href="/" exact={true} activeClassName='is-active' >Home</NavLink>
                  <NavLink as="a" href="/#about">About</NavLink>
                  <NavLink as="a" href="/#work">Work</NavLink>
                  <NavLink as="a" href="/#projects">Projects</NavLink>
                  <NavLink as="a" href="/#contact">Contact</NavLink>
    
            </Nav>  
                  <MainButton>
                         <Button as="a" href="/resume">Resume</Button>     
                  </MainButton>
          </Navbar.Collapse>
        </Navbar>
    </Container>
  </NavStyle>
);

export default Header;
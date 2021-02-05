import { Link } from "gatsby";
import React from "react"
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// Styles
import styled from 'styled-components';




const NavStyle = styled.div`
  margin: 0;
  background-color: #181a1f; 
      a {
        margin-right: 25px;
        color: #06BDD6!important;
      }
      
          #navbarResponsive {
            /* margin-right: 5.8rem; */
          }
          #navToggle {
            border: none;
            fill: #06BDD6;
          }
          .pull-right {
            color: #ffffff;
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
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand> 
        <Navbar.Toggle id="navToggle" aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="justify-content-center" activeKey="/home">

                  <Link to="/">Home</Link>
                  <Link to="/#about">About</Link>
                  <Link to="/#work">Work</Link>
                  <Link to="/#projects">Projects</Link>
                  <Link to="/#contact">Contact</Link>
    
            </Nav>  

                  <MainButton>
                        <Button 
                            variant="default"
                            style={{ width: 60, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            <Link style={{ margin: 0 }} to="/resume">Resume</Link>
                        </Button>    
                  </MainButton>

          </Navbar.Collapse>
        </Navbar>
    </Container>
  </NavStyle>
);

export default Header;
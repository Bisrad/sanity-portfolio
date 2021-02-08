import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import styled from "styled-components";
// import styled from 'styled-components';
import img2 from '../images/quips.png';
import img3 from '../images/mediphor.png';
import img4 from '../images/Hamilton.png';
import img5 from '../images/BodyBern.png';
import img6 from '../images/pizza.png';


const ProjectButton = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #06BDD6;
    border-radius: 4px;
    color:  #06BDD6;
    max-width: 400px;
    padding: 0.25em 1em;
    margin: 1em 0em;
        a {
            font-size:  15px;
           
        }
        :hover {
            transition: all 0.3s ease 0s;
            background-color:  #8bedf8;
            border-color: #8bedf8;
            color: #181a1f;
            text-decoration: none;
        }
`;

const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 2rem;
`;




class Projects extends React.Component {
    render() {
        return(
            <Container id='projects' >
            <Title>Web Projects</Title>
              {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col sm={8} md style={{ margin: 'auto' }} >
    <Image fluid  rounded src={img2} alt="Quips"/>
    <ProjectButton>
        Visit WebSite
    </ProjectButton>  
    </Col>
    <Col sm={8} md style={{ margin: 'auto' }}>
    <Image fluid rounded src={img3} alt="Quips"/>
    <ProjectButton>
        Visit WebSite
    </ProjectButton>  
    </Col>
    <Col sm={8} md style={{ margin: 'auto' }}>
    <Image fluid rounded  src={img4} alt="Quips"/>
    <ProjectButton>
        Visit WebSite
    </ProjectButton>  
    </Col>
  </Row>
  <Row>
    <Col sm={8} md style={{ margin: 'auto' }} >
    <Image fluid  rounded src={img5} alt="Quips"/>
    <ProjectButton>
        Visit WebSite
    </ProjectButton>  
    </Col>
    <Col sm={8} md style={{ margin: 'auto' }}>
    <Image fluid rounded src={img6} alt="Quips"/>
    <ProjectButton>
        Visit WebSite
    </ProjectButton>  
    </Col>
    <Col sm={8} md style={{ margin: 'auto' }}>
    <Image fluid rounded  src={img4} alt="Quips"/>
    <ProjectButton>
        Visit WebSite
    </ProjectButton>  
    </Col>
  </Row>
               
        </Container>    
        )
    }
}

export default Projects
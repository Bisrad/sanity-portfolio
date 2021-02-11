import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import styled from "styled-components";
import img10 from '../images/Calc-Grid-Image.png';
import img7 from '../images/Day-Grid-Image.png';
import img9 from '../images/Pass-Grid-Image.png';
import img8 from '../images/Quiz-Grid-Image.png';
import img11 from '../images/Weather-Grid-Image.png';
import Button from "../theme/Button";




const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 2rem;
`;


class Javascript extends React.Component {
    render() {
        return(
            <Container id='projects' style={{ marginTop: '2rem' }} >
            <Title>Coding Projects</Title>
              {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }} >
    <Image fluid  rounded src={img7} alt="DayPlanner"/>
    <Button primary as="a" href="https://bisrad.github.io/Day_Planner-app/">View Deployment</Button>
    </Col>
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }}>
    <Image fluid rounded src={img8} alt="Quiz"/>
    <Button primary as="a" href="https://bisrad.github.io/Js-quiz/">View Deployment</Button>
    </Col>
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }}>
    <Image fluid rounded  src={img9} alt="Generator"/>
    <Button primary as="a" href="https://bisrad.github.io/password-generator/">View Deployment</Button>
    </Col>
  </Row>
  <Row>
    <Col sm={8} md style={{ marginTop: '1.8rem', margin: 'auto' }} >
    <Image fluid  rounded src={img10} alt="Calculator"/>
    <Button primary as="a" href="https://bisrad.github.io/Tip-Calculator/">View Deployment</Button>
    </Col>
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }}>
    <Image fluid rounded src={img11} alt="Weather"/>
    <Button primary as="a" href="https://bisrad.github.io/Weather-app/">UnderDevelopment</Button>
    </Col>
    <Col sm={8} md style={{ marginTop: '2.8rem', margin: 'auto' }}>
   
    </Col>
  </Row>        
        </Container>    
        )
    }
}

export default Javascript
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import styled from "styled-components";

import img1 from '../images/Quips-Grid-Image.png';
import img2 from '../images/Mediphor-Grid-Image.png';
import img3 from '../images/Pizza-Grid-Image.png';
import img4 from '../images/Hoi4_Grid-Image.png';
import img5 from '../images/BB-Grid-Image.png';

import Button from "../theme/Button"


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
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }} >
    <Image fluid  rounded src={img1} alt="Quips"/>
    <Button primary as="a" href="https://www.quips.com/">Visit Site</Button>
    </Col>
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }}>
    <Image fluid rounded src={img2} alt="Mediphor"/>
    <Button primary as="a" href="https://www.mediphor.com/">Visit Site</Button>
    </Col>
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }}>
    <Image fluid rounded  src={img3} alt="Pizza"/>
    <Button primary as="a" href="https://gatsby.pizza/slicemaster/slick">Visit Site</Button>
    </Col>
  </Row>
  <Row>
    <Col sm={8} md style={{ marginTop: '1.8rem', margin: 'auto' }} >
    <Image fluid  rounded src={img4} alt="Hamilton"/>
    <Button primary as="a" href="http://hamiltononeinfour.com/">Visit Site</Button>
    </Col>
    <Col sm={8} md style={{ marginBottom: '2rem', margin: 'auto' }}>
    <Image fluid rounded src={img5} alt="BodyBern"/>
    <Button primary as="a" href="https://bodybern.com/">UnderDevelopment</Button>
    </Col>
    <Col sm={8} md style={{ marginTop: '2.8rem', margin: 'auto' }}>
   
    </Col>
  </Row>        
        </Container>    
        )
    }
}

export default Projects
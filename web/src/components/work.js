import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import styled from 'styled-components';


// const LeftStyle = styled.div`
//     border-left: 1px;
//     border-left-style: solid;
//     height: vh100;
//         p {
//             padding-left: 15px;
//         }
// `;

// const LinkStyle = styled.div`
//   display: block;
//   margin-top: 1rem;
//   margin: 0;
//     .icon {
//       margin-right: 30px;
//       color: #06BDD6;
//     }
// `;

// const ButtonStyle = styled.div`
//     width: 350;
//     border-color: '#06BDD6'; 
//     background-color: 'none';
//     color: '#06BDD6';
// `;





class Work extends React.Component {
    render() {
        return(
            <Container style={{ justifyContent: 'center', padding: '3rem 5rem 1.5rem 5rem', }}>
                <h1 style={{ display: 'inline-flex', marginRight: '1rem', marginBottom: '2rem'}}>
                Work Experience
                </h1>
            <Row>
                <Col sm={8}>
                <h5 style={{ color: '#fff'}}>Graphic Designer</h5>
                </Col>
            </Row>
            <Row style={{ marginBottom: '2rem' }}>
                <Col sm={4}>Designer at Sandoval Studios
                <Row>
                <Col sm>https://www.sandovalagency.com/</Col>
                </Row>
                </Col>
                <Col style={{ maxWidth: '45vw' }}>Designed Websites, Print collateral, and need materials</Col>
            </Row>
            <Row >
                <Col sm={8}>
                <h5 style={{ color: '#fff'}}>QA Engineer</h5>
                </Col>
            </Row>
            <Row style={{ marginBottom: '2rem' }}>
                <Col sm={4}>Quality Assurance Engineer at Fair
                <Row>
                     <Col sm>https://www.fair.com</Col>
                </Row>
                </Col>
                <Col style={{ maxWidth: '45vw'}}>Worked with Product to pin Pain points, update Educational Materials, and enhance UI/UXs</Col>
            </Row>
            <Row >
                <Col sm={8}>
                <h5 style={{ color: '#fff'}}>Wordpress Designer</h5>
                </Col>
                <Col sm={4}>Graphic Designer and web api developer</Col>
            </Row>
            <Row style={{ marginBottom: '2rem' }}>
                <Col sm={4}>Wordpress Designer at Endurance Internaition
                <Row>
                     <Col sm>https://www.endurance.com</Col>
                </Row>
                </Col>
                <Col style={{ maxWidth: '45vw'}}>Designed WP Templates, and custom sites for clients in an high volume work environment</Col>
            </Row>
            </Container>
        );
    }
}

export default Work
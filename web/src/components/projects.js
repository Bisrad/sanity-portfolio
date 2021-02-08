import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
    max-width: 23vw;
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
    font-size: 4rem;
    margin-bottom: 2rem;
`;

const SubTitle = styled.h3`
    font-size: 3rem;
    padding-bottom: 10px;
    color: #fff;
    `;


class Projects extends React.Component {
    render() {
        return(
            <Container id='projects' style={{ padding: 70 }}>
            <Title>Recent Projects</Title>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image fluid style={{ borderRadius: '15px' }} src={img2} alt="project img"/>
                    </Col>
                    <Col>
                        <SubTitle>| Quips</SubTitle>
                        <ProjectButton>
                            Visit WebSite
                        </ProjectButton>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image fluid style={{ borderRadius: '15px' }} src={img6} alt="project img"/>
                    </Col>
                    <Col>
                        <SubTitle>| Slick's Slices</SubTitle>
                        <ProjectButton>
                            View Deployment
                        </ProjectButton>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image fluid style={{ borderRadius: '15px' }} src={img3} alt="img"/>
                    </Col>
                    <Col>
                        <SubTitle>|  Mediphor</SubTitle>
                         <ProjectButton>
                             Visit WebSite
                         </ProjectButton>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image style={{ borderRadius: '15px' }} src={img4} alt="project img" fluid/>
                    </Col>
                    <Col>
                        <SubTitle>|  Hamilton HS</SubTitle>
                        <ProjectButton>
                            Visit WebSite
                        </ProjectButton>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image fluid style={{ borderRadius: '15px' }}src={img5} alt="project img" />
                    </Col>
                    <Col>
                        <SubTitle>| BodyBern</SubTitle>
                        <ProjectButton>
                            Currently Underdevelopment
                        </ProjectButton>  
                    </Col>
                </Row>
        </Container>    
        )
    }
}

export default Projects
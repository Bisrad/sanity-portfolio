
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Col, Container, Row, Image } from 'react-bootstrap';
import img1 from '../images/ProfilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
// Styled Imports
import  Mailto from '../components/Email'

import  Button  from "../theme/Button"
import  StyledLink  from "../theme/StyledLink"
import ResumeBackground from '../theme/ResumeImage';


const ResumeStyles = styled.div`
    display: flex;
    justify-content: center;
        .img1 { 
            width: 265px;
            margin-bottom: 1.5rem;
        }
        Col {
            padding-top: 15px;
        }
        h2, h5 {
          
        }
`;

class WorkExperience extends React.Component {
    render() { 
        return (
            <div>
                <Container sm md={8}>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Web Designer</h5> 
                            <span style={{ color: '#fff', marginRight: '1rem' }}>Quips</span>
                            <span style={{ marginRight: '1rem' }}>Tempe</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <span>Full Time</span>
                            <p>2020 </p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Quality Assurance Analyst</h5> 
                            <span style={{ color: '#fff', marginRight: '1rem' }}>Fair</span>
                            <span style={{ marginRight: '1rem' }}>Phoenix</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <span>Full Time</span>
                            <p>2019</p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Web Developer</h5> 
                            <span style={{ color: '#fff', marginRight: '1rem' }}>Mediphor</span>
                            <span>Tempe</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <span>Full Time</span>
                            <p>2019</p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Wordpress Designer</h5> 
                            <span style={{ width: 55, color: '#fff', marginRight: '1rem' }}>Endurance </span>
                            <span>Tempe</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <span>Full Time</span>
                            <p>2018</p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Graphic Designer</h5> 
                            <span style={{ width: 55, color: '#fff', marginRight: '1rem' }}>Sandoval Agency</span>
                            <span>Tempe</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <span>Full Time</span>
                            <p>2017</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};
class EducationBlock extends React.Component {

    render() {
        
        return (
            <div>
                <Container>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h6 >The Art Institute of Pittsburgh</h6> 
                            <span style={{ marginRight: '2rem' }}></span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <span>AA in Graphic Design</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};




class Resume extends React.Component {
    render() {
        return(
            <Layout>
            <ResumeBackground>
            <ResumeStyles>
            <Container style={{ justifyContent: 'center', margin: 'auto', padding: '5rem ' }}>
            <Row>
            <Col sm md={4} className="text-center" style={{ margin: 'auto', justifyContent: 'center' }}>
            <Image className='img1' src={img1} alt="profile pic" fluid/>
            <h2>Brad Thompson</h2>
            <h5>Front End Developer</h5>
            <Row style={{ justifyContent: 'center', margin: '1rem auto' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ margin: '3px 15px 0px 0px' }} />
                <Mailto email="bisraddesign@gmail.com" subject="Hey, Lets Code Something!">
                <StyledLink>
                <a mailto='bisraddesign@gmail.com' target="_blank">Bisraddesign@gmail.com</a>
                <br />
                </StyledLink>
                </Mailto>
            </Row>
               
            <Row style={{ justifyContent: 'center', margin: '1rem auto' }}>
               <FontAwesomeIcon icon={faPencilRuler} style={{ margin: '3px 15px 0px 0px' }} />
               <StyledLink>
                <a href="https://bisrad.myportfolio.com/" target="_blank">My Design Portfolio</a>
                </StyledLink>
                <br />
            </Row>
              
            <Row style={{ justifyContent: 'center', margin: '1rem auto' }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ margin: '3px 15px 0px 0px' }} />
                <span>Phoenix, Arizona</span>
                <br />
            </Row>
                <Row style={{ justifyContent: 'center', margin: '1rem auto' }}>
                <Button primary as='a' href="https://resume.io/r/yFv8cI2lh" target="_blank" rel="noreferrer">Download Resume</Button>
              
                </Row>
            </Col>
       
            <Col sm>
            <h1 style={{ color: '#fff' }}>Professional Summary</h1>
            <p style={{ fontSize: 14 }}>
                Creative and self-driven dev/designer with 5+ years of experience creating and delivering unique, innovative design solutions for consumers and growing brands. Skilled in taking projects from conception through to completion. Transforming information and concepts into attractive, human-centered designs.
            <br />
            </p>
            <Row>
            <Container>
            <h3 style={{ color: '#fff' }}>Work Experience</h3>
            <WorkExperience />
            </Container>
            <Container>
            <h3 style= {{ color: '#fff', marginTop: 35 }}>Education</h3>
            <EducationBlock />
            </Container>
            </Row>
            </Col>
            </Row>
            </Container>
            </ResumeStyles>
            </ResumeBackground>
            </Layout>
        );
    }
}

export default Resume
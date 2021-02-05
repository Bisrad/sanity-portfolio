import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import img1 from '../images/ProfilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import Pdf from '../assets/bradResume2019.pdf';


import myImage from '../images/backgroundImage.png';

const HeaderImage = styled.div`
  background: no-repeat url(${myImage});
`;


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

const MainButton = styled.div`
    display: flex;
    justify-content: flex-end;
    border-radius: 3px!important;
`;

// const ColoredLine = ({ color }) => (
//     <hr
//         style={{
//             color: color,
//             backgroundColor: color,
//             height: 1,
//             width: 220
//         }}
//     />
// );

class WorkExperience extends React.Component {

    render() { 
        return (
            <div>
                <Container>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h6>Web Designer</h6> 
                            <span style={{ marginRight: '2rem' }}> <em></em>  Quips.com</span>
                            <span style={{ marginRight: '2rem' }}><em></em> Tempe, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ padding: 0, borderRadius: 50, border: 'none', backgroundColor: '#06BDD6', width: 125, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p style={{ marginRight: 8 }}> June 2020 - December 2020 </p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h6>Quality Assurance Analyst</h6> 
                            <span style={{ marginRight: '2rem' }}> <em></em>  Fair.com</span>
                            <span style={{ marginRight: '2rem' }}><em></em> Phoenix, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ padding: 0, borderRadius: 50, border: 'none', backgroundColor: '#06BDD6', width: 125, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p style={{ marginRight: 8 }}> June 2019 - March 2020 </p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h6>Web Developer</h6> 
                            <span style={{ marginRight: '2rem' }}> <em></em>  Mediphor Design</span>
                            <span style={{ marginRight: '2rem' }}><em></em> Tempe, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ padding: 0, borderRadius: 50, border: 'none', backgroundColor: '#06BDD6', width: 125, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p style={{ marginRight: 8 }}> January 2018 - March 2019</p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h6>Wordpress Designer</h6> 
                            <span style={{ marginRight: '2rem' }}> <em></em>  Endurance International</span>
                            <span style={{ marginRight: '2rem' }}><em></em> Tempe, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ padding: 0, borderRadius: 50, border: 'none', backgroundColor: '#06BDD6', width: 125, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p style={{ marginRight: 8 }}> January 2017 - January 2018</p>
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
                            <span style={{ marginRight: '2rem' }}> <em></em>  Associates of Visual Arts</span>
                            <span style={{ marginRight: '2rem' }}><em></em> Phoenix, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                            <p style={{ marginTop: 25, marginRight: 8 }}> January 29, 2021 </p>
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
            <ResumeStyles>
            <HeaderImage>
            <Container style={{ width: '100vw', padding: 55 }}>
            <Row>
            <Col sm={4}>
            <Image className='img1' src={img1} alt="profile pic" fluid/>
            <h2>Brad Thompson</h2>
            <h5>Front End Developer</h5>
            <Row style={{ marginLeft: 2, marginTop: 25 }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ margin: '3px 15px 0px 0px' }} />
                <a href= "mailto=bisraddesign@gmail.com">Bisraddesign@gmail.com</a>
                <br />
            </Row>
               
            <Row style={{ marginLeft: 2, marginTop: 25 }}>
               <FontAwesomeIcon icon={faPencilRuler} style={{ margin: '3px 15px 0px 0px' }} />
                <Link to="https://bisrad.myportfolio.com/">My Design Portfolio</Link>
                <br />
            </Row>
              
            <Row style={{ marginLeft: 2, marginTop: 25 }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ margin: '3px 15px 0px 0px' }} />
                <span>Phoenix, Arizona</span>
                <br />
            </Row>
                <Row style={{ marginTop: '2rem' }}>
                <MainButton>
                        <Button 
                            variant="default"
                            style={{marginLeft: 20, width: 230, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            <a href='https://resume.io/r/yFv8cI2lh' target = "_blank">Download Resume</a>
                        </Button>    
                  </MainButton>
                </Row>
            </Col>
            <Col sm={6}>
            <h1 style={{ color: '#fff' }}>Professional Summary</h1>
            <p style={{ fontSize: 14 }}>I'm a graphic / web designer. Diving into the world of full stack web developement.
            From agency to freelancer; Building interactive Apps and Sites is my end goal.
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
            </HeaderImage>
            </ResumeStyles>
            </Layout>
        );
    }
}

export default Resume
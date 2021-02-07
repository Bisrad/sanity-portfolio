import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import img1 from '../images/ProfilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
// import Pdf from '../assets/bradResume2019.pdf';


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

const StyledLink = styled.a`
    color: "#06BDD6";
     a::hover {
         text-decoration: none;
         color: #fff;
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
                            <h5>Web Designer</h5> 
                            <span style={{ color: '#fff', marginRight: '1rem' }}>Quips</span>
                            <span style={{ marginRight: '1rem' }}>Tempe, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ color: '#293140', padding: 0, borderRadius: 5, border: 'none', backgroundColor: '#06BDD6', width: 100, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p style={{ marginRight: 8 }}> Sept 2019 - Aug 2020 </p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Quality Assurance Analyst</h5> 
                            <span style={{ color: '#fff', marginRight: '1rem' }}>Fair</span>
                            <span style={{ marginRight: '1rem' }}>Phoenix, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ color: '#293140', padding: 0, borderRadius: 5, border: 'none', backgroundColor: '#06BDD6', width: 100, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p> June 2019 - Oct. 2019 </p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Web Developer</h5> 
                            <span style={{ color: '#fff', marginRight: '1rem' }}>Mediphor</span>
                            <span>Tempe, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ color: '#293140', padding: 0, borderRadius: 5, border: 'none', backgroundColor: '#06BDD6', width: 100, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p> May 2018 - June 2019</p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Wordpress Designer</h5> 
                            <span style={{ width: 55, color: '#fff', marginRight: '1rem' }}>Endurance </span>
                            <span>Tempe, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ color: '#293140',padding: 0, borderRadius: 5, border: 'none', backgroundColor: '#06BDD6', width: 100, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p> June 2017 - May 2018</p>
                        </Col>
                    </Row>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h5>Graphic Designer</h5> 
                            <span style={{ width: 55, color: '#fff', marginRight: '1rem' }}>Sandoval Agency</span>
                            <span>Tempe, AZ</span>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Button style={{ color: '#293140',padding: 0, borderRadius: 5, border: 'none', backgroundColor: '#06BDD6', width: 100, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p> Jan 2016 - Jan 2017</p>
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
                        <Col style={{ textAlign: 'right', marginTop: '' }}>
                            <p style={{ marginTop: 25, marginRight: 8 }}>AS in Graphic Design</p>
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
            <HeaderImage>
            <ResumeStyles>
            <Container style={{ width: '100vw', margin: 'auto', padding: '5rem ' }}>
            <Row>
            <Col sm={4}>
            <Image className='img1' src={img1} alt="profile pic" fluid/>
            <h2>Brad Thompson</h2>
            <h5>Front End Developer</h5>
            <Row style={{ marginLeft: 2, marginTop: 25 }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ margin: '3px 15px 0px 0px' }} />
                <StyledLink>
                <a href= "mailto=bisraddesign@gmail.com">Bisraddesign@gmail.com</a>
                <br />
                </StyledLink>
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
                            style={{ width: 230, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            <a href ='https://resume.io/r/yFv8cI2lh' rel="noreferrer">Download Resume</a>
                        </Button>    
                  </MainButton>
                </Row>
            </Col>
            <Col sm={6}>
            <h1 style={{ color: '#fff' }}>Professional Summary</h1>
            <p style={{ fontSize: 14 }}>Starting as a passionate graphic designer working with small businesses and agencies; I gradually adapted the ability to code and develop my own creative vision into functioning user experiences. Working as a team player to establish foundation for new visions and products has been a dream of mine. Being able to continue on this path of learning has opened my eyes to becoming a Front End Developer.
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
            </HeaderImage>
            </Layout>
        );
    }
}

export default Resume
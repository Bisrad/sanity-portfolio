import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import img1 from '../images/ProfilePic.png';


const ResumeStyles = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem;
 
        .img1 {
            width: 250px;
            padding: 0 65px;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
        Col {
            padding: 0;
        }
        h2, h5 {
            text-align: center;
            margin: auto;
        }
`;

const MainButton = styled.div`
    display: flex;
    justify-content: flex-end;
    border-radius: 3px!important;
`;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: 250
        }}
    />
);

class WorkExperience extends React.Component {

    render() {
        
        return (
            <div>
                <Container>
                    <Row style= {{ marginTop: 15 }}>
                        <Col style= {{ padding: 0 }}>
                            <h6>Job Title</h6> 
                            <span style={{ marginRight: '2rem' }}> <em></em>  Company name</span>
                            <span style={{ marginRight: '2rem' }}><em></em> Location</span>
                        </Col>
                        <Col style={{ textAlign: 'right', marginTop: '1rem' }}>
                            <Button style={{ padding: 5, borderRadius: 50, border: 'none', backgroundColor: '#06BDD6', width: 125, justifyContent: 'flex-end' }}>Full Time</Button>
                            <p style={{ marginRight: 8 }}> January 29, 2021 </p>
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
                            <h6>The Art Institute of Pittsburgh</h6> 
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
            <Container>
            <div>
            <Link style={{ marginLeft: '4rem' }} to="/">⤎ Back to Projects</Link>
            </div>
            <Row>
            <Col>
            <Image className='img1' src={img1} alt="profile pic" fluid/>
            <h2>Brad Thompson</h2>
            <h5>Front End Developer</h5>
            <Row style={{ justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Bisraddesign@gmail.com</span>
                <br />
            </Row>
                <ColoredLine color="#06BDD6" />
            <Row style={{ justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Bisraddesign@gmail.com</span>
                <br />
            </Row>
                <ColoredLine color="#06BDD6" />
            <Row style={{ justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Phoenix, AZ</span>
                <br />
            </Row>
                <ColoredLine color="#06BDD6" />
            <Row style={{ justifyContent: 'center', marginTop: 25, marginBottom: 45 }}>
                <i style={{ marginRight: 15 }}>env   </i>
                <span>Design & Development</span>
                <br />
            </Row>
                <Row style={{ justifyContent: 'center' }}>
                <MainButton>
                        <Button 
                            variant="default"
                            style={{width: 230, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            <Link style={{ margin: 0 }} to="/resume">Download Resume</Link>
                        </Button>    
                  </MainButton>
                </Row>
            </Col>
            <Col>
            <h1>Professional Summary</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro, possimus quasi repudiandae accusamus dolorem distinctio pariatur quibusdam aspernatur est harum aut a. Temporibus quod recusandae quisquam adipisci dicta dignissimos ipsum, animi doloremque alias, mollitia repudiandae nulla itaque veritatis dolor quas sed laborum necessitatibus tempore!</p>
            <Row>
            <Container>
            <h3>Work Experience</h3>
            <WorkExperience />
            <WorkExperience />
            <WorkExperience />
            </Container>
            <Container>
            <h3>Education</h3>
            <EducationBlock />
            </Container>
            </Row>
            </Col>
            </Row>
            </Container>
            </ResumeStyles>
            </Layout>
        );
    }
}

export default Resume
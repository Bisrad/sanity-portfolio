import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import img2 from '../images/project.png';


const LinkStyle = styled.div`
  display: block;
  margin-top: 1rem;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

class Projects extends React.Component {
    render() {
        return(
            <Container id='projects' style={{ marginTop: '5rem',  marginBottom: '5rem', padding: 50 }}>
                <Row>
                    <Col>
                        <Image src={img2} alt="project img" fluid/>
                        <LinkStyle>
                            <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faFacebook} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                        </LinkStyle>  
                    </Col>
                    <Col>
                        <h1 style={{ display: 'flex' }}>.01 | Title &nbsp; <FontAwesomeIcon className="icon" icon={faGithub} size='1x' /></h1>
                        <p>et, euismod tempor consequat vehicula. diam est congue, in, mollis nec, pharetra, adipiscing exercitation ex mauris a lacus. in, sit quis,
                         pellentesque pellentesque sapien tincidunt fermentum lorem, eu, sapien lobortis</p>
                         <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            View Deployment
                        </Button>  
                    </Col>
                </Row>
        </Container>    
        )
    }
}

export default Projects
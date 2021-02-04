import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass, faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import img1 from '../images/ProfilePic.png';


const LinkStyle = styled.div`
  display: block;
  margin-top: 1rem;
  margin: auto;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

class About extends React.Component {
    render() {
        return(
            <Container id='about' style={{  padding: 50 }}>
                <Row>
                    <Col style={{ margin: 'auto' }}>
                        <h2>Hey, I'm Brad <span role="img" aria-label="wave">👋</span></h2>
                        <h6>Front End Developer | Digital Designer</h6>
                    
                        <p style={{ fontSize: '1rem' }}> 
                        am an avid learner, driven by a need to envelop myself in what interests me, 
                        coupled with my self-starter nature. I am constantly on a mission to find the balance between ideal and practical.
                        </p>
                        <LinkStyle>
                            <FontAwesomeIcon className="icon" icon={faReact} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faJs} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faHtml5} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faCss3} size='2x' />
                            <FontAwesomeIcon className="icon" icon={faSass} size='2x' />
                        </LinkStyle>  
                    </Col>
                    <Col>
                        <Image style={{ margin: 'auto', display: 'flex', justifyContent: 'center', maxWidth: '75%' }}src={img1} alt="profile pic" fluid/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default About
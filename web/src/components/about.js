import React from "react";
//Gatsby
import Image from 'react-bootstrap/Image'
import { Link } from "gatsby";
// Styled Components
import styled from "styled-components";
// React Bootstrap
import { Row, Col, Jumbotron, Container } from "react-bootstrap";
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
//Images
import img1 from '../images/AboutImage.png';
// Page styled components 
import Button from "../theme/Button";
import Boop from "../theme/Boop"
import LinkStyle from "../theme/Social";

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
`;

const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
`;


class About extends React.Component {
    render() {
        return(
          <Container>
          <Jumbotron id='about' style={{ backgroundColor: 'transparent' }}>
                {/* Main Text */}
                <Row>
                    <Col style={{ margin: 'auto' }}>
                      <Title>Hey, I'm Brad</Title>
                      <SubTitle>Front End Developer | Graphic Designer</SubTitle>
                      <p style={{ margin: '2rem auto' }}>
                        Creative and self-driven dev/designer with 5+ years of 
                        experience creating and delivering unique, innovative design solutions for consumers and growing brands. Skilled in taking projects from conception through to completion. Transforming information and concepts into attractive, human-centered designs.
                      </p>
                {/* Left Button */}
                      <Button primary as="a" href="https://bisrad.myportfolio.com/">Design  Portfolio</Button>
                {/* Site Links */}
                <Row>
                      <LinkStyle>
                        <Boop rotation={20} timing={200}>
                          <Link to='https://github.com/Bisrad'>
                              <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                          </Link>
                        </Boop>
                        <Boop  rotation={-20} timing={200}>
                          <Link to='https://www.facebook.com/brad.thompson.543792'>
                              <FontAwesomeIcon className="icon flex-grow-2" icon={faFacebook} size='2x' />
                          </Link>
                        </Boop>
                        <Boop rotation={20} timing={200}>
                          <Link to='https://twitter.com/Dev_Bread'>
                              <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
                          </Link>
                        </Boop>
                        <Boop  rotation={-20} timing={200}>
                          <Link to='https://www.linkedin.com/in/brad-thompson-95a88913a/'>
                              <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
                          </Link>
                        </Boop>
                      </LinkStyle> 
                    </Row>
                    </Col>
                  { /* Right Profile Image */ }
                  <Col>
                      <Image style={{ margin: 'auto'}}src={img1} alt="profile pic" fluid/>
                  </Col>
                </Row>
            </Jumbotron>
              
         </Container>
        );
    }
}

export default About
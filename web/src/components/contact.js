import React from "react";
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby";
import Button from "../theme/Button";
import Boop from "../theme/Boop"


const LinkStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
`;


const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

class Contact extends React.Component {
    render() {
        return(
            <Container id='contact' style={{ padding: 50 }} >
            <Title style={{ textAlign: 'center',  marginBottom:'2.5rem'  }}>Get In Touch</Title>
                  <h6 style={{ textAlign: 'center', marginBottom:'2.5rem' }}>  
                        Currently Looking to Join an Awesome development team 
                        to continue my path to Full stack Developer 
                  </h6>
             
                    <Row style={{ justifyContent: 'center' }}>
                        <Button primary as="a" href="https://github.com/Bisrad">Checkout My Github</Button>
                    </Row>
              
                    <Row style={{ justifyContent: 'center' }}>
                    <Mailto email="bisraddesign@gmail.com" subject="Hey, Lets Code Something!">
                        <Button primary as="email" mailto="bisraddesign@gmail.com">Say Hey <span role="img" aria-label='wave' style={{ marginLeft: '.5rem' }}>   👋 </span></Button>
                        </Mailto>
                    </Row>
                
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
                        <Boop  rotation={20} timing={200}>
                          <Link to='https://www.linkedin.com/in/brad-thompson-95a88913a/'>
                              <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
                          </Link>
                        </Boop>
                    
                        </LinkStyle>  
                    </Row>
            </Container>
        );
    }
}

export default Contact
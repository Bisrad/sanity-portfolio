import React from "react";
import { Container, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby";

const MainButton = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

const LinkStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

class Contact extends React.Component {
    render() {
        return(
            <Container id='contact' style={{ padding: 50 }} >
            <h2 style={{ textAlign: 'center',  marginBottom:'2.5rem'  }}>Get In Touch</h2>
                  <h5 style={{ textAlign: 'center', marginBottom:'2.5rem' }}>  
                        Currently Looking to Join an Awesome development team 
                        to continue my path to Full stack Developer 
                  </h5>
                  <MainButton>
                    <Row>
                        <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                           <Link to='https://github.com/Bisrad'>See More at Github</Link>
                            
                        </Button>    
                    </Row>
                  </MainButton>
                  <MainButton>
                    <Row>
                        <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            <Link to='mailto:bisraddesign@gmail.com'>Say Hello</Link>
                            </Button>    
                    </Row>
                  </MainButton>
                    <Row>
                        <LinkStyle>
                     
                        <Link to='https://github.com/Bisrad'>
                        <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                        </Link>
           

                        <Link to='https://www.facebook.com/brad.thompson.543792'>
                        <FontAwesomeIcon className="icon flex-grow-2" icon={faFacebook} size='2x' />
                        </Link>
               
         
                        <Link to='https://twitter.com/Dev_Bread'>
                        <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
                        </Link>
            
            
                        <Link to='https://www.linkedin.com/in/brad-thompson-95a88913a/'>
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
                        </Link>
                
                        </LinkStyle>  
                    </Row>
            </Container>
        );
    }
}

export default Contact
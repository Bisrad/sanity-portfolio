import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import img1 from '../images/ProfilePic.png';
import { Link } from "gatsby";


const Boop = ({ rotation = 0, timing = 150, children }) => {
    const [isBooped, setIsBooped] = React.useState(false);
    const style = {
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: isBooped
        ? `rotate(${rotation}deg)`
        : `rotate(0deg)`,
      transition: `transform ${timing}ms`,
    };
    React.useEffect(() => {
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped, timing]);
    const trigger = () => {
      setIsBooped(true);
    };
    return (
      // eslint-disable-next-line max-len
      <span onMouseEnter={trigger} style={style}>
        {children}
      </span>
    );
  };


const LinkStyle = styled.div`
  display: block;
  margin-top: 1rem;
  float: left;
  margin-left: 15px;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

class About extends React.Component {
    render() {
        return(

            <Container id='about' style={{  justifyContent: 'center', margin: ' 5rem auto' }}>
                <Row style={{ margin: 'auto' }}>
                    <Col style={{ margin: 'auto' }}>
                        <h2 style={{ color: '#fff', fontSize: '5rem' }}>Hey, I'm Brad <span style={{ fontSize: 'smaller'}} role="img" aria-label="wave">👋</span></h2>
                        <h5>Front End Developer | Digital Designer</h5>
                    
                        <p style={{ fontSize: '1rem' }}> 
                        I'm an avid learner, driven by a need to envelop myself in what interests me, 
                        coupled with my self-starter nature. I am constantly on a mission to find the balance between ideal and practical.
                        </p>
                        <Row>
                    {/* Site Links */}
                    <LinkStyle>
                    <Boop  rotation={20} timing={200}>
                    <Link to='https://github.com/Bisrad'>
                        <FontAwesomeIcon className="icon" icon={faGithub} size='2x' />
                    </Link>
                    </Boop>
                    <Boop  rotation={-20} timing={200}>
                    <Link to='https://www.facebook.com/brad.thompson.543792'>
                        <FontAwesomeIcon className="icon flex-grow-2" icon={faFacebook} size='2x' />
                    </Link>
                    </Boop>
                    <Boop  rotation={20} timing={200}>
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
                    <Col>
                        <Image style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}src={img1} alt="profile pic" fluid/>
                    </Col>
                </Row>
            </Container>
   
        );
    }
}
export default About
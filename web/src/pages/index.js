import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'gatsby';
// Component imports
import styled from 'styled-components';
import Layout from '../components/layout';
// Icon Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container, Jumbotron} from 'react-bootstrap';
// Page Import 
import Contact from '../components/contact';
import About from '../components/about';
import Work from '../components/work';
import Projects from '../components/projects';
import Facts from '../components/facts';
import { Link } from 'gatsby';

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



const container = styled.div`
  padding: 0!important;
`;

const MainText = styled.div`
  text-align: center;
   h1 {
      color: #06BDD6;
      font-size: 3.5rem!important;
   }
`;

const LinkStyle = styled.div`
  display: block;
  text-align: center;
  margin-top: 3rem;
    .icon {
      margin-right: 30px;
      color: #06BDD6;
    }
`;

const IndexPage = () => (
  <Layout>
    <Jumbotron fluid style={{ backgroundColor: '#101f2f' }}>
      <Container style={{ container }}>
            <MainText>
            <h1>Creative Designer 
            <br /> & Developer</h1>
            </MainText>
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
          </Container>
        </Jumbotron>
        <About id='about' />
        <Facts id='facts' />
        <Work  id='work' />
        <Projects id='projects' />
        <Contact id='contact' />
  </Layout>
);

export default IndexPage;
import React from "react";
import { Container, Card, Col } from "react-bootstrap";
import styled from 'styled-components';
// Design Icon Import
import Illustrator from '../assets/illustrator_icon.png'
import Photoshop from '../assets/photoshop_icon.png'
import Xd from '../assets/xd_icon.png'
import Indesign from '../assets/indesign_icon.png'
// Dev Icon Import
import Html from '../assets/html-5_logo.png'
import Css from '../assets/css-3_logo.png'
import Js from '../assets/js_logo.png'
import Node from '../assets/node-js_logo.png'
import Sass from '../assets/Sass_logo.png'
import Icon from '../assets/React_logo.png'


const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

const SubTitle = styled.h3`
    font-size: 2.5rem;
    padding-bottom: 10px;
    margin: auto;
    color: #fff;
`;

const IconStyle = styled.i`
    margin-left: 1rem ;
    .icon {
            max-width: 45px;
        }
`;

class Work extends React.Component {
    render() {
        return(
            <Container style={{ margin: '4rem auto'}}>
                    <Title>
                    Work Experience
                    </Title>
                <Card fluid sm style={{ margin: '2rem 0rem', backgroundColor: '#131519'}}>
                <Card.Header style={{ backgroundColor: '#131519', borderColor: '#131519'}}>
                <IconStyle>
                        <img className="icon" src={Illustrator} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Photoshop} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Xd} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Indesign} alt="illustrator-logo"/>
                 </IconStyle>
                </Card.Header>
                    <Card.Body style={{ backgroundColor: '#181a1f' }}>
                        <Card.Title style={{ padding: '0 2rem' }}>
                        <SubTitle>
                            Graphic Designer
                        </SubTitle>
                        </Card.Title>
                        <Card.Text style={{ padding: '1rem 2rem' }}>
                        <p>
                            I value simple content structure, clean design patterns, and thoughtful interactions. 
                        </p>
                        <p>
                            UX, UI, Web, Mobile, Apps, Logos. I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.
                        </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
            {/* --------------- */}
  
                <Card md style={{  margin: '2rem 0rem',backgroundColor: '#131519'}}>
                <Card.Header style={{ backgroundColor: '#131519', borderColor: '#131519'}}>
                <IconStyle>
                        <img className="icon" src={Html} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Css} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Js} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Node} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Icon} alt="illustrator-logo"/>
                        </IconStyle>
                        <IconStyle>
                        <img className="icon" src={Sass} alt="illustrator-logo"/>
                        </IconStyle>
           
                </Card.Header>
                    <Card.Body style={{ backgroundColor: '#181a1f' }}>
                        <Card.Title style={{ padding: '0 2rem' }}>
                        <SubTitle>
                            Front End Developer
                        </SubTitle>
                        </Card.Title>
                        <Card.Text style={{ padding: '1rem 2rem' }}>
                        <p>
                            I like to code things. Wether it be from scratch, with a team, or in my free time. 
                            </p>
                            <p>Being able to be the one that brings my own designs to life. Creating things that live on the internet: websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performance experiences.
                        </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
            
            {/* --------------- */}

        </Container>
        );
    }
}

export default Work
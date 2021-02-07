import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
// import styled from 'styled-components';
import img2 from '../images/quips.png';
import img3 from '../images/mediphor.png';
import img4 from '../images/Hamilton.png';
import img5 from '../images/BodyBern.png';
import img6 from '../images/pizza.png';


// const LinkStyle = styled.div`
//   display: block;
//   margin-top: 1rem;
//     .icon {
//       margin-right: 30px;
//       color: #06BDD6;
//     }
// `;

class Projects extends React.Component {
    render() {
        return(
            <Container id='projects' style={{ padding: 70 }}>
            <h1 style={{ marginBottom: '2rem'}}>My Projects</h1>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image style={{ borderRadius: '15px' }}src={img2} alt="project img" fluid/>
                    </Col>
                    <Col style={{ margin: 'auto'}}>
                        <h1 style={{ paddingBottom: 5,color: '#fff', display: 'flex' }}>| Quips</h1>
                        <p style={{ fontSize: '15px' }}>
                        Working on a startup project tackling inconsistencies in the moving industry. 
                        I helped to update and outdated industry to fit a more modern landscape. 
                     </p>
                         <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            Visit WebSite
                        </Button>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image style={{ borderRadius: '15px' }}src={img6} alt="project img" fluid/>

                    </Col>
                    <Col style={{ margin: 'auto'}}>
                        <h1 style={{ paddingBottom: 15, color: '#fff', display: 'flex' }}>| Slick's Slices</h1>
                        <p style={{ fontSize: '15px' }}>A Gatsby static site exploring using the headless CMS sanity and graphQL. This project aims for speed, SEO and an optimal user experience.  </p>
                         <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            Visit WebSite
                        </Button>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image style={{ borderRadius: '15px' }}src={img3} alt="project img" fluid/>

                    </Col>
                    <Col style={{ margin: 'auto'}}>
                        <h1 style={{ paddingBottom: 15, color: '#fff', display: 'flex' }}>|  Mediphor</h1>
                        <p style={{ fontSize: '15px' }}>Deisgned for a Industrial Design Firm here in Tempe, AZ. 
                        This Project aims to showcase company products, goals, and client 
                        type</p>
                         <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            Visit WebSite
                        </Button>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image style={{ borderRadius: '15px' }}src={img4} alt="project img" fluid/>
                    </Col>
                    <Col style={{ margin: 'auto'}}>
                        <h1 style={{ paddingBottom: 15, color: '#fff', display: 'flex' }}>|  Hamilton HS</h1>
                        <p style={{ fontSize: '15px' }}>A Charity site designed for Hamilton High School. This was specialized for a yearly 
                        event that the school participates in each year</p>
                         <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            Visit WebSite
                        </Button>  
                    </Col>
                </Row>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image style={{ borderRadius: '15px' }}src={img5} alt="project img" fluid/>
                    </Col>
                    <Col style={{ margin: 'auto'}}>
                        <h1 style={{ paddingBottom: 15, color: '#fff', display: 'flex' }}>| BodyBern</h1>
                        <p style={{ fontSize: '15px' }}>Wordpress build for a Personal Trainer. Currently Under Development</p>
                         <Button 
                            variant="default"
                            style={{ width: 350, borderColor: '#06BDD6', backgroundColor: 'none', color: '#06BDD6'  }}
                            >
                            Visit WebSite
                        </Button>  
                    </Col>
                </Row>
        </Container>    
        )
    }
}

export default Projects
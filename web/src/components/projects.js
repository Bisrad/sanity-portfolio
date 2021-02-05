import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import styled from 'styled-components';
import img2 from '../images/quips.png';
import img3 from '../images/mediphor.png';
import img4 from '../images/Hamilton.png';
import img5 from '../images/BodyBern.png';
import img6 from '../images/pizza.png';


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
            <Container id='projects' style={{ padding: 50 }}>
            <h1 style={{ marginBottom: '2rem'}}>My Project</h1>
                <Row style={{ marginBottom: '3rem' }}>
                    <Col>
                        <Image style={{ borderRadius: '15px' }}src={img2} alt="project img" fluid/>

                    </Col>
                    <Col>
                        <h1 style={{ color: '#fff', display: 'flex' }}>| Quips</h1>
                        <p>et, euismod tempor consequat vehicula. diam est congue, in, mollis nec, pharetra, adipiscing exercitation ex mauris a lacus. in, sit quis,
                         pellentesque pellentesque sapien tincidunt fermentum lorem, eu, sapien lobortis</p>
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
                    <Col>
                        <h1 style={{ color: '#fff', display: 'flex' }}>| Slick's Slices</h1>
                        <p>et, euismod tempor consequat vehicula. diam est congue, in, mollis nec, pharetra, adipiscing exercitation ex mauris a lacus. in, sit quis,
                         pellentesque pellentesque sapien tincidunt fermentum lorem, eu, sapien lobortis</p>
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
                    <Col>
                        <h1 style={{ color: '#fff', display: 'flex' }}>|  Mediphor</h1>
                        <p>et, euismod tempor consequat vehicula. diam est congue, in, mollis nec, pharetra, adipiscing exercitation ex mauris a lacus. in, sit quis,
                         pellentesque pellentesque sapien tincidunt fermentum lorem, eu, sapien lobortis</p>
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
                    <Col>
                        <h1 style={{ color: '#fff', display: 'flex' }}>|  Hamilton HS</h1>
                        <p>et, euismod tempor consequat vehicula. diam est congue, in, mollis nec, pharetra, adipiscing exercitation ex mauris a lacus. in, sit quis,
                         pellentesque pellentesque sapien tincidunt fermentum lorem, eu, sapien lobortis</p>
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
                    <Col>
                        <h1 style={{ color: '#fff', display: 'flex' }}>| BodyBern</h1>
                        <p>et, euismod tempor consequat vehicula. diam est congue, in, mollis nec, pharetra, adipiscing exercitation ex mauris a lacus. in, sit quis,
                         pellentesque pellentesque sapien tincidunt fermentum lorem, eu, sapien lobortis</p>
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
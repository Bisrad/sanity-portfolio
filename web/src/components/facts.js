import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';


const LeftStyle = styled.div`
    border-left-style: solid;
    margin: 'auto';
    
        h6 {
            padding-left: 15px;
            color: #fff;
        }
        p {
            font-size: .8rem;
            padding-left: 15px;
        }
`;

class Facts extends React.Component {
    render() {
        return(
                <Container fluid style={{ display: 'flex', padding: '2rem', justifyContent: 'center', width: 'auto'}}>
                    <Row style={{ flexWrap: 'none' }}>
                        <LeftStyle>
                            <Col xs={12} md={8} style={{ width: '30vw' }}>
                            <h6 >Always Learning</h6>
                            <p>I enjoy spending my time learning as much as I can about all different aspects of technology past and present.</p>
                            </Col>
                        </LeftStyle>
                        <LeftStyle>
                            <Col xs={12} md={8} style={{ width: '20vw'}}>
                            <h6>My Hobbies</h6>
                            <p>I take time to enjoy the outdoors: camping, hiking, guitar, and rock climbing when I can.</p>
                            </Col>
                        </LeftStyle>
                        <LeftStyle>
                            <Col xs={12} md={8} style={{ width: '20vw'}}>
                            <h6>Future Interest</h6>
                            <p>I'm looking to grow my skills in Sanity, Gatsby and React in the near Future</p>
                            </Col>
                        </LeftStyle>
                    </Row>
                </Container>
        );
    }
}
export default Facts
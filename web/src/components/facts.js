import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';


const LeftStyle = styled.div`
    
    border-left-style: solid;
    margin: 'auto';
    
        h6 {
            font-size: 1.3rem;
            padding-left: 10px;
            color: #fff;
        }
        p {
            font-size: .8rem;
            padding-left: 10px;
        }
`;

class Facts extends React.Component {
    render() {
        return(
                <Container>
                    <Row style={{ borderRadius: 15, padding: '1rem', backgroundColor: '#131519'}}>
                            <Col sm={8} md >
                        <LeftStyle>
                            <h6>Always Learning</h6>
                            <p>
                                Taking the time each day to learn something new is a daily goal. In an industry the changes so fast it's key to stay on your toes, and pivot when needed.
                            </p>
                        </LeftStyle>
                            </Col>
                            <Col sm={8} md >
                        <LeftStyle>
                            <h6>Hobbies</h6>
                            <p>
                                Taking time to enjoy the outdoors wether it be: camping, hiking, or rock climbing. Or listening to music and playing guitar when I can.
                            </p>
                        </LeftStyle>
                            </Col>
                            <Col sm={8} md >
                        <LeftStyle>
                            <h6>Future Interest</h6>
                            <p>
                               Currently, Building my skills as a Developer in React, Gatsby, and Sanity. Evolving interactions with my designs is the goal.
                            </p>
                        </LeftStyle>
                            </Col>
                    </Row>
                </Container>
        );
    }
}
export default Facts
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const LeftStyle = styled.div`
    border-left-style: solid;
    padding: .5rem;
    
        h5 {
            padding-left: 15px;
        }
        p {
            font-size: .8rem;
            padding-left: 15px;
        }
`;

class Facts extends React.Component {
    render() {
        return(
                <Container style={{ backgroundColor: '#0f3e61'}}>
                    <Row>
                        <LeftStyle>
                            <Col xs={12} md={8} style={{ width: 200 }}>
                            <h5>Fact 1</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis nemo sit harum quam minus!</p>
                            </Col>
                        </LeftStyle>
                        <LeftStyle>
                            <Col xs={12} md={8} style={{ width: 200 }}>
                            <h5>Fact 2</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis nemo sit harum quam minus!</p>
                            </Col>
                        </LeftStyle>
                        <LeftStyle>
                            <Col xs={12} md={8} style={{ width: 200 }}>
                            <h5>Fact 2</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis nemo sit harum quam minus!</p>
                            </Col>
                        </LeftStyle>
                    </Row>
                </Container>
        );
    }
}
export default Facts
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from 'styled-components';

const LeftStyle = styled.div`
    border-left: 1px;
    border-left-style: solid;
    height: vh100;
        p {
            padding-left: 15px;
        }
`;

// const ButtonStyle = styled.div`
//     width: 350;
//     border-color: '#06BDD6'; 
//     background-color: 'none';
//     color: '#06BDD6';
// `;

class Work extends React.Component {
    render() {
        return(
            <Container id='work' style={{ borderRight: 3, padding: 50 }}>
                <Row>
                    <Col>
                    <h2 style={{ marginBottom:'1.5rem'  }}>Work Experience</h2>
                    <Row style={{ margin: 'auto' }}>
                    <ul style={{ margin: 0, padding: 0 }}>
                        <li style={{ paddingBottom: 20 }}>
                        <Button>Web Designer</Button>
                        </li>
                        <li style={{ paddingBottom: 20 }}>
                        <Button>Quality Assurance Engineer</Button>
                        </li>
                        <li style={{ paddingBottom: 20 }}>
                        <Button>Web Developer</Button>
                        </li>
                        <li style={{ paddingBottom: 20 }}>
                        <Button>Wordpress Developer</Button>
                        </li>
                    </ul>
                    </Row>
                    </Col>
                    <Col style={{ margin: 'auto' }}>
                    <LeftStyle>
                    <p>veniam, et amet, qui quis, platea elit. ullamco eu consequat mollis labore elit. mollis aliquam est mollis incididunt aute duis scelerisque ea mi. adipiscing congue, aute consectetur malesuada amet, id pretium a</p>
                    <p>veniam, et amet, qui quis, platea elit. ullamco eu consequat mollis labore elit. mollis aliquam est mollis incididunt aute duis scelerisque ea mi. adipiscing congue, aute consectetur malesuada amet, id pretium a</p>                    
                    </LeftStyle>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Work
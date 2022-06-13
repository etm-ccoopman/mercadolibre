import React from 'react';
import { Container, Card, Row, Col } from 'reactstrap';

export default function Technologies(props) {
    const front = [{
        name: "React 18"
    }, {
        name: "React Router Dom"
    }, {
        name: "Axios"
    }, {
        name: "Sass"
    }, {
        name: "Reactstrap"
    }, {
        name: "Font Awesome Icons"
    }, {
        name: "Animate CSS"
    }, {
        name: "Bootstrap 5"
    }];

    const back = [{
        name: "Node JS Express"
    }, {
        name: "Nodemon"
    }, {
        name: "Dotenv"
    }, {
        name: "Cors"
    }];

    return (
        <Card className={`mt-5 animate__animated ${(props.showSection.state) ? `animate__fadeInLeft` : `animate__fadeOutRight`}`} hidden={(props.showSection.initial) ? false : true}>
            <Container>
                <Row className="mt-2">
                    <Col>
                        <ul>
                            <li>
                                <code className="fs-4">Front</code>
                            </li>
                            <ul>
                                {
                                    front.map((e, i) => {
                                        return (
                                            <li key={`front_${i}`}>
                                                <code className="fs-5">{e.name}</code>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <code className="fs-4">Back</code>
                            </li>
                            <ul>
                                {
                                    back.map((e, i) => {
                                        return (
                                            <li key={`back_${i}`}>
                                                <code className="fs-5">{e.name}</code>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}
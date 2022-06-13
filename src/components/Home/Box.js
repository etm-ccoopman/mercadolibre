import React from 'react';
import { Container, Card, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Box(props) {

    return (
        <Card className="animate__animated animate__fadeInUp">
            <Row className="pt-3 pb-2">
                <Col lg={4} md={12} className="mt-lg-0 mt-2">
                    <Container className="d-flex">
                        <div className="text-center ps-1 pe-1 me-2 mt-2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="white" className="custom_circle_icon" />
                        </div>
                        <p className="fs-5">Busca cualquier elemento en la barra superior y luego presionar la lupa o enter</p>
                    </Container>
                </Col>
                <Col lg={4} md={12} className="mt-lg-0 mt-2">
                    <Container className="d-flex">
                        <div className="text-center ps-1 pe-1 me-2 mt-2">
                            <Link to="/items">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2x" color="white" className="custom_circle_icon" />
                            </Link>
                        </div>
                        <Link to="/items" className="">
                            <p className="fs-5 mt-3">¿Quieres ir directamente a los resultados?</p>
                        </Link>
                    </Container>
                </Col>
                <Col lg={4} md={12} className="mt-lg-0 mt-4">
                    <Container className="d-flex">
                        <div className="text-center ps-1 pe-1 me-2 mt-2">
                            <FontAwesomeIcon icon={faCode} size="2x" color="white" className="custom_circle_icon" onClick={() => props.setShowSection({ initial: true, state: !props.showSection.state })} />
                        </div>
                        <p className="fs-5 mt-3" onClick={() => props.setShowSection({ initial: true, state: !props.showSection.state })} >¿Qué tecnologías y librerías utilicé?</p>
                    </Container>
                </Col>
            </Row>
        </Card>
    );
}
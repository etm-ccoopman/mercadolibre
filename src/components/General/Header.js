import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, NavItem, Input, Container, Button, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../../assets/img/logo.png';
import profile from '../../assets/img/profile.png';
import react_img from '../../assets/img/react.png';
import node from '../../assets/img/node.png';
import expo from '../../assets/img/expo.png';
import aws from '../../assets/img/aws.png';
import linkedin from '../../assets/img/linkedin.png';

export default function Header() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const search = () => {
        navigate({
            pathname: '/items',
            search: `?search=${keyword}`,
        });
    }

    const sendForm = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    }

    return (
        <Fragment>
            <div className="header">
                <Nav className="custom_navbar pt-1 pb-1" justified>
                    <Container>
                        <NavItem className="d-flex">
                            <div>
                                <Link to="/">
                                    <img src={logo} className="img-fluid w-50 " alt="" />
                                </Link>
                            </div>
                            <InputGroup>
                                <Input
                                    type="text"
                                    placeholder="Nunca dejes de buscar"
                                    className="custom_search_input"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={sendForm}
                                />
                                <Button className="custom_search_btn" onClick={search}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Button>
                            </InputGroup>
                            <div className="mt-2 ms-3">
                                <FontAwesomeIcon icon={faCircleUser} size="2x" className="pointer custom_user_icon" onClick={() => setShowModal(!showModal)} />
                            </div>
                        </NavItem>
                    </Container>
                </Nav>
                <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
                    <ModalHeader>Cristopher Coopman Reyes</ModalHeader>
                    <ModalBody className="text-center">
                        <img src={profile} className="img-fluid w-50" />
                        <p className="fs-5">CTO & Fullstack Javascript developer</p>
                        <a href="https://www.linkedin.com/in/cristopher-coopman-reyes-259446102/" target="_blank">
                            <img src={linkedin} className="img-fluid" width={30} />
                        </a>
                        <Row className="mt-3">
                            <Col md={6}>
                                <img src={react_img} className="img-fluid w-50" />
                                <p>Node JS Express</p>
                            </Col>
                            <Col md={6}>
                                <img src={node} className="img-fluid w-50" />
                                <p>React JS</p>
                            </Col>
                            <Col md={6}>
                                <img src={expo} className="img-fluid w-50" />
                                <p>React Native Expo</p>
                            </Col>
                            <Col md={6}>
                                <img src={aws} className="img-fluid w-50" />
                                <p>AWS</p>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <p className="fs-5 text-danger pointer" onClick={() => setShowModal(!showModal)}>
                            <FontAwesomeIcon icon={faTimes} className="me-2" />
                            Cerrar
                        </p>
                    </ModalFooter>
                </Modal>
            </div>
        </Fragment>
    );
}
import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function App() {
  const [showSection, setShowSection] = useState({ initial: false, state: false });

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
    <div className="text-start home">
      <Container>
        <Breadcrumbs page="HOME" />
        <Card className="mt-5 animate__animated animate__fadeInUp">
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
                  <FontAwesomeIcon icon={faCode} size="2x" color="white" className="custom_circle_icon" onClick={() => setShowSection({ initial: true, state: !showSection.state })} />
                </div>
                <p className="fs-5 mt-3" onClick={() => setShowSection({ initial: true, state: !showSection.state })} >¿Qué tecnologías y librerías utilicé?</p>
              </Container>
            </Col>
          </Row>
        </Card>
        <Card className={`mt-5 animate__animated ${(showSection.state) ? `animate__fadeInLeft` : `animate__fadeOutRight`}`} hidden={(showSection.initial) ? false : true}>
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
      </Container>
    </div >
  );
}
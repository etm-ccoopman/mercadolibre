import React, { Fragment } from 'react';
import {
  Container,
  Card,
  Row,
  Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '../components/Breadcrumbs';

export default function App() {
  return (
    <div className="text-start">
      <Container>
        <Breadcrumbs page="HOME"/>
        <Card className="mt-5">
          <Row className="pt-3 pb-1">
            <Col lg={4} md={12} className="mt-lg-0 mt-2">
              <Container>
                <Row>
                  <Col xl={1}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Col>
                  <Col xl={11}>
                    <p>Busca cualquier elemento en la barra superior y luego presionar la lupa o enter</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={4} md={12} className="mt-lg-0 mt-2">
              <Container>
                <Row >
                  <Col xl={1}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Col>
                  <Col xl={11} >
                    <span >¿Quieres ir directamente a los resultados?</span>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={4} md={12} className="mt-lg-0 mt-4">
              <Container>
                <Row>
                  <Col xl={1}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Col>
                  <Col xl={11}>
                    <p>¿Qué tecnologías y librerías utilicé?</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}
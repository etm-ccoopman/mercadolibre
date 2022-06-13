

import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

export default function LoadingScreen({ title }) {
    return (
        <Fragment>
            <Row className="text-center text-primary fs-1 mt-5">
                <Col md={5} sm={12} className="text-md-end">
                    <FontAwesomeIcon icon={faSync} className="me-4 mt-2 fa-spin" />
                </Col>
                <Col md={7} sm={12} className="text-md-start">
                    <p>
                        {
                            (title !== undefined && title !== null) ?
                                title
                                :
                                "Cargando datos..."
                        }
                    </p>
                </Col>
            </Row>
        </Fragment>
    );
}
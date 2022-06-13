import React, { Fragment } from 'react';
import {
    Container,
    Card,
    Row,
    Col,
} from 'reactstrap';
import DetailItem from '../components/DetailItem';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Details() {
    return (
        <div className="text-start details">
            <Container>
                <Breadcrumbs page="DETAILS" />
                <Card className="mt-5 animate__animated animate__fadeIn animate__slow">
                    <DetailItem />
                </Card>
            </Container>
        </div>
    );
}
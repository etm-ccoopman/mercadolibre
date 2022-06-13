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
        <div className="text-start">
            <Container>
                <Breadcrumbs page="DETAILS" />
                <Card className="mt-5">
                    <DetailItem />
                </Card>
            </Container>
        </div>
    );
}
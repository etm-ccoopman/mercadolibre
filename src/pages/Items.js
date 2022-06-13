import React, { Fragment } from 'react';
import {
    Container,
    Card,
    Row,
    Col,
} from 'reactstrap';
import ResultsGrid from '../components/ResultsGrid';
import Breadcrumbs from '../components/Breadcrumbs';

export default function App() {
    return (
        <div className="text-start items">
            <Container>
                <Breadcrumbs page="ITEMS" />
                <Card className="mt-5 animate__animated animate__fadeIn animate__slow">
                    <ResultsGrid />
                </Card>
            </Container>
        </div>
    );
}
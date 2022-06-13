import React, { useState } from 'react';
import { Container, Card } from 'reactstrap';
import Breadcrumbs from '../components/General/Breadcrumbs';
import DetailItem from '../components/Details/DetailItem';

export default function Details() {
    const [categories, setCategories] = useState([]);

    return (
        <div className="text-start details">
            <Container>
                <Breadcrumbs page="DETAILS" categories={categories}/>
                <DetailItem setCategories={setCategories}/>
            </Container>
        </div>
    );
}
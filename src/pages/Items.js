import React, { useState } from 'react';
import { Container, Card } from 'reactstrap';
import Breadcrumbs from '../components/General/Breadcrumbs';
import ItemsGrid from '../components/Items/ItemsGrid';

export default function Items() {
    const [categories, setCategories] = useState([]);
    
    return (
        <div className="text-start items">
            <Container>
                <Breadcrumbs page="ITEMS" categories={categories}/>
                <ItemsGrid setCategories={setCategories}/>
            </Container>
        </div>
    );
}
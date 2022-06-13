import React, { Fragment, useState, useEffect } from 'react';
import {
    Container,
    Card,
    Row,
    Col,
    Button,
} from 'reactstrap';
import { API } from '../helpers/axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function DetailItem() {
    const { id } = useParams();

    const navigate = useNavigate();
    const [item, setItem] = useState([]);
    const [loading, setLloading] = useState(true);

    useEffect(() => {
        return () => getDataItem();
    }, []);


    const getDataItem = async () => {
        const res = await API.get(`/api/items/${id}`);

        if (res.data.state) {
            if (res.data.data.item) {
                setItem(
                    <Fragment>
                        <Container>
                            <Row>
                                <Col xl={8}>
                                    <img src={res.data.data.item.picture} className="img-fluid" width={250} />
                                    <h4>Descripción del producto</h4>
                                    <p>{res.data.data.item.description}</p>
                                </Col>
                                <Col xl={4}>
                                    <p>{res.data.data.item.condition} - {res.data.data.item.sold_quantity} vendidos</p>
                                    <p>{res.data.data.title}</p>
                                    <p>$ {res.data.data.item.price.amount}</p>
                                    <Button color="primary" block={true} onClick={() => console.log("Comprado!")}>Comprar</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Fragment>
                );
            }
        }
        setLloading(false);
    }

    return (
        <div>
            {item}
        </div>
    );
}
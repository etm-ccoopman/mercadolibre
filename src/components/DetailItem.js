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
import { formatNumber } from '../helpers/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
                            <Row className="m-3">
                                <Col xl={8} className="text-center">
                                    <Container>
                                        <img src={res.data.data.item.picture} className="img-fluid" width={250} />
                                        <div className="text-start mt-5">
                                            <p className="fs-2">Descripción del producto</p>
                                            <p>{res.data.data.item.description}</p>
                                        </div>
                                    </Container>
                                </Col>
                                <Col xl={4}>
                                    <p className="fs-5">{(res.data.data.item.condition === "new") ? "Nuevo" : "Usado"} - {res.data.data.item.sold_quantity} vendidos</p>
                                    <p className="fs-3">{res.data.data.item.title}</p>
                                    <p className="fs-1">$ {formatNumber(res.data.data.item.price.amount)}</p>
                                    <Button color="primary" size="lg" block={true} onClick={() => console.log("Agredado al carrito!")}>
                                        <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                                        Agregar al carrito
                                    </Button>
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
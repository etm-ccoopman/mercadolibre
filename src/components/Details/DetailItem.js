import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../helpers/axios';
import { formatNumber } from '../../helpers/Utils';
import LoadingScreen from '../../components/General/LoadingScreen';

export default function DetailItem(props) {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLloading] = useState(true);

    useEffect(() => {
        return () => getDataItem();
    }, []);


    const getDataItem = async () => {
        const res = await API.get(`/api/items/${id}`);

        if (res.data.state) {
            props.setCategories(res.data.data.item.categories);
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
        <Fragment>
            {
                (loading) ?
                    <LoadingScreen title="Cargando detalle..."/>
                    :
                    <Card className="animate__animated animate__fadeIn animate__slow">
                        {item}
                    </Card>
            }
        </Fragment>
    );
}
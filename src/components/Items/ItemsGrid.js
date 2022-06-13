import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Button, Card } from 'reactstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../helpers/axios';
import { formatNumber } from '../../helpers/Utils';
import LoadingScreen from '../../components/General/LoadingScreen';

export default function ResultsGrid(props) {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [loading, setLloading] = useState(true);

    useEffect(() => {
        return () => getParams();
    }, []);

    const getParams = () => {
        let keyword = "";
        searchParams.forEach(function (value, key) {
            if (key === 'search') {
                keyword = value;
            }
        });
        getItems(keyword);
    }

    const getItems = async (e) => {
        const res = await API.get('/api/items', { params: { q: e } });

        if (res.data.state) {
            props.setCategories(res.data.data.categories);

            const list = [];
            if (res.data.data.items.length > 0) {
                res.data.data.items.map((e, i) => {
                    list.push(
                        <Fragment key={i}>
                            <Row className="mt-2">
                                <Col xl={3} className="text-center">
                                    <img src={e.picture} className="img-fluid pointer" width={180} onClick={() => details(e.id)} />
                                </Col>
                                <Col xl={6}>
                                    <p className="fs-2 pointer" onClick={() => details(e.id)}>$ {formatNumber(e.price.amount)}</p>
                                    <p className="fs-5 pointer" onClick={() => details(e.id)}>{e.title}</p>
                                </Col>
                                <Col xl={3} className="text-center">
                                    <div className="mt-3">
                                        <Button color="primary" size="lg" className="mt-5" onClick={() => details(e.id)}>
                                            <FontAwesomeIcon icon={faArrowRightLong} className="me-2" />
                                            Ver detalle
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </Fragment>
                    );
                });
            }
            setItems(list);
        }
        setLloading(false);
    }

    const details = (e) => {
        navigate(`/items/${e}`);
    }

    return (
        <Fragment>
            {
                (loading) ?
                    <LoadingScreen title="Cargando productos..."/>
                    :
                    <Card className="animate__animated animate__fadeIn animate__slow">
                        {items}
                    </Card>
            }
        </Fragment>
    );
}
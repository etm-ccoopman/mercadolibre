import React, { Fragment, useState, useEffect } from 'react';
import {
    Container,
    Card,
    Row,
    Col,
    Button,
} from 'reactstrap';
import { API } from '../helpers/axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function ResultsGrid() {
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
            const list = [];
            if (res.data.data.items.length > 0) {
                res.data.data.items.map((e, i) => {
                    list.push(
                        <Fragment key={i}>
                            <Row>
                                <Col xl={3}>
                                    <img src={e.picture} className="img-fluid" width={180} />
                                </Col>
                                <Col xl={6}>
                                    <p>$ {e.price.amount}</p>
                                    <p>{e.title}</p>
                                </Col>
                                <Col xl={3}>
                                    <Button color="primary" onClick={() => details(e.id)}>Ver detalle</Button>
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
        <div>
            {items}
        </div>
    );
}
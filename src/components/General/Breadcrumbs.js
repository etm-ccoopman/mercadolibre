import React, { useEffect, useState, Fragment } from 'react';
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Breadcrumbs(props) {
    const [tree, setTree] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBreadcrumbs();
    }, [props.categories]);

    const getBreadcrumbs = () => {
        const list = [];
        list.push(
            <BreadcrumbItem key={0}>
                {props.page}
            </BreadcrumbItem>
        );
        if (props.categories !== undefined && props.categories !== null && props.categories.length > 0) {
            const total = props.categories.length;
            props.categories.map((e, i) => {
                list.push(
                    <BreadcrumbItem key={i + 1}>
                        {
                            ((i + 1) === total) ?
                                <Fragment>
                                    {e}
                                </Fragment>
                                :
                                <Link to={`/items?search=${e}`}>
                                    {e}
                                </Link>
                        }
                    </BreadcrumbItem>
                );
            });
        }
        setTree(list);
        setLoading(false);
    }

    return (
        <Container className="mt-3">
            <Breadcrumb>
                {
                    (loading) ?
                        ""
                        :
                        tree
                }
            </Breadcrumb>
        </Container>
    );
}
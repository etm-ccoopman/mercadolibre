import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    Container,
} from 'reactstrap';
import logo from '../assets/img/logo.png';

export default function Breadcrumbs( props ) {

    return (
        <Container>
            <Breadcrumb>
                <BreadcrumbItem active>
                    {props.page}
                </BreadcrumbItem>
            </Breadcrumb>
            {/* <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Library
                </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">
                        Library
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Data
                </BreadcrumbItem>
            </Breadcrumb> */}
        </Container>
    );
}
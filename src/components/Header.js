import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
    Input,
    Container,
    Button,
    InputGroup
} from 'reactstrap';
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    const search = () => {
        navigate({
            pathname: '/items',
            search: `?search=${keyword}`,
        });
    }
    
    const sendForm = (e) => {
        if(e.key === 'Enter'){
            search();
        }
    }

    return (
        <div>
            <Nav className="custom_navbar pt-1 pb-1" justified>
                <Container>
                    <NavItem className="d-flex">
                        <div>
                            <Link to="/">
                                <img src={logo} className="img-fluid w-50 " alt="" />
                            </Link>
                        </div>
                        <InputGroup>
                            <Input
                                type="text"
                                placeholder="Nunca dejes de buscar"
                                className="custom_search_input"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                onKeyDown={sendForm} 
                            />
                            <Button className="custom_search_btn" onClick={search}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </InputGroup>
                    </NavItem>
                </Container>
            </Nav>
        </div>
    );
}
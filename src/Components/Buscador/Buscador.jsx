import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import BuscadorResult from '../../View/BuscadorResult/BuscadorResult';

const Buscador = () => {

    const [searchInput, setSearchInput] = useState('')

    function mayPrimera(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <InputGroup >
            <Form.Control
                placeholder="Buscardor..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
            />
            <Button type='submit' variant="outline-secondary" id="button-addon2" >
                <Link to={`/searchResult/${mayPrimera(searchInput)}`}>
                    <img className='btn-buscador' src="/assets/search.png" alt="search icon" />
                </Link>
            </Button>
        </InputGroup >
    )
}

export default Buscador
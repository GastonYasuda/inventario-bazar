import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Buscador = () => {
    return (
        <InputGroup >
            <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" >
                <img className='btn-buscador' src="../assets/search.png" alt="search icon" />
            </Button>
        </InputGroup>)
}

export default Buscador
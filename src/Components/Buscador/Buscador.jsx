import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

const Buscador = () => {

    const [searchInput, setSearchInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchInput);
        setSearchInput('')
    }




    return (
        <InputGroup >
            <form onSubmit={handleSubmit}>

                <Form.Control
                    placeholder="Buscardor..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => setSearchInput(e.target.value)}
                    value={searchInput}
                />
                <Button type='submit' variant="outline-secondary" id="button-addon2" >
                    <Link to={`/searchResult/${searchInput}`} >
                        <img className='btn-buscador' src="/assets/search.png" alt="search icon" />
                    </Link>
                </Button>

            </form>
        </InputGroup>

    )
}

export default Buscador
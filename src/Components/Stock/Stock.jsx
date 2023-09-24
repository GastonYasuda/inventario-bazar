import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ApiContext } from '../../Context/ApiContext';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Stock = ({ selectProduct }) => {

    const { searchBrandImg, brandImg } = useContext(ApiContext)
    const [show, setShow] = useState(false);

    const [add, setAdd] = useState('')
    const [remove, setRemove] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        searchBrandImg(selectProduct.marca)

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(add);
        console.log(remove);

    }




    return (
        <form onSubmit={handleSubmit}>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose} centered={true}>

                <Modal.Header closeButton>
                    <Modal.Title>{selectProduct.producto}</Modal.Title>
                    <img src={brandImg} alt="brand image" style={{ width: '90px' }} />
                </Modal.Header>


                <Modal.Body>
                    Stock: {selectProduct.stock}
                    <InputGroup >
                        <Form.Control
                            placeholder="Agregar"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={e => setAdd(e.target.value)}

                        />

                    </InputGroup >
                    <InputGroup >
                        <Form.Control
                            placeholder="Sacar"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={e => setRemove(e.target.value)}
                        />

                    </InputGroup >

                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>


            </Modal>
        </form>

    )
}

export default Stock
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ApiContext } from '../../Context/ApiContext';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';


const Stock = ({ selectProduct }) => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { searchBrandImg, brandImg, addFunction, removeFunction } = useContext(ApiContext)
    const [show, setShow] = useState(false);

    const [confirmModal, setConfirmModal] = useState(false)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        searchBrandImg(selectProduct.marca)

    }, [])

    const onSubmit = (data) => {
        const { add, remove } = data

        console.log("agregar", (add));
        console.log(typeof (add));

        if (add !== '' && remove === '') {
            addFunction(selectProduct.stock, add)
            setConfirmModal(true)
        } else if (add === '' && remove !== '') {
            removeFunction(selectProduct.stock, remove)
            setConfirmModal(true)
        }
        console.log(confirmModal);
    }




    return (
        <>
            {
                confirmModal ?
                    <h1>HOLA</h1>
                    :
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            Edit
                        </Button>

                        <Modal show={show} onHide={handleClose} centered={true}>

                            <Modal.Header closeButton>
                                <Modal.Title>{selectProduct.producto}</Modal.Title>
                                <img src={brandImg} alt="brand image" style={{ width: '90px' }} />
                            </Modal.Header>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Modal.Body>
                                    Stock: {selectProduct.stock}
                                    <FloatingLabel controlId="floatingPassword" label="Add" className='agregarInput'>
                                        <Form.Control
                                            type="number"
                                            placeholder="Agregar"
                                            {...register("add")} />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingPassword" label="Remove" className='agregarInput'>
                                        <Form.Control type="number" placeholder="Agregar"  {...register("remove")} />
                                    </FloatingLabel>


                                </Modal.Body>


                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type='submit'>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>


                            </form >
                        </Modal>
                    </>
            }
        </>
    )
}

export default Stock
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { ApiContext } from '../../Context/ApiContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductContainer = () => {

    const { brandId, productId } = useParams()

    const { data } = useContext(ApiContext)

    const [selectProduct, setSelectProduct] = useState({})

    useEffect(() => {
        const searchProduct = data.find(elemento => elemento.marca === brandId && elemento.producto === productId)

        if (searchProduct !== undefined) {
            setSelectProduct(searchProduct);

            // console.log(searchProduct);

        }

        if (Object.keys(selectProduct).length !== 0) {

            console.log(selectProduct);
        }

        // console.log(typeof (selectProduct));//object
        // console.log(typeof (searchProduct));//undefined

    }, [data, selectProduct])

    return (
        <>
            <Navbar />

            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={selectProduct.imagen} />
                <Card.Body>
                    <Card.Title>{selectProduct.marca}</Card.Title>
                    <Card.Text>{selectProduct.producto}</Card.Text>
                    <Card.Text>Stock:{selectProduct.stock}</Card.Text>
                    <Card.Text>{selectProduct.precio}</Card.Text>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductContainer
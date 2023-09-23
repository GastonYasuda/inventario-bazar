import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ItemListContainer = ({ products }) => {


    return (
        <>
            <h1>TODOS LOS PRODUCTOS</h1>
            {products.map((eachProduct, i) => {
                return (
                    <Link to={`/product/${eachProduct.marca}/${eachProduct.producto}`} key={i}>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={eachProduct.imagen} />
                            <Card.Body>
                                <Card.Title>{eachProduct.marca}</Card.Title>
                                <Card.Text>{eachProduct.producto}</Card.Text>
                                <Card.Text>Stock:{eachProduct.stock}</Card.Text>
                                <Card.Text>{eachProduct.precio}</Card.Text>

                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Link>
                )
            })}
        </>

    )
}

export default ItemListContainer
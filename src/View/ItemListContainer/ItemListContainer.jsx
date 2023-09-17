import React, { Fragment, useContext } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import data from '../../data/data.json'

const ItemListContainer = () => {


    const { suma } = useContext(ApiContext)


    return (
        <>
            {data.map((eachProduct, i) => {
                return (
                    <Card style={{ width: '18rem' }} key={i}>
                        <Card.Img variant="top" src={eachProduct.Imagen} />
                        <Card.Body>
                            <Card.Title>{eachProduct.Marca}</Card.Title>
                            <Card.Text>{eachProduct.Producto}</Card.Text>
                            <Card.Text>{eachProduct.Stock}</Card.Text>
                            <Card.Text>{eachProduct.Precio}</Card.Text>

                            <Button variant="primary">Go somewhere</Button>


                        </Card.Body>
                    </Card>

                )
            })}
        </>

    )
}

export default ItemListContainer
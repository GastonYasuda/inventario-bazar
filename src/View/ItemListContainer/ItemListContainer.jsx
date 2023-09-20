import React, { useContext } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import data from '../../data/data.json'

const ItemListContainer = () => {


    const { data } = useContext(ApiContext)


    return (
        <>
            {data.map((eachProduct, i) => {
                return (
                    <Card style={{ width: '18rem' }} key={i}>
                        <Card.Img variant="top" src={eachProduct.imagen} />
                        <Card.Body>
                            <Card.Title>{eachProduct.marca}</Card.Title>
                            <Card.Text>{eachProduct.producto}</Card.Text>
                            <Card.Text>{eachProduct.stock}</Card.Text>
                            <Card.Text>{eachProduct.precio}</Card.Text>

                            <Button variant="primary">Go somewhere</Button>


                        </Card.Body>
                    </Card>

                )
            })}
        </>

    )
}

export default ItemListContainer
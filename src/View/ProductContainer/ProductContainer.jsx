import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { ApiContext } from '../../Context/ApiContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';
import ByBrand from '../ByBrand/ByBrand';

const ProductContainer = () => {

    const { brandId, productId } = useParams()

    const { data, searchBrandImg, brandImg } = useContext(ApiContext)

    const [selectProduct, setSelectProduct] = useState({})

    useEffect(() => {

        searchBrandImg(brandId)


        const searchProduct = data.find(elemento => elemento.marca === brandId && elemento.producto === productId)

        if (searchProduct !== undefined) {
            setSelectProduct(searchProduct);

        }

    }, [data, selectProduct])

    return (
        <>
            <Navbar />
            <Link to={`/byBrand/${selectProduct.marca}`} >
                <img src={brandImg} alt="brand image" style={{ width: '90px' }} />
            </Link>

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
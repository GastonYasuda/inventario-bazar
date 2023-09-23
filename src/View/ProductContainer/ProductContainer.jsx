import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { ApiContext } from '../../Context/ApiContext'

const ProductContainer = () => {

    const { productId } = useParams()

    const { data } = useContext(ApiContext)

    useEffect(() => {
        console.log(productId);

        for (const key in data) {
           
        }

    }, [])

    return (
        <>
            <Navbar />
            <div>ProductContainer</div>
        </>
    )
}

export default ProductContainer
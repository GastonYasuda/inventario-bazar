import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import Navbar from '../../Components/Navbar/Navbar';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';

const ByBrand = () => {

    const { byBrandId } = useParams()

    const { data } = useContext(ApiContext)

    const [chooseBrand, setChooseBrand] = useState([])


    useEffect(() => {

        const brandProducts = []

        for (const key in data) {
            if (data[key].marca === byBrandId) {
                brandProducts.push(data[key])
                //  console.log("Soy ", data[key]);
            }
        }
        setChooseBrand(brandProducts)

    }, [data])

    return (
        <>
            <Navbar />
            <ItemListContainer products={chooseBrand} />

        </>
    )
}

export default ByBrand
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { ApiContext } from '../../Context/ApiContext';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';

const BuscadorResult = () => {

    const { searchResultId } = useParams()
    const { data, searchBrandImg, brandImg } = useContext(ApiContext)

    const [searchOk, setSearchOk] = useState([])

    //producto buscar si la palabra conincide con el searchResultId

    useEffect(() => {

        searchBrandImg(searchResultId)


        const search = data.filter(e => e.marca.toLowerCase() === searchResultId.toLowerCase() || e.producto.toLowerCase() === searchResultId.toLowerCase())

        if (search.length !== 0) {
            // console.log(search);
            setSearchOk(search);
        }

    }, [data, searchResultId])


    return (
        <>
            <Navbar />
            <img src={brandImg} alt="brand image" style={{ width: '90px' }} />
            <ItemListContainer products={searchOk} />
        </>
    )
}

export default BuscadorResult
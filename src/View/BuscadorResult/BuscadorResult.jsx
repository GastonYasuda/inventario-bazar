import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { ApiContext } from '../../Context/ApiContext';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';

const BuscadorResult = () => {

    const { searchResultId } = useParams()
    const { data, searchBrandImg, brandImg } = useContext(ApiContext)

    const [searchOk, setSearchOk] = useState([])
    const [showLogo, setShowLogo] = useState(false)

    //producto buscar si la palabra conincide con el searchResultId

    useEffect(() => {

        searchBrandImg(searchResultId)

        const searchWord = searchResultId.toLowerCase()

        const productResultMatch = []

        for (const key in data) {
            const selectWord = data[key].producto.toLowerCase().split(' ')

            if (selectWord.includes(searchWord)) {
                setShowLogo(false)

              //  console.log("EXISTE", data[key]);
                productResultMatch.push(data[key])
            }

        }
        setSearchOk(productResultMatch)


        const search = data.filter(e => e.marca.toLowerCase() === searchResultId.toLowerCase())

        if (search.length !== 0) {
            // console.log(search);
            setShowLogo(true)
            setSearchOk(search);
        }

    }, [data, searchResultId])


    return (
        <>
            <Navbar />
            {
                showLogo && <img src={brandImg} alt="brand image" style={{ width: '90px' }} />
            }
            <ItemListContainer products={searchOk} />
        </>
    )
}

export default BuscadorResult
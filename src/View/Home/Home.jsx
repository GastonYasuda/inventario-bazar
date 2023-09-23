import React, { useContext } from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import Navbar from '../../Components/Navbar/Navbar'
import Marca from '../../Components/Marca/Marca'
import { ApiContext } from '../../Context/ApiContext'

const Home = () => {

    const { data } = useContext(ApiContext)

    return (
        <div>
            <Navbar />
            <Marca />
            <ItemListContainer products={data} />
        </div>
    )
}

export default Home
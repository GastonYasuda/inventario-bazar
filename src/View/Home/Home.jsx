import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />

            <ItemListContainer />
        </div>
    )
}

export default Home
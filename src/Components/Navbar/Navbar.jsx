import React from 'react'
import Buscador from '../Buscador/Buscador'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar d-f-row'>
            <div className="logo">
                <Link to={'/'}>
                    <img src="/assets/logo.png" alt="logo espacio bazar" />
                </Link>
            </div>
            <div className="buscador">
                <Buscador />
            </div>
            <div className="menu">
                <img src="/assets/hamburger.png" alt="menu icon" />
            </div>

        </div>
    )
}

export default Navbar
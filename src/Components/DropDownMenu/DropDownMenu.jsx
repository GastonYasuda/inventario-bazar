import React, { useContext } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ApiContext } from '../../Context/ApiContext';

const DropDownMenu = () => {

    const { marca, mayPrimera } = useContext(ApiContext)

    return (

        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src="/assets/hamburger.png" alt="menu icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>

                {
                    marca.map((element, i) => {
                        return (
                            <Dropdown.Item href={`/byBrand/${element.marca}`} key={i}>
                                {mayPrimera(element.marca)}
                            </Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>

        </Dropdown>
    )
}

export default DropDownMenu
import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Marca = () => {

    const { marca } = useContext(ApiContext)

    useEffect(() => {
        if (marca.length !== 0) {
           // console.log(marca);
        }
    }, [marca])

    const queMarca = (i) => {
      //  console.log(marca[i]);
    }

    return (
        <>
            <h1>TODOS LAS MARCAS</h1>

            {marca.map((eachProduct, i) => {
                return (
                    <div key={i}>
                        <button onClick={() => { queMarca(i) }}>
                            <Card style={{ width: '18rem' }} >
                                <Link to={`byBrand/${eachProduct.marca}`} >
                                    <Card.Img variant="top" src={eachProduct.imagen} />
                                </Link>
                            </Card>
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export default Marca
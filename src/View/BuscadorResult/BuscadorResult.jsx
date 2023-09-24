import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const BuscadorResult = () => {

    const { searchResultId } = useParams()

    useEffect(() => {
        console.log(searchResultId);
    }, [])


    return (
        <div>BuscadorResult</div>
    )
}

export default BuscadorResult
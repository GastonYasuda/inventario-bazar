import React, { createContext, useEffect, useState } from 'react'


export const ApiContext = createContext()

const ApiProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [marca, setMarca] = useState([])

    useEffect(() => {

        fetch('https://sheets.googleapis.com/v4/spreadsheets/1-RTFa9iwdSs10uRBj0_APNBjztWpzzFT4G8XG3CPFTU/values/productos!H:I?key=AIzaSyBmF3CzttYqD4KHz1VoLwCa_4qeQDwoIoU')
            .then(response => response.json())
            .then(data => {
                const titulo = data.values[0];
                const fila = data.values.slice(1);
                const resultado = [];

                fila.forEach(row => {
                    const obj = {};
                    titulo.forEach((key, index) => {
                        obj[key.toLowerCase()] = row[index];
                    });
                    resultado.push(obj);
                });
                setMarca(resultado)
                //console.log(resultado);
            })
            .catch(error => console.error('Error:', error));

        fetch('https://sheets.googleapis.com/v4/spreadsheets/1-RTFa9iwdSs10uRBj0_APNBjztWpzzFT4G8XG3CPFTU/values/productos!A:F?key=AIzaSyBmF3CzttYqD4KHz1VoLwCa_4qeQDwoIoU')
            .then(response => response.json())
            .then(data => {
                const header = data.values[0];
                const rows = data.values.slice(1);
                const result = [];

                rows.forEach(row => {
                    const obj = {};
                    header.forEach((key, index) => {
                        obj[key.toLowerCase()] = row[index];
                    });
                    result.push(obj);
                });
                setData(result)
                // console.log(result);
            })
            .catch(error => console.error('Error:', error));

    }, [])


    return (
        <ApiContext.Provider value={{ marca, data }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider
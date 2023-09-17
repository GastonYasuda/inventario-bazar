import React, { createContext } from 'react'


export const ApiContext = createContext()

const ApiProvider = ({ children }) => {

    const suma = (num1, num2) => {
        return (num1 + num2)
    }


    return (
        <ApiContext.Provider value={{ suma }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider
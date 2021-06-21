import React, { useState, useCallback } from 'react'
import ContadorHijo from './ContadorHijo'

const Contador = () => {

    const [contador, setContador] = useState(0)
    const [input, setinput] = useState("")

    // const sumar = () => {
    //     setContador(contador + 1)
    // }

    const sumar = useCallback(
        () => {
            setContador(contador + 1)
        },
        [contador],
    );


    // const restar = () => {
    //     setContador(contador - 1)
    // }

    const restar = useCallback(
        () => {
            setContador(contador - 1)
        },
        [contador],
    )

    const handleInput = (e) => {
        setinput(e.target.value)
    }

    return (
        <div>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar} type="">+</button>
                <button onClick={restar} type="">-</button>
            </nav>
            <h3>{contador}</h3>
            <input type="text" name="" onChange={handleInput} value={input} />
            <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
        </div>
    )
}

export default Contador

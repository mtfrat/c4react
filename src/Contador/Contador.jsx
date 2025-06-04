import React from 'react'
import { useState } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(1);

  //Funciones auxiliares

  const incrementar = () => {
    setContador (contador + 1);
  }

  const decrementar = () => {
    setContador (contador - 1);
  }

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <p>{contador}</p>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default Contador
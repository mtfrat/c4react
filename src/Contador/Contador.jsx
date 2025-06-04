import React from 'react'
import { useState } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(1);

  //Funciones auxiliares

  let stock = 10;

  const incrementar = () => {
    if (contador<10){
      setContador (contador + 1);
    }
  }

  const decrementar = () => {
    if (contador>0){
          setContador (contador - 1);
    }
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
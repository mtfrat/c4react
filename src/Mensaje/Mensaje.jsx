import React, { useState } from 'react'

const Mensaje = () => {

    const [mostrar, setMostrar] = useState(false);

    const estadoMensaje = () => {
        setMostrar (!mostrar);
    }

  return (
    <div>
        <button onClick={estadoMensaje}> Mostrar mensaje </button>
        {
            mostrar && <h2> Aguante Boca </h2>
        }
    </div>
  )
}

export default Mensaje
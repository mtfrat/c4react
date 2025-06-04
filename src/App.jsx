import React from 'react'
import EjemploComponente from './components/EjemploComponente/EjemploComponente'
import Contador from './Contador/Contador'


//Components
//Reutilizamos codigo
//Favorece la separacion de responsabilidades
//Es mas facil de entender
//Mejora el rendimiento de la app

const App = () => {
  return (
    <>
      {/* <EjemploComponente/> */}
      <Contador/>
    </>
  )
}

export default App

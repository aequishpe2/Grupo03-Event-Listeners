import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ClickExample from './components/ClickExample';
import InputExample from './components/InputExample';
import MouseOverExample from './components/MouseOverExample';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Eventos y Listeners en React</h1>
        <h2>Grupo 03</h2>
        <h3>Cadena Diego</h3>
        <h3>Quishpe Anthony</h3>
        <h3>Tipantiza Nayeli</h3>

        {/* Componente ClickExample */}
        <ClickExample />

        {/* Componente InputExample */}
        <InputExample />

        {/* Nuevo componente MouseOverExample */}
        <MouseOverExample />
      </div>

    </>
  )
}

export default App

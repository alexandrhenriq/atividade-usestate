import  { useState } from 'react'

export function App() {
  const [numero, setNumero] = useState(100)
  const [mostrarEsconder, setMostrarEsconder] = useState(false)
  
  function handleAcrescentar() {
    setNumero(numero + 100)
  }

  function handleMostrarEsconderParagrafo() {
    mostrarEsconder ? setMostrarEsconder(false) : setMostrarEsconder(true)
  }
  
  return (
    <div>
      <h1>Atividade useState</h1>
      <div>
        <h2>Numero: {numero}</h2>

        <button onClick={handleAcrescentar}>Acrescentar 100</button>
      </div>
      <div>
        <h2>O paragrafo sumidouro</h2>

        {mostrarEsconder ? <p>Este paragrafo sumidouro</p> : ""}

        <button onClick={handleMostrarEsconderParagrafo}>{mostrarEsconder === true ? "Esconder" : "Mostrar"}</button>
      </div>
    </div>
  )
}
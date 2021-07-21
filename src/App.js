import './index.css'
import MyInput from './CompsNStyles/MyInput'
import Resultado from './CompsNStyles/Resultado'
import { useState } from 'react'

function App() {
  let [numero1, setNumero1] = useState(0)
  let [numero2, setNumero2] = useState(0)
  let [resultado, setResultado] = useState(0)

  function alteraUm(value) {
    setNumero1(parseInt(value))
    let aleat = Math.floor(Math.random() * 4)
    setResultado(numero1 + numero2 + aleat)
  }
  function alteraDois(value) {
    let aleat = Math.floor(Math.random() * 4)
    setNumero2(parseInt(value))
    setResultado(numero1 + numero2 + aleat)
  }

  return (
    <div className="App">
      <div className="livia_container"></div>
      <MyInput
        placeholder="Digite o primeiro número"
        funcaodopai={alteraUm}
      ></MyInput>
      <MyInput
        placeholder="Digite o segundo número"
        funcaodopai={alteraDois}
      ></MyInput>
      <Resultado resultado={resultado}></Resultado>
    </div>
  )
}

export default App

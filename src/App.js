import './index.css'
import MyInput from './CompsNStyles/MyInput'
import Resultado from './CompsNStyles/Resultado'
import { useEffect, useState } from 'react'

function App() {
  let [numero1, setNumero1] = useState(0)
  let [numero2, setNumero2] = useState(0)
  let [resultado, setResultado] = useState(0)

  useEffect(() => {
    console.log(1)
  }, [resultado])

  function alteraUm(valor) {
    setNumero1((numero1 = parseInt(valor))) //Isso acontece na hora
    let aleat = Math.floor(Math.random() * 4)
    setResultado(numero1 + numero2)
    console.log('numero 1 é ' + numero1)
    console.log('numero 2 é ' + numero2)
    console.log('resultado é ' + resultado)
  }
  function alteraDois(valor) {
    setNumero2((numero2 = parseInt(valor)))
    let aleat = Math.floor(Math.random() * 4)
    setResultado(numero1 + numero2)
    console.log('numero 1 é ' + numero1)
    console.log('numero 2 é ' + numero2)
    console.log('resultado é ' + resultado)
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

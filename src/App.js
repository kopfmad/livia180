import './index.css'
import MyInput from './CompsNStyles/MyInput'
import Resultado from './CompsNStyles/Resultado'

function App() {
  return (
    <div className="App">
      <div className="livia_container"></div>
      <MyInput placeholder="Digite o primeiro número"></MyInput>
      <MyInput placeholder="Digite o segundo número"></MyInput>
      <Resultado></Resultado>
    </div>
  )
}

export default App

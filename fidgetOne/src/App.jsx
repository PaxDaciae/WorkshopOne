import { useState } from 'react'
import Cube from "../Components/ClickCube"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const containerStyle = {
    margin: "auto",
  }

  function clickAddCounter(){
    setCount(prevCount => (prevCount + 1)%4)
  }

  return (
    <div style = {containerStyle}>
      <Cube count = {count} handleClick = {clickAddCounter}/>
    </div>
  )
}

export default App

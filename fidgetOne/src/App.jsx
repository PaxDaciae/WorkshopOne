import { useState } from 'react'
import Cube from "../Components/ClickCube"
import './App.css'

function App() {
  // APP-LEVEL STATE FOR CUBE COMPONENT //
  const [count, setCount] = useState(0)


  // STYLE FOR CUBE COMPONENT HOLDER //
  const containerStyle = {
    margin: "auto",
  }

  // THIS FUNCTION SHIFTS CUBE STATE FROM 1 TO 3//
  function clickAddCounter(){
    setCount(prevCount => (prevCount)%3 + 1)
  }

  return (
    <div style = {containerStyle}>
      <Cube count = {count} handleClick = {clickAddCounter}/>
    </div>
  )
}

export default App

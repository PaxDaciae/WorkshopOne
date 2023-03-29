import { useState } from 'react'
import Cube from "../Components/ClickCube"
import Circle from "../Components/ClickCircle"
import './App.css'

function App() {
  // THIS ARRAY SHOULD HOLD SEVERAL CIRCLES EACH WITH THEIR OWN STATE// 
  
  const [circleData, setCircleData]= useState([
    {
      id: 1,
      count: 0
    },
    {
      id: 2,
      count: 0
    },
    {
      id: 3,
      count: 0
    },
  ] )

  console.log(circleData)
  const circleArray = circleData.map(circle => <Circle key = {circle.id} id = {circle.id} count = {circle.count} handleClick = {increaseCircleCount}/>)
  // APP-LEVEL STATE FOR CUBE COMPONENT //
  const [count, setCount] = useState(0)

  function increaseCircleCount(x){
    // THIS STEP USEFUL TO DETERMINE TYPES OF DATA I AM WORKING WITH //
    for (let circ in circleData){
      console.log("CIRCLES", circ)
      console.log("CIRC[CIRC]", circleData[circ])
      console.log("CIRC[CIRC][ID]", circleData[circ].id)
    }
    // const target = circleData.filter(circle => circle[circle].id === x)
    // console.log(circleData, "TRG", target)
    // console.log(typeof(circleData[1]), circleData[circle])
  }
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
      {circleArray}
    </div>
  )
}

export default App

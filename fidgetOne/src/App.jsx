import { useState } from 'react'
import Cube from "../Components/ClickCube"
import Circle from "../Components/ClickCircle"
import './App.css'

function App() {
  // THIS ARRAY SHOULD HOLD SEVERAL CIRCLES EACH WITH THEIR OWN STATE// 
  
  const [circleData, setCircleData]= useState(
    [
    { id: 1, count: 10 },
    { id: 2, count: 10 },
    { id: 3, count: 10 },
    ] 
  )

  const circleArray = circleData.map(circle => <Circle key = {circle.id} id = {circle.id} count = {circle.count} handleClick = {increaseCircleCount}/>)

  // APP-LEVEL STATE FOR CUBE COMPONENT //
  const [count, setCount] = useState(0)

  function increaseCircleCount(x){

                          // THIS STEP USEFUL TO DETERMINE TYPES OF DATA I AM WORKING WITH //
                          /* function determineCircleData(){
                            for (let circ in circleData){
                              console.log("CIRCLES", circ , typeof(circ))  // STRING
                              console.log("CIRC[CIRC]", circleData[circ], typeof(circleData[circ]))  // OBJECT
                              console.log("CIRC[CIRC][ID]", circleData[circ].id, typeof(circleData[circ].id))  // NUMBER
                            }
                          }
                          determineCircleData() */

    const target = circleData.filter(circleData => (circleData.id === x))

    function testy(){
      const oldCount = target[0].count
      const targetId = target[0].id
      console.log("DEBUG", target[0].id)
      // console.log("COUNTVAL", oldCount)
      // console.log("NWTARG", ...target)

    // SET NEW STATE AS SUCH: //
    setCircleData(prevData => 
      // AN ARRAY MADE UP OF //
      [
        // THE PREVIOUS STATE OBJECT, SPREAD //
        ...prevData,
        // WITH THE OBJECT IN THE POSITION OF THE TARGET ID - 1  //
        // (TO ACCOUNT FOR INITIAL POS IN ARRAY BEING 0 AND FIRST ID BEING 1) //
        // HAVING ITS COUNT INCREASED BY 1 //
        prevData[targetId-1].count = oldCount + 1
      ]
    )

    }
    testy()
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

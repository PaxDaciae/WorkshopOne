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

  console.log(circleData)
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
    // console.log("TARG", typeof(target), target[0], target[0].id, "CRCD", circleData[target[0].id].id) // OK //
    // console.log("CDATA", circleData[target], "X", x, )
    // console.log("TRG", target, typeof(target), target[0].id, "FINA", circleData[target[0].id-1])
    function testy(){
      const oldCount = target[0].count
      const targetId = target[0].id
      console.log("DEBUG", target[0].id)
      // console.log("COUNTVAL", oldCount)
      // console.log("NWTARG", ...target)

    // setCircleData(circleData => 
    //   [ ...circleData.filter(circleData => (circleData.id != target[0].id)),
    //     circleData[target[0].id] = {id: target[0].id, count: oldCount + 1},
      
    //   ])

    // SET NEW STATE AS SUCH: //
    setCircleData(prevData => 
      // FITLER THROUGH ALL OBJECTS IN CIRCLEDATA ARRAY //
      [ ...circleData.filter(circleData =>
        // ADD THE OBJECTS FOR WHICH THE ID IS NOT EQUAL TO THE TARGET (THE ID OF THE CLICKED ELEMENT) //
         (circleData.id != targetId)),
          // THEN ADD AN ELEMENT WITH THE ID OF THE CLICKED TARGET WITH THE COUNT OF THE TARGET PLUS 1 //
        circleData[targetId] = {id: targetId, count: oldCount + 1}
      ]
    )
   
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
    //   [
    //     ...circleData.filter(
    //       (circleData.id === targetId) ? {id: targetId, count: oldCount + 1} : circleData
    //     )
    //   ])
    // circleData[target[0].id].count = oldCount + 1
    // setCircleData(circleData => circleData[target[0].id].count = oldCount + 1)
      // setCircleData(circleData[target[0].id]= {id: target[0].id, count: oldCount + 1})
    
    /* DEBUG DATA: 
    `ObjectKeys: ${Object.keys(circleData[circleData[target[0].id-1].id])}` RETURNS THE KEYS OF THE OBJECT
    `ID: ${circleData[circleData[circleData[target[0].id-1].id-1].id-1].id}` RETURNS THE ID OF THE CLICKED CIRCLE 

      (circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1].id-1]).count  RETURNS THE COUNT OF THE TARGETED CIRCLE
      (circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1].id-1]).id  RETURNS THE ID OF THE TARGETED CIRCLE
      */
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


        
      
      // = 
      
      // {
      //   id: ((circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1].id-1]).id), 
      //   count: (circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1].id-1]).count +1, marker: "MARKED"
      // },
      
      // `${ circleData[circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1].id-1].id].id}`,
      // `${ circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1].id-1].id}`,
      // `${ circleData[circleData[circleData[target[0].id-1].id-1].id-1].id}`,
      // `AIA${  circleData[circleData[target[0].id-1].id-1].id}, ${circleData[circleData[target[0].id-1].id].count}`
      // `${ circleData[target[0].id].id}`
      // `${ Object.keys(circleData[target[0].id-1])}`

      // `PRIMUL ${(circleData.id != target[0].id)} AL_DOILEA ${circleData[target[0].id]} ID ${circleData[target[0].id-1].id} COUNT ${circleData[target[0].id-1].count} + 1`


      /*

       circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1].id].count 
      = 
      {(circleData[circleData[circleData[circleData[target[0].id-1].id-1].id-1]].id.count)+1}


    */
    // `${Object.keys(circleData[circleData[target[0].id-1].id])}`, `${circleData[circleData[target[0].id-1].id].id}`, 
    // console.log("TESTY")
    
            // circleData[target[0].id]: {count: count+1}

    
    // console.log(typeof(circleData[1]), circleData[circle])
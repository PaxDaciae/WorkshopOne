import React from "react"
import Cuberow from "../Components/CubeRow"

export default function Cubescreen(){
    const styles = {
        row: {
            overflowY: "hidden",
            // backgroundColor: "red",
            maxHeight: "98vh"
        }
    }
    let rowsNumber = []

    for(let i = 0; i <= ((screen.height-90)/ 11); i++){
        rowsNumber.push(i)
    }

    let cubeScreen = rowsNumber.map(row => <Cuberow />)
    return(
        <div style = {styles.row}> 
            {cubeScreen}
        </div>
    )
}

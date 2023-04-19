import React from "react"
import BackgroundCube from "./BackgroundCube"

export default function CubeCanvas(){
    // const width = screen.width
    // const height = screen.height
    const styles = {
        row: {
            display: "flex",
            flexShrink: "0"
        }
    }
    let cubeNumber = []

    const side = 10
    const ratio = (screen.width - (screen.width%(side+1)))/(side+1)
                            //NEED TO UPDATE i <= value to take into account radio and side to fill all screen without modifying square size 

    for(let i = 0; i <= ratio ; i++){
        cubeNumber.push(i)
    }

    let cubeRow = cubeNumber.map(i => <BackgroundCube key = {i} side ={side}/>)
    return(
        <div style = {styles.row}> 
            {cubeRow}
        </div>
    )
}
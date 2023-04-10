import React from "react"
import BackgroundCube from "../Components/cubeBackgroundElement"

export default function CubeCanvas(){
    // const width = screen.width
    // const height = screen.height
    const styles = {
        row: {
            display: "flex"
        }
    }
    let cubeNumber = []

    for(let i = 0; i <= (screen.width / 10); i++){
        cubeNumber.push("A")
    }

    let cubeRow = cubeNumber.map(cube => <BackgroundCube />)
    return(
        <div style = {styles.row}> 
            {cubeRow}
        </div>
    )
}
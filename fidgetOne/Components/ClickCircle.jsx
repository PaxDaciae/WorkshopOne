import React from 'react'
import {useState} from 'react'

export default function Circle(props){
    
    const styles = {
        smallCircle: {
            height: "100px",
            width: "100px",
            backgroundColor: 'red',
            borderRadius: "50%"
        },
        largeCircle: {
            height: "200px",
            width: "200px",
            backgroundColor: 'green',
            borderRadius: "50%"
        },
        circleDisplay: {
            marginLeft: "45px",
            paddingTop: "60px"
        }
    }
    let circleNature = props.count === 3 ? 'styles.largeCircle' : 'styles.smallCircle'
    // console.log("STL", circleNature)
    return(
        <div style = {props.count >= 0 ? styles.largeCircle : styles.smallCircle} onClick = {() => props.handleClick(props.id)}>
            {/* {console.log(`AICI:`, styles.CircleNature)} */}
            <div style = {styles.circleDisplay} className = "circle--display">
                <span style = {styles.circleDisplay}>{props.id}</span>
                <br></br>
                <span style = {styles.circleDisplay}>{props.count}</span>
            </div>
            
            {/* <br></br>
            {circleNature}
            <br></br>
            {`styles.${circleNature}`} */}
        </div>
    )
}

// style = {circleNature}

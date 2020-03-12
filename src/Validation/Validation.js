import React, { Component } from "react"

const Validation = props => {
    // if(props.inputLength < 5)
    //     return <div>Text too short</div>
    // else if (props.inputLength > 10)
    //     return <div>Text too long</div>
    // else
    //     return <div>Validated!</div>
    return (
        <div>
            {props.inputLength < 5 ? (
                <p>Text too short</p>
            ) : (
                <p>Text too long</p>
            )}
        </div>
    )
}

export default Validation

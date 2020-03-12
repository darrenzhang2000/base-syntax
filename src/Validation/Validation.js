import React, { Component } from 'react'

const Validation = (props) =>{
    if(props.inputLength < 5)
        return <div>Text too short</div>
    else if (props.inputLength > 10)
        return <div>Text too long</div>
    else
        return <div>Validated!</div>
}

export default Validation
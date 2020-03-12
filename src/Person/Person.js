import React from 'react'
// import './Person.css'
import styled from 'styled-components'
const StyledDiv = styled.div`
    border: 1px solid #eee;
    width: 60%;
    margin: 5px auto;
    box-shadow: 0 2px 3px #ccc;
    '@media (min-width: 500px)':{
        width:'450px'
    }
`

const Person = ( props)=>{
    const rnd = Math.random()
    if (rnd > 0.7){
        throw new Error('Something went wrong')
    }
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name}</p>
        </StyledDiv>
    )
}

export default Person
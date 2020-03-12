import React from "react"

const Char = props => {
    return (
        <ul
            style={{
                display: "inline-block",
                padding: "16px",
                textAlign: "center",
                margin: "16px",
                border: "1px solid black",
                listStyleType: "none"
            }}
            onClick={props.clicked}
        >
            {/* <li>Coconut Meat</li>
            <li>Cranberries</li>
            <li>Custard-Apple</li>
            <li>Date Fruit</li>
            <li>Durian</li> */}
            <li>{props.item}</li>
            
        </ul>
    )
}

export default Char

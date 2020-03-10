import React, { Component } from "react"
import "./UserInput.css"

class UserInput extends Component {
    state = {
        inputElement: this.props.inputElement,
    }

    render() {
        return (
            <div className='UserInput'>
                <input type="text" value={this.state.inputElement} onChange={this.props.handleChange} />
            </div>
        )
    }
}

export default UserInput

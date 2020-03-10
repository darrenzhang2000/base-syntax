import React, { Component } from "react"

class UserInput extends Component {
    state = {
        inputElement: this.props.inputElement
    }
    handleChange = event => {
        console.log("apricots", event.target.value)
        this.setState({ inputElement: event.target.value })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputElement} onChange={this.handleChange} />
            </div>
        )
    }
}

export default UserInput

import React, { Component } from "react"
import "./App.css"
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
    state = {
        user: "Blackcurrant",
        age: 20
    }

    handleOnClick = () => {
        console.log("blueberries")
        this.setState({ age: this.state.age - 1 })
        console.log("breadfruit", this.state.age)
    }

    handleChange = event => {
        console.log("apricots", event.target.value)
        this.setState({ inputElement: event.target.value })
    }

    componentDidMount = () => {
        this.setState({ user: "Blackcurrant", age: 20 })
    }
    render() {
        return (
            <div className="App">
                <p>Acerola</p>
                <UserInput inputElement="apple" onChange={this.handleChange} />
                <UserOutput user={this.state.user} />
                <button onClick={this.handleOnClick}>{this.state.age}</button>
            </div>
        )
    }
}

export default App

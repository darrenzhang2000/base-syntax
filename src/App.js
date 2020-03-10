import React, { Component } from "react"
import "./App.css"
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"
import { render } from "@testing-library/react"

class App extends Component {
    state = {
        user: "Blackcurrant",
        age: 20
    }

    handleOnClick = () => {
        console.log('blueberries')
        this.setState({ age: this.state.age - 1 })
        console.log('breadfruit', this.state.age)
    }

    componentDidMount = () => {
        this.setState({ user: "Blackcurrant", age: 20 })
    }
    render() {
        return (
            <div className="App">
                <p>Acerola</p>
                <UserInput inputElement="apple" />
                <UserOutput user={this.state.user} />
                <button onClick={this.handleOnClick}>{this.state.age}</button>
            </div>
        )
    }
}

export default App

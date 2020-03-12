import React, { Component } from "react"
import "./App.css"

import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
    state = {
        username: "supermax",
        displayUsers: true,
        persons: [
            {
                name: "Jessica",
                age: 19
            },
            {
                name: "Ian",
                age: 10
            },
            {
                name: "Nick",
                age: 12
            }
        ]
    }

    usernameChangedHandler = event => {
        this.setState({ username: event.target.value })
    }

    handleOnClick = () => {
        this.setState({ displayUsers: !this.state.displayUsers })
    }

    render() {
        // let display = this.state.displayUsers ? (
        //     <div>
        //         <UserOutput userName={this.state.username} />
        //         <UserOutput userName={this.state.username} />
        //         <UserOutput userName="Max" />
        //     </div>
        // ) : (
        //     <div>Users Hidden</div>
        // )
        return (
            <div className="App">
                <h3>People List</h3>
                {this.state.persons.map(person => 
                    <div className="person">
                        <p>Name: {person.name}</p>
                        <p>Age: {person.age}</p>
                    </div>
                )}
                <UserInput
                    changed={this.usernameChangedHandler}
                    currentName={this.state.username}
                />
                <br />
                {/* {display} */}
                <button onClick={this.handleOnClick}>Swap Name</button>
                {this.state.displayUsers ? (
                    <div style={{ textAlign: "center" }}>
                        <UserOutput userName={this.state.username} />
                        <UserOutput userName={this.state.username} />
                        <UserOutput userName="Max" />{" "}
                    </div>
                ) : null}
            </div>
        )
    }
}

export default App

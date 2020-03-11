import React, { Component } from "react"
import "./App.css"

import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
    state = {
        username: "supermax",
        displayUsers: true
    }

    usernameChangedHandler = event => {
        this.setState({ username: event.target.value })
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
                <UserInput
                    changed={this.usernameChangedHandler}
                    currentName={this.state.username}
                />
                {/* {display} */}

                {this.state.displayUsers ? (
                    <div>
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

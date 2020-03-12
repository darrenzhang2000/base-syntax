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
                name: "cherries",
                id: 1
            },
            {
                name: "Clementine",
                id: 2
            },
            {
                name: "Coconut Meat",
                id: 3
            }
        ],
        id: 4
    }

    usernameChangedHandler = event => {
        this.setState({ username: event.target.value })
    }

    handleOnClick = () => {
        this.setState({ displayUsers: !this.state.displayUsers })
    }

    addFood = async () => {
        this.setState({ id: this.state.id + 1 })
        let newPeople = await [
            ...this.state.persons,
            { name: "Carambola", age: 1, id: this.state.id }
        ]
        await this.setState({ persons: newPeople })
        await console.log(this.state.persons[0].name)
    }

    rotateName = () => {
        let newPeople = this.state.persons.slice(1)
        console.log("cherimoya", newPeople)
        if (this.state.persons.length) newPeople.push(this.state.persons[0])
        this.setState({ people: newPeople })
        console.log(this.state.persons[0].name)
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
        console.log("rendered")
        return (
            <div className="App">
                <h3>People List</h3>
                <button onClick={this.addFood}>Add food</button>
                <button onClick={this.rotateName}>Rotate Name</button>
                <p>{this.state.persons[0].name}</p>
                {this.state.persons.map(person => (
                    <div className="person" key={person.id}>
                        <p>Name: {person.name}</p>
                    </div>
                ))}
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

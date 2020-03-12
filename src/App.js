import React, { Component } from "react"
import "./App.css"

import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"
import Validation from "./Validation/Validation"
import Char from "./Char/Char"
import Person from "./Person/Person"
import styled from "styled-components"

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
        id: 4,
        inputLength: null,
        inputValue: "Elderberries"
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
        this.setState({ persons: newPeople })
        console.log(this.state.persons[0].name)
    }

    inputChange = event => {
        console.log(event.target.value.length)
        this.setState({ inputLength: event.target.value.length })
        this.setState({ inputValue: event.target.value })
    }

    onCharClick = index => {
        const text = this.state.inputValue.split("")
        text.splice(index, 1)
        const updatedText = text.join("")
        this.setState({ inputValue: updatedText })
    }

    render() {
        let charList = this.state.inputValue
            .split("")
            .map((c, index) => (
                <Char
                    item={c}
                    clicked={() => this.onCharClick(index)}
                    key={index}
                />
            ))

        let style = {
            textAlign: "center",
            backgroundColor: "green",
            color: "white",
            ":hover": { backgroundColor: "lightgreen", color: "black" }
        }
        let StyledButton = styled.button`
            text-align: center;
            background-color: $(props => props.alt ? 'red' : 'green');
            color: white;
            border: 1px solid blue;
            &:hover: {
                background-color: "lightgreen";
                color: black;
            }
        `

        let person = this.state.displayUsers ? (
            <div style={{ textAlign: "center" }}>
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Max" />{" "}
            </div>
        ) : (
            (style.backgroundColor = "red")
        )
        style[":hover"] = {
            backgroundColor: "pink",
            color: "black"
        }

        let classes = []
        if (this.state.persons.length > 4) classes.push("red")
        if (this.state.persons.length > 5) classes.push("bold")
        return (
            <div className="App">
                <h3>People List</h3>
                <Person name="figs" />
                <Person name="gooseberries" />

                <StyledButton alt={this.state.displayUsers}>
                    <p className={classes.join(" ")}>Feijoa</p>
                </StyledButton>
                <br />
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
                <button onClick={this.handleOnClick} style={style}>
                    Swap Name
                </button>

                {person}
                <UserInput changed={this.inputChange} />
                <p>Length of Input: {this.state.inputLength}</p>
                <Validation inputLength={this.state.inputLength} />
                {charList}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default App

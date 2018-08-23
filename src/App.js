import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
//import OtherPerson from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "heeralaalji", age: 55 }
    ]
  }

  clickButtonHandler = (newValue, newAge) => {
    console.log('clicked!');
    this.setState({
      persons: [
        { name: newValue, age: newAge },
        { name: "heeralaalji", age: 55 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.clickButtonHandler.bind(this, 'heeralalji', 12)}> Name </button>
        <Person name="mayank" age="25"> Accessing the children property</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.clickButtonHandler.bind(this, "whatever", 33)} />

        {/* <OtherPerson /> */}
      </div>
    );
  }
}

export default App;

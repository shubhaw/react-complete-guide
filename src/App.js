import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shubhaw', age: '27' },
      { name: 'Dhinchak', age: '26' }
    ]
  };

  switchPersonHandler = () => {
    this.setState({
      persons: [
        { name: 'Dhinchak', age: '26' },
        { name: 'Shubhaw', age: '27' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi React!</h1>
        <button onClick={this.switchPersonHandler}>Switch Persons</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am not cute!</Person>
      </div>
    );
  }
}

export default App;

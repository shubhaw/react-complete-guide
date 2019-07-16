import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shubhaw', age: '27' },
      { name: 'Dhinchak', age: '26' }
    ],
    showPersons: false
  };

  switchPersonHandler = (newName1, newName2) => {
    this.setState({
      persons: [
        { name: newName1, age: 26 },
        { name: newName2, age: 27 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Shubhaw', age: 27 },
        { name: event.target.value, age: 26 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }


  render() {

    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return (
                <Person name={person.name} age={person.age} />
              )
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi React!</h1>
        <button style={buttonStyle}
          onClick={() => this.switchPersonHandler('Dhinchak!', 'Shubhaw!')}>
            Switch Persons
        </button>
        <br />
        <button className='ToggleButton' onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

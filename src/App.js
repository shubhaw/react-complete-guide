import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Shubhaw', age: '27' },
      { id: 'pqr', name: 'Dhinchak', age: '26' }
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; //mutable, the reference of the state.persons array is assigned to persons.
    // const persons = this.state.persons.slice(); //immutable but old. a new copy of state.persons array is assigned to persons.
    const persons = [...this.state.persons]; //immutable and currently being extensively used.

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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

    const toggleButtonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid grey',
      borderRadius: '10px',
      padding: '8px',
      curson: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return (
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  change={(event) => this.nameChangeHandler(event, person.id)}
                />
              )
            })
          }
        </div>
      );

      toggleButtonStyle.backgroundColor = 'red';
      
    }

    return (
      <div className="App">
        <h1>Hi React!</h1>
        <button style={buttonStyle}
          onClick={() => this.switchPersonHandler('Dhinchak!', 'Shubhaw!')}>
            Switch Persons
        </button>
        <br />
        <button 
          className='ToggleButton'
          onClick={this.togglePersonsHandler}
          style={toggleButtonStyle}>
            Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

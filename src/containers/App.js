import React, { Component } from 'react';
import styleClasses from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Radium, {StyleRoot} from 'radium';


class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Shubhaw', age: '26' },
      { id: 'pqr', name: 'Shreya', age: '20' },
      { id: 'xyz', name: 'Srijan', age: 10 }
    ],
    showPersons: false
  };

  switchPersonHandler = (newName1, newName2) => {
    this.setState({
      persons: [
        { name: newName1, age: 26 },
        { name: newName2, age: 27 },
        { name: 'Srijan', age: 9 }
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
    const toggleButtonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid grey',
      borderRadius: '10px',
      padding: '8px',
      cursor: 'pointer',
      margin: '15px auto',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'grey'
      }
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
      toggleButtonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'grey'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push(styleClasses.red);
    }

    if(this.state.persons.length <= 1) {
      classes.push(styleClasses.bold);
    }

    return (
      <StyleRoot>
        <div className={styleClasses.App}>
          <h1>Hi React!</h1>
          <p className={classes.join(' ')}>This really works!</p>
          <button className={styleClasses.switchPersonsButton}
            onClick={() => this.switchPersonHandler('Dhinchak!', 'Shubhaw!')}>
              Switch Persons
          </button>
          <br />
          <button
            onClick={this.togglePersonsHandler}
            style={toggleButtonStyle}>
              Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

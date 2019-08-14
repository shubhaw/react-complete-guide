import React, { Component } from 'react';
import styleClasses from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Radium from 'radium';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'abc', name: 'Shubhaw', age: '26' },
      { id: 'pqr', name: 'Shreya', age: '20' },
      { id: 'xyz', name: 'Srijan', age: 10 }
    ],
    showPersons: false
  };


  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }


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
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = 
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;
    }



    return (
        <div className={styleClasses.App}>
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            switchPersonClicked={this.switchPersonHandler}
            togglePersonsClicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons} />
          
          {persons}
        </div>
    );
  }
}

export default Radium(App);

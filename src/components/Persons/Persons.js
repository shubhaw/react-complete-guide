import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate', nextProps);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps);
    return { message: 'Snapshot!!!' };
  }

  // This also works, but we will be using the one with parameters
  // componentDidUpdate() {
  //   console.log('[Persons.js] componentDidUpdate');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot); // this snapshot is the one which is returned by getSnapshotBeforeUpdate method!
  }

  render() {
    console.log('[Persons.js] rendering . . .');
  
    return this.props.persons.map( (person, index) => {
      return (
        <Person 
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons;
import React from 'react';
import Radium from 'radium';
import styleClasses from './Cockpit.module.css';

const cockpit = (props) => {
    const classes = [];

    if(props.persons.length <= 2) {
      classes.push(styleClasses.red);
    }

    if(props.persons.length <= 1) {
      classes.push(styleClasses.bold);
    }


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
    };
  
    if(props.showPersons) {
        toggleButtonStyle.backgroundColor = 'red';
        toggleButtonStyle[':hover'] = {
            backgroundColor: 'salmon',
            color: 'grey'
        }
    }

    return (
        <div>
            <h1>Hi React!</h1>
            <p className={classes.join(' ')}>This really works!</p>
            <button className={styleClasses.switchPersonsButton}
                onClick={() => props.switchPersonClicked('Dhinchak!', 'Shubhaw!')}>
                Switch Persons
            </button>
            <br />
            <button
                onClick={props.togglePersonsClicked}
                style={toggleButtonStyle}>
                Toggle Persons
            </button>
        </div>
    );
}

export default Radium(cockpit);
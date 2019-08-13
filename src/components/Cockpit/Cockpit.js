import React, { useEffect } from 'react';
// import Radium from 'radium';
import styleClasses from './Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved!');
        }, 1000);
    }, [props.persons]);

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
            <h1>{props.title}</h1>
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

// export default Radium(Cockpit);
export default Cockpit;
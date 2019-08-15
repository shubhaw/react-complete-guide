import React, { useEffect, useRef } from 'react';
// import Radium from 'radium';
import styleClasses from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            console.log('[Cockpit.js] useEffect: calling click on "Toggle Persons" button after 1 sec')
            toggleButtonRef.current.click();    
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
                ref={toggleButtonRef}
                onClick={props.togglePersonsClicked}
                style={toggleButtonStyle}>
                Toggle Persons
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    );
}

// export default Radium(Cockpit);
export default Cockpit;
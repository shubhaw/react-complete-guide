import React from 'react';
import Radium from 'radium';
import styleClasses from './Person.module.css';

const person = (props) => {
    return (
        <div className={styleClasses.Person}>
            <p onClick={props.click}>I'm {props.name} and am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default Radium(person);
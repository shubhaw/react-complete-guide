import React, { Component } from 'react';
import Radium from 'radium';
import styleClasses from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering . . .');
        return (
            <div className={styleClasses.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
    }
    
};

export default Radium(Person);
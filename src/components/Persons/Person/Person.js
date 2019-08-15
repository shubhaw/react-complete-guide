import React, { Component } from 'react';
import styleClasses from './Person.module.css';
import Aux from '../../../hoc/Auxiliary.js';
import withClass from "../../../hoc/WithClass";
import { PropTypes } from "prop-types";
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering . . .');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {
                        (context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={this.inputElementRef}
                    onChange={this.props.change}
                    value={this.props.name} />

            </Aux>
        );
    }

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, styleClasses.Person);
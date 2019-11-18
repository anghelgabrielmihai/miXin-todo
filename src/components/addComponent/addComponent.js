import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'
import './addComponent.css';
export class AddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.updateState(event.target[0].value);
        event.target[0].value = '';
    }

    render () {
        if (this.props.showAddComponent) {
            return (
                <form className="add-wrapper flex" onSubmit={this.handleOnSubmit}>
                    <input type="text" />
                    <ButtonComponent name="Submit" />
                </form>
            )
        } else {
            return null;
        }
    }
}

import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'
import './addComponent.css';
export class AddComponent extends Component {
    handleOnSubmit = (event) => {
        event.preventDefault();
        if (event.target[0].value === '') {
            alert('Please add a title.')
        } else {
            this.props.updateState(event.target[0].value);
            event.target.reset();
        }
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

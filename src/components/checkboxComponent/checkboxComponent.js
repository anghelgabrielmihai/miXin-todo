import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'

export class CheckboxComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleOnDelete = (event) => {
        event.preventDefault();
        this.props.deleteState(this.props.id);
    }

    handleDone = () => {
        this.props.handleDone(this.props.id)
    }

    render () {
        return (
            <div className="flex">
                <input type="checkbox" 
                    onChange={this.handleDone}
                />
                <ButtonComponent methodToCall={this.handleOnDelete} name="Delete" />
            </div>
        )
    }
};
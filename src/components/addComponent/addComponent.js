import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'
import './addComponent.css';
export class AddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        if (this.props.showAddComponent) {
            return (
                <div className="add-wrapper flex">
                    <input type="text" />
                    <ButtonComponent name="Submit" />
                </div>
            )
        } else {
            return null;
        }

    }
}

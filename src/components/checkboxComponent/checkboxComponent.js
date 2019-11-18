import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'

export class CheckboxComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div className="flex">
                <input type="checkbox" />
                <ButtonComponent name="Delete" />
            </div>
        )
    }
};
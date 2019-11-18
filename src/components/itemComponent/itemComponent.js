import React, { Component } from 'react'
import { CheckboxComponent } from '../checkboxComponent/checkboxComponent'
import './itemComponent.css';
export class ItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div class="todo-wrapper flex">
                <div class="flex">
                    <span>{this.props.data}</span>
                </div>
                <CheckboxComponent></CheckboxComponent>
            </div>
        )
    }
}

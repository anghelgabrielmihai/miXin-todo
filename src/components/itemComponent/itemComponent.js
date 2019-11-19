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
            <div className={`todo-wrapper flex ${this.props.data.done ? `done` : ``}`}>
                <div className="flex">
                    <span>{this.props.data.value}</span>
                </div>
                <CheckboxComponent 
                    deleteState={this.props.deleteState} 
                    handleDone={this.props.handleDone}
                    id={this.props.data.id}
                />
            </div>
        )
    }
}

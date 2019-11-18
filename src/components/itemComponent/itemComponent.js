import React, { Component } from 'react'
import { CheckboxComponent } from '../checkboxComponent/checkboxComponent'

export class ItemComponent extends Component {
    render () {
        return (
            <div>
                <p>{this.props.data}</p>
                <CheckboxComponent></CheckboxComponent>
            </div>
        )
    }
}

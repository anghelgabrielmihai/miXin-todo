import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'

export class CheckboxComponent extends Component {
    render () {
        return (
            <div>
                <form>
                    <input type="checkbox" />
                    <ButtonComponent name="Delete" />
                </form>
            </div>
        )
    }
};
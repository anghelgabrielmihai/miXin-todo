import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'

export class AddComponent extends Component {
    render () {
        return (
            <div>
                <form>
                    <input type="text" />
                    <ButtonComponent name="Submit"/>
                </form>
            </div>
        )
    }
}

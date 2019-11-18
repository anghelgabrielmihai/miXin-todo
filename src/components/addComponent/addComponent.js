import React, { Component } from 'react'
import { ButtonComponent } from '../buttonComponent/buttonComponent'

export class AddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div>
                <form>
                    <input type="text" />
                    <ButtonComponent name="Submit" />
                </form>
            </div>
        )
    }
}

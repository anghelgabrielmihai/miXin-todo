import React, { Component } from 'react'

export class ButtonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (<button>{this.props.name}</button>)
    }
}

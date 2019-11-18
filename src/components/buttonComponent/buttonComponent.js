import React, { Component } from 'react'

export class ButtonComponent extends Component {
    render () {
        return (<button>{this.props.name}</button>)
    }
}

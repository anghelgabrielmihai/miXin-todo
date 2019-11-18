import React, { Component } from 'react'

export class HeaderComponent extends Component {
    render () {
        return (
            <div>
                <h1 className="flex">{this.props.title}</h1>
            </div>
        )
    }
}

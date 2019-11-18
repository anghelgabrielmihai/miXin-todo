import React, { Component } from 'react'
import { ItemComponent } from '../itemComponent/itemComponent'
import { ButtonComponent } from '../buttonComponent/buttonComponent';
import { AddComponent } from '../addComponent/addComponent';

export class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { data: ['1', '2', '3', '4'] };
    }

    render () {
        const items = this.state.data.map(item => <ItemComponent key={item} data={item} />);
        return (
            <div>
                <ButtonComponent name="Add" />
                {items}
                <AddComponent />
            </div>
        )
    }
}

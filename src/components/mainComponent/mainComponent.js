import React, { Component } from 'react'
import { ItemComponent } from '../itemComponent/itemComponent'
import { ButtonComponent } from '../buttonComponent/buttonComponent';
import { AddComponent } from '../addComponent/addComponent';
import './mainComponent.css';
export class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { data: ['1', '2', '3', '4'] };
    }

    render () {
        const items = this.state.data.map(item => <ItemComponent key={item} data={item} />);
        return (
            <main>
                <section className="action-row flex">
                    <ButtonComponent className="action-button flex" name="Add" />
                </section>
                <section class="todo-container">{items}</section>
                <AddComponent />
            </main>
        )
    }
}

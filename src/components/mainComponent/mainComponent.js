import React, { Component } from 'react'
import { ItemComponent } from '../itemComponent/itemComponent'
import { ButtonComponent } from '../buttonComponent/buttonComponent';
import { AddComponent } from '../addComponent/addComponent';
import './mainComponent.css';
export class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { id: 1, value: 'Test1' },
                { id: 2, value: 'Test2' },
                { id: 3, value: 'Test3' },
                { id: 4, value: 'Test4' }
            ],
            showAddComponent: false
        };
    }

    addItemComponent = () => {
        this.setState(state => ({ showAddComponent: !state.showAddComponent }))
    }

    updateState = (value) => {
        this.setState((prevState) => {
            return {
                data: [...prevState.data, { id: prevState.data.pop().id + 1, value }]
            }
        });
    }

    deleteState = (value) => {
        const items = this.state.data.filter(item => item.id !== value)
        this.setState({ data: items });
    }

    render () {
        const items = this.state.data.map(item => <ItemComponent deleteState={this.deleteState} key={item.id} data={item} />);
        return (
            <main>
                <section className="action-row flex">
                    <ButtonComponent className="action-button flex" name="Add" methodToCall={this.addItemComponent} />
                </section>
                <section className="todo-container">{items}</section>
                <section className="add-container">
                    <AddComponent showAddComponent={this.state.showAddComponent} updateState={this.updateState} />
                </section>
            </main>
        )
    }
}

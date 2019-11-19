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
                { id: 1, value: 'Test1', done: false },
                { id: 2, value: 'Test2', done: false },
                { id: 3, value: 'Test3', done: false },
                { id: 4, value: 'Test4', done: false }
            ],
            showAddComponent: false
        };
    }

    addItemComponent = () => {
        // this.setState({
        //     showAddComponent: !this.state.showAddComponent
        // })
        this.setState(state => ({ showAddComponent: !state.showAddComponent }))
    }

    updateState = (value) => {
        // this.setState({
        //     data: [...this.state.data, { id: this.state.data.length + 1, value }]
        // });
        this.setState((prevState) => {
            return {
                data: [...prevState.data, { id: prevState.data.pop().id + 1, value }]
            }
        });
    }

    deleteState = (value) => {
        // const index = this.state.data.findIndex(el => el.id === value);
        // const index = this.state.data.map(el => el.id).indexOf(value);
        // this.setState({
        //     data: [
        //         ...this.state.data.slice(0, index), 
        //         ...this.state.data.slice(index + 1, this.state.data.length)
        //     ]
        // })

        const items = this.state.data.filter(item => item.id !== value)
        this.setState({ data: items });
    }

    handleDone = (value) => {
        const index = this.state.data.findIndex(el => el.id === value);
        this.setState({
            data: [
                ...this.state.data.slice(0, index),
                {
                    ...this.state.data[index],
                    done: !this.state.data[index].done
                },
                ...this.state.data.slice(index + 1, this.state.data.length)
            ]
        })
    }

    renderItems = () => {
        return (
            this.state.data.map(item =>
                 <ItemComponent 
                    deleteState={this.deleteState} 
                    handleDone={this.handleDone}
                    key={item.id}
                    data={item} />)   
        )
    }

    render () {
        // const items = this.state.data.map(item => <ItemComponent deleteState={this.deleteState} key={item.id} data={item} />);
        return (
            <main>
                <section className="action-row flex">
                    <ButtonComponent className="action-button flex" name="Add" methodToCall={this.addItemComponent} />
                </section>
                <section className="todo-container">{this.renderItems()}</section>
                <section className="add-container">
                    <AddComponent showAddComponent={this.state.showAddComponent} updateState={this.updateState} />
                </section>
            </main>
        )
    }
}

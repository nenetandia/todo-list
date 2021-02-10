import React, { Component } from 'react';

class Todolist extends Component {

    constructor() {
        super();
        this.state = {userInput: '', items: [] };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        }, () => console.log("....typh....", this.state.userInput));
    }
    addTodo(event){
        event.preventDefault();
        this.setState({
            items:[...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event){
        event.preventDefault();
        const tab = this.state.items;
        const index = tab.indexOf(event.target.value);
        tab.splice(index, 1)
        this.setState({
            items: tab
        });

    }


    renderTodos(){
        return this.state.items.map((item) => {
            return(
                <div className="list-group-item" key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>x</button>
                </div>
            );
        });
    }
    

    render() {
        return(
            <div>
                <h1 align="center">Nene's Todo list</h1>
                <form className="form-row align-items-center">
                    <input type="text" placeholder="Renseigner un item"  value={this.state.userInput} onChange={this.onChange.bind(this)} className="form-control mb-2"/>
                    <button onClick={this.addTodo.bind(this)} className="btn btn-dark">Ajouter</button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}
export default Todolist;
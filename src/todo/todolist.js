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
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }
    

    render() {
        return(
            <div>
                <h1>Ma Todo list</h1>
                <form>
                    <input type="text" placeholder="Renseigner un item"  value={this.state.userInput} onChange={this.onChange.bind(this)}/>
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div>
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}
export default Todolist;
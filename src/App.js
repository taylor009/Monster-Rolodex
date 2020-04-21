import React, { Component } from 'react';
import './App.css';

class App extends Component {

    // Gets Access to Component State.
    constructor() {
        super();
        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
            .catch(error => console.error(error.message))
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name }</h1>)
                }
            </div>
        )
    }
}

export default App;

import React, { Component } from 'react';

import {CardList} from "./components/card-list/card-list.component";

import './App.css';

class App extends Component {

    // Gets Access to Component State.
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
            .catch(error => console.error(error.message))
    }

    render() {
        const  { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monsters =>
        monsters.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <input
                    type="search"
                    placeholder='search monsters'
                    onChange={event => this.setState({ searchField: event.target.value})}/>
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App;

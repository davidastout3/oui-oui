import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <HelloWorld />
                </header>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Vocab from './Vocab';

class HelloWorld extends Component {
    render() {
        Vocab.setLanguage("fr")
        return (
            <p>{Vocab.get("HelloWorld")}</p>
        );
    }
}

export default HelloWorld;
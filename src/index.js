import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>Hello From App</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
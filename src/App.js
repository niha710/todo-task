import React from 'react';
import Tasks from './tasks.js';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="App">
                <Tasks/>
            </div>
        )
    }
}





export default App;

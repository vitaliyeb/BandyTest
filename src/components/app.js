import React, { Component } from 'react';
import Article from "./article/article";
import './app.styl';

class App extends Component{
    render() {
        return (
            <div className='app'>
                <Article />
            </div>
        )
    }
}
export default App;
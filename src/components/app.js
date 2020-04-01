import React, { Component } from 'react';
import Article from "./article/article";
import CommentsList from "./comments-list/commentsList";
import './app.styl';

class App extends Component{
    render() {
        return (
            <div className='app'>
                <Article />
                <CommentsList />
            </div>
        )
    }
}
export default App;
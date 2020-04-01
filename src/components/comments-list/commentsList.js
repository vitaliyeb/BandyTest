import React, {Component} from 'react';
import './commentsList.styl'
import Comment from "../comment/comment";

class CommentsList extends Component{

    render() {

        return (
            <div className='comments-list'>
                <p className='comments-list__title'>Комментарии:</p>
                <Comment />
            </div>
        )
    }
}

export default CommentsList;
import React, {Component} from 'react';
import {connect} from "react-redux";
import './commentsList.styl'
import Comment from "../comment/comment";

class CommentsList extends Component{

    render() {
        let {comments} = this.props;

        let allComments = comments.map(comment => {
            return < Comment key={comment.id.toString()} {...comment} />
        });

        console.log(comments);
        return (
            <div className='comments-list'>
                <p className='comments-list__title'>Комментарии:</p>
                { allComments }
            </div>
        )
    }
}

let mapStateToProps = ({comments}) => ({comments});

export default connect(mapStateToProps)(CommentsList);
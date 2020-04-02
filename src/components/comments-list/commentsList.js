import React, {Component} from 'react';
import {connect} from "react-redux";
import './commentsList.styl'
import Comment from "../comment/comment";
import AddComment from "../add-comment/add-comment";

class CommentsList extends Component{

    render() {
        let { comments, findingAddCommentForm } = this.props;

        let allComments = comments.map(comment => {
            return < Comment key={comment.id.toString() } idForm={findingAddCommentForm} {...comment} />
        });

        return (
            <div className='comments-list'>
                <p className='comments-list__title'>Комментарии:</p>
                { allComments }
                { !findingAddCommentForm.length ? < AddComment id={findingAddCommentForm} /> : null }
            </div>
        )
    }
}

let mapStateToProps = ({comments, findingAddCommentForm}) => ({comments, findingAddCommentForm});

export default connect(mapStateToProps)(CommentsList);
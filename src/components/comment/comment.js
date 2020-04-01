import React, {Component} from 'react';
import './comment.styl';
import AddComment from "../add-comment/add-comment";
import userAvatar from './user.png';

class Comment extends Component{
    render() {
        let {nestedComments, name, email, comment} = this.props,
            showComments = nestedComments.length ? nestedComments.map((comment)=> <Comment key={comment.id} {...comment} />) : null;

        return(
          <div className='comment'>
              <img className='comment__avatar' src={userAvatar} alt=""/>
              <div className='comment__other'>
                  <div className='comment-other__top'>
                      <p className='comment-other__name'>{ name }</p>
                      <p className='comment-other__time'>час назад</p>
                      <div className='comment-other__t'> </div>
                      <p className='comment-other__response'>ответить</p>
                  </div>
                  <p className='comment-other__text'>
                      { comment }
                  </p>
                  { showComments }
              </div>
          </div>
        );
    }
}

export default Comment;
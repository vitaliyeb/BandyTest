import React, {Component} from 'react';
import './comment.styl';
import AddComment from "../add-comment/add-comment";
import userAvatar from './user.png';
import Rating from "../rating/rating";
import { connect } from 'react-redux';
import { responseComment, updateHiddenComment } from "../../actions/actions";




class Comment extends Component{
    render() {
        let {nestedComments, name, email, rating, isHidden, comment, id, idForm, responseComment, updateHiddenComment } = this.props,
            additional = idForm.toString() === id.toString() ? <AddComment id={id} /> : null;

        if(idForm.toString() === id.toString()){
            additional = <AddComment id={id} /> ;
        } else {
            additional = nestedComments.length ? nestedComments.map((comment)=> <Comment key={comment.id.toString()} responseComment={responseComment} idForm={idForm} {...comment} />) : null;
        }

        let commentBlock =  isHidden ? (<span className='comment-other__open-text' onClick={()=>updateHiddenComment(id)}>открыть коммент </span>) : comment;

        let responseClass = `comment-other__response ${id.length > 2 ? 'comment-other__response_block' : null}`;
        return(
          <div className='comment'>
              <img className='comment__avatar' src={userAvatar} alt=""/>
              <div className='comment__other'>
                  <div className='comment-other__top'>
                      <p className='comment-other__name'>{ name }</p>
                      <p className='comment-other__time'>час назад</p>
                      <Rating rating={rating} id={id} />
                      <p onClick={()=> id.length < 3 ? responseComment(id) : null} className={ responseClass } >ответить</p>
                  </div>
                  <p className='comment-other__text'>
                      { commentBlock }
                  </p>
                  { additional }
              </div>
          </div>
        );
    }
}
const mapDispatchToProps = { responseComment, updateHiddenComment };

export default connect(null, mapDispatchToProps)(Comment);
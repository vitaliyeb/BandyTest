import React, {Component} from 'react';
import './comment.styl';
import AddComment from "../add-comment/add-comment";
import userAvatar from './user.png';
import { connect } from 'react-redux';
import { responseComment } from "../../actions/actions";

class Comment extends Component{
    render() {
        let {nestedComments, name, email, comment, id, idForm, responseComment } = this.props,
            additional = idForm.toString() === id.toString() ? <AddComment id={id} /> : null;

        if(idForm.toString() === id.toString()){
            additional = <AddComment id={id} /> ;
        } else {
            additional = nestedComments.length ? nestedComments.map((comment)=> <Comment key={comment.id.toString()} responseComment={responseComment} idForm={idForm} {...comment} />) : null;
        }
        console.log(responseComment);
        return(
          <div className='comment'>
              <img className='comment__avatar' src={userAvatar} alt=""/>
              <div className='comment__other'>
                  <div className='comment-other__top'>
                      <p className='comment-other__name'>{ name }</p>
                      <p className='comment-other__time'>час назад</p>
                      <div className='comment-other__t'> </div>
                      <p onClick={()=> id.length < 3 ? responseComment(id) : null} className='comment-other__response'>ответить</p>
                  </div>
                  <p className='comment-other__text'>
                      { comment }
                  </p>
                  { additional }
              </div>
          </div>
        );
    }
}
const mapDispatchToProps = { responseComment };

export default connect(null, mapDispatchToProps)(Comment);
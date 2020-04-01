import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from "../../actions/actions";
import './add-comment.styl'

class AddComment extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            comment: ''
        };
        this.addComment = (e) => {
            e.preventDefault();
            let { addComment, id } = this.props;
            let { name, email, comment } = this.state;
            //if (!email.replace(/\s+/g,'').length) return null;
            let newId = (Math.floor(Math.random()*500)+1);
            return addComment(name, email, comment, id.concat(newId));
        };
    }
    setInput(e, property){
        let state = this.state,
            value = e.target.value;
        this.setState({...state, [property]: value})
    }

    render() {
        let { name, email, comment }  = this.state;

        return(
            <form className='add-comment' onSubmit={this.addComment}>
                <p className='add-comment__heading'>Добавить комментарий</p>
                <div className='add-comment__wrapper'>
                    <p className='add-comment__title'>Имя</p>
                    <input className='add-comment__input' onChange={(e)=>this.setInput(e, 'name')} value={name} type="text"/>
                </div>
                <div className='add-comment__wrapper'>
                    <p className='add-comment__title'>E-mail</p>
                    <input className='add-comment__input' onChange={(e)=>this.setInput(e, 'email')} value={email} type="email"/>
                </div>
                <div className='add-comment__wrapper'>
                    <p className='add-comment__title'>Текст комментария</p>
                    <div className='add-comment__wrapper_button'>
                        <textarea className='add-comment__input add-comment__input_comment' onChange={(e)=>this.setInput(e, 'comment')} value={comment}/>
                        <input className='add-comment__submit' type="submit" value='Добавить коментарий'/>
                    </div>
                </div>
            </form>
        )
    }
}

let mapDispatchToProps = {
    addComment
};
export default connect(null, mapDispatchToProps)(AddComment);
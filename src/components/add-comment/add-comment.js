import React, {Component} from 'react';
import './add-comment.styl'

class AddComment extends Component{

    render() {
        return(
            <div className='add-comment'>
                <p className='add-comment__heading'>Добавить комментарий</p>
                <div className='add-comment__wrapper'>
                    <p className='add-comment__title'>Имя</p>
                    <input className='add-comment__input' type="text"/>
                </div>
                <div className='add-comment__wrapper'>
                    <p className='add-comment__title'>E-mail</p>
                    <input className='add-comment__input' type="text"/>
                </div>
                <div className='add-comment__wrapper'>
                    <p className='add-comment__title'>Текст комментария</p>
                    <textarea className='add-comment__input add-comment__input_comment'/>
                </div>
            </div>
        )
    }
}

export default AddComment;
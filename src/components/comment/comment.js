import React, {Component} from 'react';
import './comment.styl';
import userAvatar from './user.png';

class Comment extends Component{

    render() {
        return(
          <div className='comment'>
              <img className='comment__avatar' src={userAvatar} alt=""/>
              <div className='comment__other'>
                  <div className='comment-other__top'>
                      <p className='comment-other__name'>Виталий Бурдин</p>
                      <p className='comment-other__time'>час назад</p>
                      <div className='comment-other__t'></div>
                      <p className='comment-other__response'>ответить</p>
                  </div>
                  <p className='comment-other__text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fugiat minus molestiae omnis suscipit unde voluptate! Ab aliquam debitis exercitationem hic incidunt nobis soluta voluptate? Cumque esse labore nesciunt voluptatibus.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At excepturi explicabo impedit ipsam molestiae nemo nihil non perspiciatis, provident quas ratione, recusandae tempora, temporibus. Adipisci doloremque hic non similique voluptates?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam at cupiditate dignissimos, fugit ipsam, nam obcaecati perspiciatis porro sed, sint voluptatem voluptates! Deserunt dolore doloribus modi nesciunt quae.
                  </p>
              </div>
          </div>
        );
    }
}

export default Comment;
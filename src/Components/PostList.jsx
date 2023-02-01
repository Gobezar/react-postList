import React from 'react'
import PostItem from './PostItem';
import '../styles/Posts.css'
import Without_posts from '../images/monkey.png';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
        <div id="without_posts"> Посты не найдены! 😞
          <div id='without_posts_img'><img src={Without_posts} alt={'monkey'}></img></div>
        </div>
    )
  }



  return (
    <div>
      <h2>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="postTransition"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  )
}

export default PostList;
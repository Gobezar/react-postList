import React from 'react'
import '../styles/App.css'
import MyButton from '../UI/Button/MyButton'


const PostItem = (props) => {
  return (
    <div className='post'>
        <div className='post_content'>
            <h3>{props.post.id}. {props.post.title}</h3>
            <div>{props.post.body}</div>
        </div>
        <div className='post_btns'>
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
    </div>
    
  )
}

export default PostItem ;
import React from 'react'
import '../styles/App.css'
import MyButton from '../UI/Button/MyButton'
import {useNavigate} from 'react-router-dom'


const PostItem = (props) => {
  const navigate = useNavigate(); // хук для того, чтобы путь к посту формировался динамически в зависимости от id поста



  return (
    <div className='post'>
        <div className='post_content'>
            <h3>{props.number}. {props.post.title}</h3>
            <div>{props.post.body}</div>
        </div>
        <div className='post_btns'>
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
        </div>
    </div>
    
  )
}

export default PostItem ;
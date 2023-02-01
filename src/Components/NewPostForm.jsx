import React, { useState } from 'react'
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput'


const NewPostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })


    const AddNewPost = (e) => {
        e.preventDefault() // button по умолчанию сабмиттит и перезагружает страницу
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <div>
            <form>
                <MyInput
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    value={post.title}
                    type='text'
                    placeholder="Название поста" />
                <MyInput
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    value={post.body}
                    type='text'
                    placeholder="Описание поста" />
                <MyButton onClick={AddNewPost}>Создать пост</MyButton>
            </form>


        </div>
    )
}


export default NewPostForm;
import React from 'react'
import Sort from '../Components/Sort';
import MyInput from "../UI/Input/MyInput";
import MyButton from '../UI/Button/MyButton';


const PostFilter = ({ filter, setFilter, setPosts }) => {

    const removeAllPosts = () => {
        setPosts([])
    }

    return (
        <div>
            <MyInput
                value={filter.search}
                onChange={e => setFilter({ ...filter, search: e.target.value })}
                placeholder='Поиск необходимого поста...'
            />

            <Sort
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировать'
                options={[
                    { value: 'title', name: 'по названию' },
                    { value: 'body', name: 'по описанию' }
                ]}
            />
            <MyButton 
                onClick={removeAllPosts}
                style={{ marginLeft: '10px' }}>
                Удалить всё
            </MyButton>
        </div>
    )
}

export default PostFilter;
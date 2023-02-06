import React from 'react'
import Sort from '../Components/Sort';
import MyInput from "../UI/Input/MyInput";
import MyButton from '../UI/Button/MyButton';



const PostFilter = ({ filter, setFilter, setPosts, limitPages, setLimitPages }) => {

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

            {/* <Sort
                value={limitPages}
                onChange={value => setLimitPages(value)}
                defaultValue='Количество элементов на странице'
                options={[
                    {value:5, name:'5'}, 
                    {value:10, name:'10'}, 
                    {value:25, name:'25'}, 
                    {value:-1, name:'Показать все посты'}, 
                ]}/> */}
        </div>
    )
}

export default PostFilter;
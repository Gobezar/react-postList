import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostFetching from '../API/PostFetching';
import Loader from '../UI/Loader/Loader'
import '../styles/App.css'

const PostItemPage = () => {
  const params = useParams() // хук для того чтобы выцепить id поста из url и отправить запрос на сервер с получением данных этого id. Возвращает объект с id поста, на который мы зашли.
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([])
  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostFetching.getById(params.id)
    setPost(response.data);
  });
  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostFetching.getCommentsById(params.id)
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchCommentsById(params.id)
  }, [])

  return (
    <div>
      <h2> Вы перешли на страницу поста № {params.id}</h2>

      {isPostLoading &&
       <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Идет загрузка...<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><Loader /></div></h3>
}

      <h3 style={{textAlign:'center', marginTop:'15px'}}>Комментарии:</h3>

      {isCommentsLoading
        ? <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Идет загрузка...<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><Loader /></div></h3>
        : <div>
          {comments.map (comm => 
          <div key={comm.id} className='post_comments' style={{marginTop:'30px'}}>
            <h4>{comm.email}</h4>
            <p>"{comm.body}"</p>
          </div>
          )}

        </div>
      }



    </div>
  )
}

export default PostItemPage;
import React, { useState, useEffect, useRef } from "react";
import { useSortedAndFilteredPosts } from '../hooks/usePosts';
import { useFetching } from "../hooks/useFetching";
import { usePagination } from '../hooks/usePagination'
import NewPostForm from "../Components/NewPostForm";
import PostList from "../Components/PostList";
import PostFilter from "../Components/PostFilter";
import ModalCreatePost from "../Components/ModalCreatePost";
import MyButton from "../UI/Button/MyButton";
import PostFetching from "../API/PostFetching";
import Loader from "../UI/Loader/Loader"
import { getPagesCount } from "../utils/PagesCount";
import Pagination from "../Components/Pagination";
// import { useObserver } from "../hooks/useObserver";


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [modalVisible, setModalVisible] = useState(false);
  const SortedAndSearchedPosts = useSortedAndFilteredPosts(posts, filter.sort, filter.search);
  const [totalCountPages, setTotalCountPages] = useState(0); // Общее количество страниц на заданное кол-во постов
  const [limitPages, setLimitPages] = useState(10); // Лимит постов на странице
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostFetching.getAll(limitPages, currentPage);
    setPosts(response.data);
    const totalCountPosts = response.headers['x-total-count'] // Общее количество постов с сервера
    setTotalCountPages(getPagesCount(totalCountPosts, limitPages))
  });
  const pagesArray = usePagination(totalCountPages);



    // const lastElement = useRef();
    // useObserver(lastElement, currentPage < totalCountPages, isPostLoading,  () => {
    //   setCurrentPage (currentPage +1)
    // })

  





  useEffect(() => {
    fetchPosts()
  }, [currentPage, limitPages])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModalVisible(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModalVisible(true)}>Создать новый пост</MyButton>
      <ModalCreatePost visible={modalVisible} setVisible={setModalVisible}>
        <NewPostForm create={createPost} />
      </ModalCreatePost>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} setPosts={setPosts} limitPages={limitPages} setLimitPages={setLimitPages}/>

      {postError &&
        <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Произошла ошибка "${postError}"</h3>
      }
      
      
      
      {isPostLoading 
        ? <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Идет загрузка...<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><Loader /></div></h3>
        : <PostList remove={removePost} posts={SortedAndSearchedPosts} title="Посты про JavaScript" />
      }
      {/* <div ref={lastElement} style={{height: 20}}></div> */}
      
      
      {posts.length > 0 &&
          <Pagination currentPage={currentPage} totalCountPages={totalCountPages} changePage={changePage} pagesArray={pagesArray} />
      }
         

    </div>
  );
}

export default Posts;

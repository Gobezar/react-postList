import React  from 'react'
import { Route, Routes } from 'react-router-dom';
import Posts from '../pages/Posts';
import About from '../pages/About';
import NotFoundPage from '../pages/NotFoundPage';
import PostItemPage from '../pages/PostItemPage';
import Login from '../pages/Login';
import { useData } from '../AuthContext';

const AppRouter = () => {
    
    
    const {isAuth} = useData()

    return (

       
<div>

{isAuth 
    ?
    <div className='publicRoutes'>
        <Routes>
            <Route
                element={<Posts />}
                path="/posts">
            </Route>

            <Route
                element={<About />}
                path="/about">
            </Route>

            <Route
                element={<PostItemPage />}
                path="/posts/:id">
            </Route>

            <Route
                element={<NotFoundPage />}
                path="*">
            </Route>

            <Route
                element={<Posts />}
                path="/">
            </Route>
            
        </Routes>
    </div>
    :
    <div className='privateRoutes'>
        <Routes>
            <Route
                element={<Login />}
                path="/login">
            </Route>
            <Route
                element={<Login />}
                path="*">
            </Route>
        </Routes>
    </div>
}
</div>
 

    )
}

export default AppRouter;
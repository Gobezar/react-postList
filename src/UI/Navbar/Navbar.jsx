import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import MyButton from '../Button/MyButton';
import { useData } from '../../AuthContext';


const Navbar = () => {

  const {isAuth, setIsAuth} = useData()

  
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }



  return (
    <div className='navbar'>
      
        <div className='navbar_links'>
            <Link to='/about'>О сайте</Link>
            <Link to='/posts'>Список постов</Link>
        </div>
        <MyButton onClick={logout}>Выйти</MyButton>

      </div>
  )
}
export default Navbar;
import React from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/MyInput'
import { useData } from '../AuthContext'
import '../styles/App.css'

const Login = () => {

    const {isAuth, setIsAuth} = useData()


const login = event => {
    event.preventDefault(); // чтобы страница не перезагружалась
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
}

  return (
    <div>
        <h2>Пожалуйста, авторизуйтесь</h2>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="Введите логин"></MyInput>
            <MyInput type="text" placeholder="Введите пароль"></MyInput>
            <MyButton>Войти</MyButton>
        </form>
        <div className='login_warning'><p>Это тестовая форма авторизации.<br />
        Введите любые данные, мы сохраним их <br /> в LocalStorage и авторизуем Вас! 😏</p></div>

    </div>
  )
}


export default Login;
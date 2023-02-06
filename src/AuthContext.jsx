import { useContext } from 'react';
import React, {useState ,useEffect} from 'react'
import { createContext } from 'react';



const AuthContext = createContext(false)

const AuthProvider = ({children}) => {
 const [isAuth, setIsAuth] = useState(false)

 useEffect(() => {
    if(localStorage.getItem('auth')) {
        setIsAuth(true)
    }
 }, [])

  return <AuthContext.Provider value={{
    isAuth,
    setIsAuth,
  }}>
    {children}
  </AuthContext.Provider>
  
};
export const useData = () => useContext(AuthContext)


export default AuthProvider;
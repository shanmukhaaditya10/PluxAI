import React,{createContext,useState,useContext} from 'react'


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
  }

const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState('')
  return (
   <AuthContext.Provider value={{userToken}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider

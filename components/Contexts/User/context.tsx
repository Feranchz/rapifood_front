import { createContext, useContext, useEffect, useState } from "react";
import { useRequest } from "../../Utils/useRequests";

const UserContext = createContext(null)

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const { get } = useRequest()

  const fetchUser = async () => {
    const response = await get('/me')
    if(response.id){
      setUser(response)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, refetch: fetchUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const { user, setUser, refetch } = useContext(UserContext)

  return {
    user,
    setUser,
    refetch
  }
}
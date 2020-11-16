import createSingleton from '@peterbee/react-singleton'
import { useRequest } from './useRequests'

const [userHook, updateUser] = createSingleton({})

export const useUser = () => {
  const { get } = useRequest()

  const refetch = async () => {
    const response = await get('/me')
    if(response.activate == 1){
      updateUser(response)
    }
  }

  return {
    userHook,
    refetch
  }
}
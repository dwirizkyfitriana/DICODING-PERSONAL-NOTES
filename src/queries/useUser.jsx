import { useQuery } from '@tanstack/react-query'
import { getSelf } from '../api/requests/user'

const useUser = () => {
  return useQuery({
    queryKey: ['self', 'user'],
    queryFn: async () => {
      const res = await getSelf()
      return res.data || null
    },
    retry: false
  })
}

export default useUser

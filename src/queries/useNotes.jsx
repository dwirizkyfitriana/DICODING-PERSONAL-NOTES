import { useQuery } from '@tanstack/react-query'
import { getNotes } from '../api/requests/notes'

const useNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const res = await getNotes()
      return res.data || []
    },
    initialData: []
  })
}

export default useNotes

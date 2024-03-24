import { useQuery } from '@tanstack/react-query'
import { getNote } from '../api/requests/notes'

const useNote = (id) => {
  return useQuery({
    queryKey: ['notes', id],
    queryFn: async () => {
      const res = await getNote(id)
      return res.data || null
    },
    initialData: null
  })
}

export default useNote

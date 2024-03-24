import { useQuery } from '@tanstack/react-query'
import { getArchivedNotes } from '../api/requests/notes'

const useArchivedNotes = () => {
  return useQuery({
    queryKey: ['archived', 'notes'],
    queryFn: async () => {
      const res = await getArchivedNotes()
      return res.data || []
    },
    initialData: []
  })
}

export default useArchivedNotes

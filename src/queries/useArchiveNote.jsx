import { useMutation, useQueryClient } from '@tanstack/react-query'
import { archiveNote } from '../api/requests/notes'

const useArchiveNote = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id) => archiveNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      queryClient.invalidateQueries({ queryKey: ['archived', 'notes'] })
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}

export default useArchiveNote

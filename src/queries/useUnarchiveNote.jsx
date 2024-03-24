import { useMutation, useQueryClient } from '@tanstack/react-query'
import { unArchiveNote } from '../api/requests/notes'

const useUnarchiveNote = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id) => unArchiveNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      queryClient.invalidateQueries({ queryKey: ['archived', 'notes'] })
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}

export default useUnarchiveNote

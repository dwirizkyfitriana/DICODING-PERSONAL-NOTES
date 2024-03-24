import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteNote } from '../api/requests/notes'

const useDeleteNote = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      queryClient.invalidateQueries({ queryKey: ['archived', 'notes'] })
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}

export default useDeleteNote

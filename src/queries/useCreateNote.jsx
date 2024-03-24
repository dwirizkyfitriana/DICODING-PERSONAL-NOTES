import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNote } from '../api/requests/notes'

const useCreateNote = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload) => createNote(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}

export default useCreateNote

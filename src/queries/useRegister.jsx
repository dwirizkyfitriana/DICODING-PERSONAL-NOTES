import { useMutation } from '@tanstack/react-query'
import { register } from '../api/requests/user'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (payload) => register(payload),
    onSuccess: (data) => {
      alert(data.message)
      navigate('/')
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}

export default useRegister

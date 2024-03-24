import { useMutation } from '@tanstack/react-query'
import { login } from '../api/requests/user'
import { creds } from '../utils/constants'

const useLogin = () => {
  return useMutation({
    mutationFn: (payload) => login(payload),
    onSuccess: (data) => {
      localStorage.setItem(creds.ACCESS_TOKEN, data.data.accessToken)
      location.reload()
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}

export default useLogin

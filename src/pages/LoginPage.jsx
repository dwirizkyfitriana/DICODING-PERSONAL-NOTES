import React from 'react'
import useInput from '../hooks/useInput'
import { Link } from 'react-router-dom'
import useLogin from '../queries/useLogin'

const LoginPage = () => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  const { mutate: login } = useLogin()

  const onSubmit = (event) => {
    event.preventDefault()

    login({ email, password })
  }

  return (
    <div className='note-app__body'>
      <div className='note-input'>
        <form onSubmit={onSubmit}>
          <h2>Login</h2>

          <input
            className='note-input__title'
            type='email'
            placeholder='email'
            value={email}
            onChange={onEmailChange}
            required
          />
          <input
            className='note-input__title'
            type='password'
            placeholder='kata sandi'
            value={password}
            onChange={onPasswordChange}
            required
          />

          <button type='submit'>Login</button>
        </form>

        <p style={{ marginTop: '20px' }}>
          Belum punya akun? &nbsp;
          <Link to='/register' className='auth-link'>
            Daftar disini
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage

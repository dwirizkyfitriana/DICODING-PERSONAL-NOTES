import React from 'react'
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'
import useRegister from '../queries/useRegister'

const RegisterPage = () => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [confPassword, onConfPasswordChange] = useInput('')

  const { mutate: register } = useRegister()

  const onSubmit = (event) => {
    event.preventDefault()

    if (password !== confPassword) {
      alert('Konfirmasi Kata Sandi Tidak Sesuai!')
      return
    }

    register({ name, email, password })
  }

  return (
    <div className='note-app__body'>
      <div className='note-input'>
        <form onSubmit={onSubmit}>
          <h2>Daftar Akun</h2>

          <input
            className='note-input__title'
            type='text'
            placeholder='nama'
            value={name}
            onChange={onNameChange}
            required
          />
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
          <input
            className='note-input__title'
            type='password'
            placeholder='konfirmasi kata sandi'
            value={confPassword}
            onChange={onConfPasswordChange}
            required
          />

          <button type='submit'>Login</button>
        </form>

        <p style={{ marginTop: '20px' }}>
          Sudah punya akun? &nbsp;
          <Link to='/' className='auth-link'>
            Login disini
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage

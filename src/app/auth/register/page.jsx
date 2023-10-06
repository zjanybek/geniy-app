'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

import axios from '@/lib/axios'

const page = () => {
  const [name, setName] = useState('name')
  const [email, setEmail] = useState('aimettii333@yandex.r3')
  const [password, setPassword] = useState('12345678')
  const [errors, setErrors] = useState(null)

  const getToken = async () => {
    await axios.get('/sanctum/csrf-cookie')
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      await getToken()
      const res = await axios.post('/api/v1/register', {
        name: name,
        email: email,
        password: password
      })

      if (res.status === 200) {
        await signIn('credentials', {
          email: email,
          password: password,
          redirect: true,
          callbackUrl: '/'
        })
      }
    } catch (error) {
      console.log(error.response.data.message)
      setErrors(error.response.data)
    }
  }

  return (
    <div className='login-page__second-container'>
      <div className='grid grid-cols-12'>
        {errors && <div className='text-red-500'>{errors?.message}</div>}
        <div className='col-span-3'></div>
        <div className='col-span-6'>
          <form onSubmit={handleRegister} className='grid min-w-[510px] py-11'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mb-4 h-8 w-full border border-red-700'
            />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mb-4 h-8 w-full border border-red-700'
            />
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mb-4 h-8 w-full border border-red-700'
            />
            <button type='submit' className='btn-primary'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page

'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const page = () => {
  const [email, setEmail] = useState('aimettii333@yandex.r3')
  const [password, setPassword] = useState('12345678')
  const [errors, setErrors] = useState(null)

  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()

    signIn('credentials', {
      email: email,
      password: password,
      redirect: false
    }).then(({ ok, error }) => {
      if (ok) {
        router.push('/')
      } else {
        console.log(JSON.parse(error))
        setErrors(JSON.parse(error))
        console.log(errors)
      }
    })
  }

  return (
    <div className='login-page__second-container'>
      <div className='grid grid-cols-12'>
        {errors && <div className='text-red-500'>{errors?.message}</div>}
        <div className='col-span-3'></div>
        <div className='col-span-6'>
          <form onSubmit={handleLogin} className='grid min-w-[510px] py-11'>
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page

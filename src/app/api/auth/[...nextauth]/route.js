import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

import axios from '@/lib/axios'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        if (!credentials) return null

        const { email, password } = credentials

        try {
          await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`
          )

          const res = await axios.post('/login', {
            email: email,
            password: password
          })

          const user = res.data

          if (res.status === 200) {
            const userNew = {
              id: 123,
              name: 'UserNoName',
              email: 'user@mail.com',
              image: 'userNoImage',
              ...user
            }
            return userNew
          }
        } catch (error) {
          console.log('Error status' + error.response.status)
          throw new Error(JSON.stringify(error.response.data))
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      // console.log('Token Callback', { token, user, account })

      if (user) {
        token.user = user
      }

      return token
    },

    async session({ session, token, user }) {
      // console.log('Session Callback', { session, token, user })

      if (token) {
        session.user = token.user
      }

      return session
    }
  },
  pages: {
    signIn: '/auth/login'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

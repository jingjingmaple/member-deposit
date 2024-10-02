import { findMemberByUsername } from '@/repository/member.repository'
import { compare } from 'bcrypt'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = await findMemberByUsername(credentials!.username)
        if (!user) throw `Invalid username or password`
        const passwordCorrect = await compare(credentials?.password || '', user.password!)
        console.log('user', user)
        if (passwordCorrect) {
          return {
            id: `${user.id}`,
            name: `${user.id}`,
            email: user.username,
            image:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          }
        }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }

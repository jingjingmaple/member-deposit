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

        if (passwordCorrect) {
          return {
            id: user.id.toString(),
            username: user.username,
          }
        }

        console.log('credentials', credentials)
        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }

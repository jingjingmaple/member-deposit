'use client'

import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

const Logout = () => {
  useEffect(() => {
    signOut()
  }, [])

  return <div></div>
}

export default Logout

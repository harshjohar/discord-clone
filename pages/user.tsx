import CloseIcon from '@mui/icons-material/Close'
import { signOut } from 'firebase/auth'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { auth } from '../server/firebase'

const User = () => {
  const router = useRouter()
  const logout = () => {
    signOut(auth)
  }
  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-discord-primary">
      <Head>
        <title>User</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <div className="pl-auto flex h-screen w-[30%] flex-col space-y-2 bg-discord-sidebarleft pt-[15%] text-discord-white md:px-10">
        <p className="p-2 text-xs font-bold">USER SETTINGS</p>

        <p className="cursor-pointer rounded-md bg-discord-primary p-2 text-sm md:text-lg">
          My Account
        </p>

        <p className="cursor-pointer p-2 text-discord-red" onClick={logout}>
          Log Out
        </p>
      </div>
      <div className="relative flex w-[70%] p-16 flex-col h-screen">
        <h1 className='text-2xl text-white font-semibold'>My Account</h1>

        <div className='h-[60%] w-[90%] bg-gray-100 rounded-lg mt-5'>

        </div>

        <div
          className="absolute top-10 right-10"
          onClick={() => router.push('/')}
        >
          <CloseIcon className="cursor-pointer text-white" />
        </div>
      </div>
    </div>
  )
}

export default User

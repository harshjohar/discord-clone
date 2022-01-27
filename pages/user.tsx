import CloseIcon from '@mui/icons-material/Close'
import { signOut } from 'firebase/auth'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../server/firebase'

const User = () => {
  const router = useRouter()
  const logout = () => {
    signOut(auth)
  }
  const [user] = useAuthState(auth);
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
      <div className="relative flex h-screen w-[70%] flex-col p-16">
        <h1 className="text-2xl font-semibold text-white">My Account</h1>

        <div className="relative mt-5 h-[90%] w-[90%] rounded-lg bg-discord-sidebarleft">
          <div className="h-[20%] rounded-t-lg bg-red-100" />
          <div className="flex h-[15%]">
            {user?.photoURL && <img
              src={user?.photoURL}
              alt="dp"
              className="absolute top-[15%] left-[5%]  h-20 w-20 rounded-full"
            />}
            <p className="absolute top-[40%] lg:top-[20%] lg:left-[20%] left-[10%] py-2 text-lg font-bold text-white">
              {user?.displayName}
            </p>
          </div>

          <div className='h-[55%] bg-discord-primary m-3 text-white rounded-lg hidden lg:block pb-2'>
            <div className='flex flex-col p-3'>
              <p className="text-gray-400 text-xs">USERNAME</p>
              <p className='text-sm'>{user?.displayName}</p>
            </div>
            <div className='flex flex-col p-3'>
              <p className="text-gray-400 text-xs">EMAIL</p>
              <p className='text-sm'>{user?.email}</p>
            </div>
            <div className='flex flex-col p-3'>
              <p className="text-gray-400 text-xs">UNIQUE ID</p>
              <p className='text-sm'>{user?.uid}</p>
            </div>
          </div>
        </div>

        <div
          className="absolute top-10 right-10 flex h-10 w-10 items-center rounded-full p-2 hover:bg-gray-200 hover:bg-opacity-50 hover:text-discord-primary"
          onClick={() => router.push('/')}
        >
          <CloseIcon className="cursor-pointer text-white" />
        </div>
      </div>
    </div>
  )
}

export default User

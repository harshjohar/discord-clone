import { MicrophoneIcon } from '@heroicons/react/solid'
import { Headphones, Settings } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../server/firebase'

export const UserInfoBar = () => {
  const [user] = useAuthState(auth)
  const router = useRouter()

  const handleSetting = () => {
    router.push('/user')
  }

  return (
    <div className="absolute bottom-0 flex w-full border border-discord-selectedOption bg-discord-sidebarleft">
      <div className="w-[20%] cursor-pointer p-2 hover:opacity-90">
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            alt="dp"
            className="object-fit h-8 w-8 rounded-full"
          />
        ) : (
          <Avatar />
        )}
      </div>
      <div className="flex w-[40%] flex-col justify-center text-discord-white">
        <p className="cursor-pointer truncate text-sm font-bold">
          {user?.displayName}
        </p>
        <p className="cursor-default truncate text-xs">{user?.email}</p>
      </div>
      <div className="flex w-[35%] items-center space-x-1 text-gray-400">
        <MicrophoneIcon className="icon h-5" />
        <Headphones className="icon" />
        <Settings className="icon" onClick={handleSetting}/>
      </div>
    </div>
  )
}

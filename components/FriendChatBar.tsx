import { Avatar } from '@mui/material'
import React from 'react'

interface friendProps {
  name: string
  photoUrl: string
}

export const FriendChatBar = (props: friendProps) => {
  return (
    <div className="my-1 flex w-full cursor-pointer items-center space-x-2 rounded-md text-gray-400 hover:bg-discord-primary">
      <div className='p-1'>
        {props.photoUrl ? (
          <img src="" alt="" />
        ) : (
          <Avatar />
        )}
      </div>

      <p>{props.name}</p>
    </div>
  )
}

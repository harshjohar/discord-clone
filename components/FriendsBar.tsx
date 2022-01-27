import { PlusIcon, UsersIcon } from '@heroicons/react/outline'
import { Circle } from '@mui/icons-material'
import React from 'react'
import { FriendChatBar } from './FriendChatBar'
import { UserInfoBar } from './UserInfoBar'

export const FriendsBar = () => {
  return (
    <div className="relative w-60 overflow-hidden bg-discord-topLeft h-screen">
      <div className="flex h-12 items-center justify-between border border-discord-primary px-3 shadow-lg hover:bg-discord-primary">
        <input
          type="text"
          placeholder="Find or start a conversation"
          className="h-8 w-full rounded-md border-none bg-discord-sidebarleft p-1 text-xs text-white caret-white outline-none"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="my-1 mx-2 flex cursor-pointer space-x-2 rounded-lg p-2 text-gray-500 hover:bg-discord-primary hover:text-white">
          <UsersIcon className="w-6" />
          <p className="font-semibold">Friends</p>
        </div>
        <div className="my-1 mx-2 flex cursor-pointer space-x-2 rounded-lg p-2 text-gray-500 hover:bg-discord-primary hover:text-white">
          <Circle />
          <p className="font-semibold">Nitro</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start p-2 h-[90%]">
        <div className="flex w-full items-center justify-between">
          <p className="px-2 text-xs font-bold text-gray-500">
            DIRECT MESSAGES
          </p>
          <PlusIcon className="mx-2 w-5 text-gray-500" />
        </div>
        <p className="px-2 text-xs font-bold text-gray-500">
            Feature coming soon.....
          </p>
        <div className='h-[70%] overflow-y-scroll w-full scrollbar-hide'>
        <FriendChatBar name="Friend 1" photoUrl="" />
        <FriendChatBar name="Friend 2" photoUrl="" />
        <FriendChatBar name="Friend 3" photoUrl="" />
        <FriendChatBar name="Friend 4" photoUrl="" />
        <FriendChatBar name="Friend 5" photoUrl="" />
        <FriendChatBar name="Friend 6" photoUrl="" />
        <FriendChatBar name="Friend 7" photoUrl="" />
        <FriendChatBar name="Friend 8" photoUrl="" />
        <FriendChatBar name="Friend 9" photoUrl="" />
        <FriendChatBar name="Friend 10" photoUrl="" />
        </div>
      </div>
      <UserInfoBar />
    </div>
  )
}

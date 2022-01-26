import React from 'react'
import { HashtagIcon, BellIcon, UserGroupIcon } from '@heroicons/react/solid'
import PushPinIcon from '@mui/icons-material/PushPin'
export const Chat = () => {
  return (
    <div className="h-screen w-2/3  bg-discord-primary">
      <div className="relative flex w-[100%]">
        <div className="flex items-center space-x-2 p-2">
          <HashtagIcon className="w-7 text-gray-500" />
          <p className="my-1 cursor-default border-r border-gray-500 pr-5 font-bold text-discord-white">
            apple-discussion
          </p>
          <p className="hidden text-gray-400 md:inline">
            Nice place to talk about apples
          </p>
        </div>

        <div className="absolute top-3 right-2 hidden items-center space-x-4 md:flex px-4">
          <BellIcon className="w-6 text-gray-300 cursor-pointer hover:text-gray-100" />
          <PushPinIcon fontSize="medium" className="cursor-pointer hover:text-gray-100 rotate-45 text-gray-300" />
          <UserGroupIcon className="w-6 text-gray-300 cursor-pointer hover:text-gray-100" />
        </div>
      </div>
      {/* messages */}
      {/* input section */}
    </div>
  )
}

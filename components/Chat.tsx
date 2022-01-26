import React from 'react'
import {
  HashtagIcon,
  BellIcon,
  UserGroupIcon,
  PlusCircleIcon,
  GiftIcon,
  EmojiHappyIcon,
} from '@heroicons/react/solid'
import PushPinIcon from '@mui/icons-material/PushPin'
import { StickyNote2Rounded, Gif } from '@mui/icons-material'
import { Messages } from './Messages'
export const Chat = () => {
  return (
    <div className="relative h-screen  w-2/3 bg-discord-primary">
      <div className="relative flex w-[100%] h-12 border border-discord-primary border-r-0 shadow-lg">
        <div className="flex items-center space-x-2 p-2">
          <HashtagIcon className="w-7 text-gray-500" />
          <p className="my-1 cursor-default border-r border-gray-500 pr-5 font-bold text-discord-white">
            apple-discussion
          </p>
          <p className="hidden text-gray-400 lg:inline">
            Nice place to talk about apples
          </p>
        </div>

        <div className="absolute top-3 right-2 hidden items-center space-x-4 px-4 md:flex">
          <BellIcon className="w-6 cursor-pointer text-gray-300 hover:text-gray-100" />
          <PushPinIcon
            fontSize="medium"
            className="rotate-45 cursor-pointer text-gray-300 hover:text-gray-100"
          />
          <UserGroupIcon className="w-6 cursor-pointer text-gray-300 hover:text-gray-100" />
        </div>
      </div>
      {/* messages */}
      <Messages/>

      {/* input section */}
      <div className="absolute bottom-6 left-4 flex w-[90%] rounded-lg bg-gray-500 px-2 py-1">
        <PlusCircleIcon className="w-8 text-gray-400 hover:text-white cursor-pointer" />
        <input
          type="text"
          className="ml-3 h-8 w-[75%] rounded-lg border-none bg-transparent text-white caret-white outline-none"
          placeholder={`Message #channel name`}
        />

        <div className="hidden sm:flex items-center space-x-2">
          <GiftIcon className="w-6 text-gray-400 hover:text-white cursor-pointer" />
          <Gif className="text-gray-400 hover:text-white cursor-pointer" fontSize='large' />
          <StickyNote2Rounded className="rotate-180 text-gray-400 hover:text-white cursor-pointer" />
          <EmojiHappyIcon className="w-6 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

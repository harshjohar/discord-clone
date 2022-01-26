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
import { useSelector } from 'react-redux'
import { selectChannelId } from '../features/channelSlice'
import { useDocument } from 'react-firebase-hooks/firestore'
import { doc } from 'firebase/firestore'
import { db } from '../server/firebase'
import { selectServerId } from '../features/serverSlice'
export const Chat = () => {
  const channelId = useSelector(selectChannelId)
  const serverId = useSelector(selectServerId);
  const [channelDoc] = useDocument(channelId && doc(doc(db, 'servers', serverId), 'channels', channelId))

  const channelData = channelDoc?.data()
  return (
    <div className="relative h-screen  w-2/3 bg-discord-primary">
      <div className="relative flex h-12 w-[100%] border border-r-0 border-discord-primary shadow-lg">
        <div className="flex items-center space-x-2 p-2">
          <HashtagIcon className="w-7 text-gray-500" />
          <p className="my-1 cursor-default border-r border-gray-500 pr-5 font-bold text-discord-white">
            {channelData?.name}
          </p>
          <p className="hidden text-gray-400 lg:inline">
            {channelData?.description}
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

      <Messages />
      
      <div className="absolute bottom-6 left-4 flex w-[90%] rounded-lg bg-gray-500 px-2 py-1">
        <PlusCircleIcon className="w-8 cursor-pointer text-gray-400 hover:text-white" />
        <input
          type="text"
          className="ml-3 h-8 w-[75%] rounded-lg border-none bg-transparent text-white caret-white outline-none"
          placeholder={`Message #channel name`}
        />

        <div className="hidden items-center space-x-2 sm:flex">
          <GiftIcon className="w-6 cursor-pointer text-gray-400 hover:text-white" />
          <Gif
            className="cursor-pointer text-gray-400 hover:text-white"
            fontSize="large"
          />
          <StickyNote2Rounded className="rotate-180 cursor-pointer text-gray-400 hover:text-white" />
          <EmojiHappyIcon className="w-6 cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Channel } from './Channel'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { PlusIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { selectServerId } from '../features/serverSlice'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../server/firebase'
import { useDocument } from 'react-firebase-hooks/firestore'

export const Channels = () => {
  const serverId = useSelector(selectServerId);
  const [serverDoc] = useDocument(serverId && doc(db, 'servers', serverId));
  const serverName = serverDoc?.data()?.name;
  return (
    <div className="w-60 overflow-y-scroll bg-discord-topLeft scrollbar-hide">
      <div className="flex h-12 cursor-pointer items-center justify-between border border-discord-primary shadow-lg hover:bg-discord-primary">
        <p className="p-2 font-bold text-white">{serverName}</p>
        <KeyboardArrowDownIcon className="mx-4 w-5 text-white" />
      </div>
      <div className="relative my-4 flex items-center space-x-1 text-gray-500 hover:text-white">
        <ChevronRightRoundedIcon fontSize="small" className="px-1" />
        <p className="cursor-pointer text-sm">Channels</p>
        <PlusIcon className="absolute right-5 w-5 cursor-pointer" />
      </div>
      <div className="px-2">
        {/* Channels here */}
        <Channel channelName="apple discussion" />
        <Channel channelName="apple discussion" />
        <Channel channelName="apple discussion" />
        <Channel channelName="apple discussion" />
        <Channel channelName="apple discussion" />
        <Channel channelName="apple discussion" />
        <Channel channelName="apple discussion" />
      </div>
    </div>
  )
}

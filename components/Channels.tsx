import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Channel } from './Channel'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import {PlusIcon} from "@heroicons/react/solid"

export const Channels = () => {
  return (
    <div className="w-60 bg-discord-topLeft overflow-y-scroll scrollbar-hide">
      <div className="flex h-12 cursor-pointer items-center justify-between border border-discord-primary shadow-lg hover:bg-discord-primary">
        <p className="p-2 font-bold text-white">This is US</p>
        <KeyboardArrowDownIcon className="mx-4 w-5 text-white" />
      </div>
      <div className="flex items-center relative space-x-1 text-gray-500 hover:text-white my-4">
        <ChevronRightRoundedIcon fontSize='small' className='px-1'/>
        <p className='text-sm cursor-pointer'>Channels</p>
        <PlusIcon className="w-5 absolute right-5 cursor-pointer" />
      </div>
      <div className='px-2'>
          {/* Channels here */}
          <Channel channelName='apple discussion' />
          <Channel channelName='apple discussion' />
          <Channel channelName='apple discussion' />
          <Channel channelName='apple discussion' />
          <Channel channelName='apple discussion' />
          <Channel channelName='apple discussion' />
          <Channel channelName='apple discussion' />
      </div>
    </div>
  )
}

import React from 'react'
import { HashtagIcon } from '@heroicons/react/outline'
interface ChannelDetails {
  channelName: string
}

// compare channel id with redux and add active addributes accordingly

export const Channel = (props: ChannelDetails) => {
  return (
    <div className="m-2 flex cursor-pointer items-center space-x-2 rounded-lg py-1 text-gray-500 hover:bg-discord-primary hover:text-white">
      <HashtagIcon className="w-5" />
      <p className="flex items-center">{props.channelName}</p>
    </div>
  )
}

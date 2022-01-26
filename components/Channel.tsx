import React from 'react'
import {HashtagIcon} from "@heroicons/react/outline"
interface ChannelDetails {
  channelName: string,
}

// compare channel id with redux and add active addributes accordingly

export const Channel = (props: ChannelDetails) => {
  return (
    <div className="flex text-gray-500 py-1 cursor-pointer m-2 rounded-lg hover:bg-discord-primary hover:text-white items-center space-x-2">
      <HashtagIcon className='w-5'/>
      <p className="flex items-center">{props.channelName}</p>
    </div>
  )
}

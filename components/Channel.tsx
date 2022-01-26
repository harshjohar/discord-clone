import React from 'react'
import { HashtagIcon } from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'
import { enterChannel } from '../features/channelSlice'
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'
interface ChannelDetails {
  channel: QueryDocumentSnapshot<DocumentData>
}

// compare channel id with redux and add active addributes accordingly

export const Channel = (props: ChannelDetails) => {
  const dispatch = useDispatch()
  const selectChannel = () => {
    if (props.channel.id) {
      dispatch(enterChannel(props.channel.id))
    }
  }

  const channelName = props.channel.data().name
  return (
    <div
      onClick={selectChannel}
      className="m-2 flex cursor-pointer items-center space-x-2 rounded-lg py-1 text-gray-500 hover:bg-discord-primary hover:text-white"
    >
      <HashtagIcon className="w-5" />
      <p className="flex items-center">{channelName}</p>
    </div>
  )
}

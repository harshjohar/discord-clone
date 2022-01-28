import { doc } from 'firebase/firestore'
import React from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { useSelector } from 'react-redux'
import { selectServerId } from '../features/serverSlice'
import { db } from '../server/firebase'

export const LandingServer = () => {
  const serverId = useSelector(selectServerId)
  const [serverData] = useDocument(doc(db, 'servers', serverId))
  return (
    <div className="relative h-screen w-2/3 bg-discord-primary text-white flex flex-col-reverse md:p-10 px-4 lg:space-y-4">
      <div className='h-[80%]'> 
        <img src="/logos/playWumpus.png" alt="" className="sm:h-96 object-contain"/>
      </div>

      <div className='lg:space-y-3'>
        <p>Click on a channel to continue</p>
        <p>Invite People to your server by going into server settings!</p>
      </div>
      <h1 className='text-2xl'>
        Welcome to <span className='font-bold'>{serverData?.data()?.name}</span>
      </h1>
    </div>
  )
}

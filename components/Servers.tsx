import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../server/firebase'
import {PlusIcon} from "@heroicons/react/solid"

export const Servers = () => {
  const logout = () => {
    signOut(auth)
  }

  // try to make a hamburger type thing on mobile
  return (
    <div className="h-screen w-20 overflow-y-scroll bg-discord-sidebarleft scrollbar-hide">
      {/* top discord logo */}
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      {/* line */}
      <hr className="mx-4 border-discord-primary" />
      {/* servers */}
      <div className="flex flex-col items-center justify-center space-y-2 p-2">
        {/* servers here */}
      </div>
      {/* add server */}
      <div className="flex items-center justify-center p-2">
        <div className="serverIcon flex items-center justify-center bg-discord-primary text-[25px] text-discord-green hover:bg-discord-green hover:text-discord-primary">
          <PlusIcon className="w-5"/>
        </div>
      </div>

      {/* temporary logout button */}
      <button className="text-white" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

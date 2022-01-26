import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../server/firebase';

export const Servers = () => {
  const logout = () => {
    signOut(auth);
  }
  return (
    <div className="h-screen w-20 bg-discord-sidebarleft">
      {/* top discord logo */}
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      {/* line */}
      <hr className="mx-4 border-discord-primary" />
      {/* servers */}
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      {/* add server */}
      <div className="flex items-center justify-center p-2">
        <div className="serverIcon flex items-center justify-center bg-discord-primary text-[25px] text-discord-green hover:bg-discord-green hover:text-discord-primary">
          +
        </div>
      </div>

      {/* temporary logout button */}
      <button className='text-white' onClick={logout}>
        Logout
      </button>
    </div>
  )
}

import React from 'react'
import { MembersList } from './MembersList'

export const Members = () => {
  return (
    <div className="hidden h-screen w-60 flex-col bg-discord-topLeft md:flex">
      <div className="flex h-10 w-full items-center justify-center bg-discord-primary">
        <input
          type="text"
          className="h-7 border-none bg-discord-topLeft px-2 text-sm caret-white outline-none"
          placeholder="Search"
        />
      </div>

      <MembersList />
    </div>
  )
}

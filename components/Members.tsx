import React from 'react'
import { MembersList } from './MembersList'

export const Members = () => {
  return (
    <div className="hidden h-screen w-60 flex-col bg-discord-topLeft md:flex">
      <div className="flex w-full items-center justify-center border border-l-0 border-discord-primary bg-discord-primary p-[10px] shadow-md">
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

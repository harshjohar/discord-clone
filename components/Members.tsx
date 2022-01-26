import React from 'react'
import { MembersList } from './MembersList'

export const Members = () => {
  return (
    <div className="hidden h-screen w-60 flex-col bg-discord-topLeft md:flex">
      <div className="flex w-full items-center justify-center bg-discord-primary p-[10px] border border-discord-primary shadow-md border-l-0">
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

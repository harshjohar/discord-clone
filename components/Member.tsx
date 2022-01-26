import React from 'react'

interface MemberProp {
  displayName: string
  photoURL: string
}
export const Member = (props: MemberProp) => {
  return (
    <div className="flex cursor-pointer items-center hover:bg-discord-primary">
      <img src={props.photoURL} alt="dp" className="h-10 w-10 rounded-full" />
      <p className="mx-3 text-gray-500">{props.displayName}</p>
    </div>
  )
}

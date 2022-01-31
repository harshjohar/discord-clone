import React from 'react'
import { Avatar } from '@mui/material'
interface message {
  message: string
  timestamp: any
  displayName: string
  photoUrl: string
  postImage: string
}

export const Message = (props: message) => {
  console.log(props)
  return (
    <div className="flex hover:bg-discord-selectedOption">
      <div className="flex flex-col items-center justify-start p-2">
        {props.photoUrl ? (
          <img
            src={props.photoUrl}
            alt="dp"
            className="h-12 w-12 rounded-full"
          />
        ) : (
          <Avatar className='h-12'/>
        )}
      </div>

      <div className="ml-3">
        <p className="text-md cursor-pointer font-semibold text-white">
          {props.displayName}
          <span className="ml-4 cursor-default text-xs font-normal text-gray-400 hover:no-underline">
            {props.timestamp &&
              new Date(props.timestamp?.toDate()).toLocaleString()}
          </span>
        </p>

        {props.postImage && (
          <div>
            <img
              src={props.postImage}
              alt="image"
              className="w-52 cursor-pointer object-contain"
            />
          </div>
        )}

        <p className="text-white">{props.message}</p>
      </div>
    </div>
  )
}

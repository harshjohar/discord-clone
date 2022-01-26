import React from 'react'

interface message {
  message: string
  timestamp: number
  displayName: string
  photoUrl: string
}

export const Message = (props: message) => {
  return (
    <div className="flex hover:bg-discord-selectedOption">
      <div className="flex flex-col items-center justify-start p-2">
        <img src={props.photoUrl} alt="dp" className="h-12 w-12 rounded-full" />
      </div>

      <div className="ml-3">
        <p className="text-md cursor-pointer font-semibold text-white">
          {props.displayName}
          <span className='text-xs text-gray-400 font-normal hover:no-underline cursor-default ml-4'>{props.timestamp}</span>
        </p>

        <p className='text-white'>
            {props.message}
        </p>
      </div>
    </div>
  )
}

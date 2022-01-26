import React from 'react'

export const Loading = () => {
  return (
    <div className="h-screen w-screen bg-discord-primary grid place-items-center">
      <div className='w-80 bg-discord-selectedOption h-96 shadow-lg rounded-md grid place-items-center'>
        <img src="/logos/Discord-Logo-White.png" alt="" className='h-32 animate-loading-spin'/>
      </div>
    </div>
  )
}


import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../server/firebase'

export const Login = () => {
  const login = () => {
    signInWithPopup(auth, provider)
  }
  return (
      <div className="grid h-screen w-screen place-items-center bg-discord-primary">
        <div className="grid h-96 w-80 place-items-center rounded-md bg-discord-selectedOption shadow-lg">
          <img src="/logos/Discord-Logo-White.png" alt="" className="h-32" />
          <button
            onClick={login}
            className="text-md rounded-lg bg-discord-blurple p-4 px-10 text-white hover:opacity-90"
          >
            Sign In with Google
          </button>
        </div>
      </div>
  )
}

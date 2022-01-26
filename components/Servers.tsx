import { signOut } from 'firebase/auth'
import React from 'react'
import { auth, db } from '../server/firebase'
import { PlusIcon } from '@heroicons/react/solid'
import { addDoc, collection, doc, query, where } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ServerIcon } from './ServerIcon'

export const Servers = () => {
  const logout = () => {
    signOut(auth)
  }

  const [user] = useAuthState(auth)

  const addServer = () => {
    const serverName = prompt('Enter the name of new server')
    if (serverName) {
      addDoc(collection(db, 'servers'), {
        name: serverName,
        photo: null,
        owner: user?.uid,
        users: [user?.uid],
      }).then((server) => {
        addDoc(collection(doc(db, 'servers', server.id), 'channels'), {
          name: 'general',
        })
      })
    }
  }

  const [servers] = useCollection(
    query(
      collection(db, 'servers'),
      where('users', 'array-contains', user?.uid)
    )
  )

  // try to make a hamburger type thing on mobile
  return (
    <div className="h-screen w-20 overflow-y-scroll bg-discord-sidebarleft scrollbar-hide">
      {/* top discord logo */}
      <div className="flex items-center justify-center p-2">
        <img src="/dp.png" alt="DC" className="serverIcon" />
      </div>
      <hr className="mx-4 border-discord-primary" />
      
      <div className="flex flex-col items-center justify-center space-y-2 p-2">
        {servers?.docs.map((doc) => (
          <ServerIcon doc={doc} key={doc.id} />
        ))}
      </div>
      {/* add server */}
      <div className="flex items-center justify-center p-2" onClick={addServer}>
        <div className="serverIcon flex items-center justify-center bg-discord-primary text-[25px] text-discord-green hover:bg-discord-green hover:text-discord-primary">
          <PlusIcon className="w-5" />
        </div>
      </div>

      {/* temporary logout button */}
      <button className="text-white" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

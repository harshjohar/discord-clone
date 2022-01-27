import React from 'react'
import { auth, db } from '../server/firebase'
import { PlusIcon } from '@heroicons/react/solid'
import { addDoc, collection, doc, query, where } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ServerIcon } from './ServerIcon'
import { useDispatch, useSelector } from 'react-redux'
import { exitServer, selectServerId } from '../features/serverSlice'
import ExploreIcon from '@mui/icons-material/Explore';
import { useRouter } from 'next/router'

export const Servers = () => {

  const [user] = useAuthState(auth)

  const addServer = () => {
    const serverName = prompt('Enter the name of new server')
    if (serverName) {
      addDoc(collection(db, 'servers'), {
        name: serverName,
        photo: null,
        owner: user?.uid,
        users: [user?.uid],
        community: false
      }).then((server) => {
        addDoc(collection(doc(db, 'servers', server.id), 'channels'), {
          name: 'general',
        })
      })
    }
  }

  const router = useRouter();

  const joinServer = () => {
    router.push('/explore')
  }

  const [servers] = useCollection(
    query(
      collection(db, 'servers'),
      where('users', 'array-contains', user?.uid)
    )
  )

  const dispatch = useDispatch()
  const currServer = useSelector(selectServerId);

  const removeDispatch = () => {
    dispatch(exitServer())
  }

  // try to make a hamburger type thing on mobile
  return (
    <div className="h-screen w-20 overflow-y-scroll bg-discord-sidebarleft scrollbar-hide">
      <div className={`flex items-center justify-center p-1 md:p-3 bg-discord-primary m-2 rounded-full hover:rounded-[1rem] cursor-pointer hover:bg-discord-blurple transition-all  ${!currServer && "rounded-[1rem] bg-discord-blurple"}`}>
        <img
          src="/logos/Discord-Logo-White.svg"
          alt="DC"
          className="h-8 w-8"
          onClick={removeDispatch}
        />
      </div>
      <hr className="mx-4 border-discord-primary" />

      <div className="flex flex-col items-center justify-center space-y-2 p-2">
        {servers?.docs.map((doc) => (
          <ServerIcon doc={doc} key={doc.id} />
        ))}
      </div>
      
      <div className="flex items-center justify-center p-2" onClick={addServer}>
        <div className="serverIcon flex items-center justify-center bg-discord-primary text-[25px] text-discord-green hover:bg-discord-green hover:text-discord-primary">
          <PlusIcon className="w-5" />
        </div>
      </div>
      <div className="flex items-center justify-center p-2" onClick={joinServer}>
        <div className="serverIcon flex items-center justify-center bg-discord-primary text-[25px] text-discord-green hover:bg-discord-green hover:text-discord-primary">
          <ExploreIcon/>
        </div>
      </div>
    </div>
  )
}

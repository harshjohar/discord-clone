import { collection, orderBy, query, where } from 'firebase/firestore'
import Head from 'next/head'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { CommunityServerCard } from '../components/CommunityServerCard'
import { DiscoverList } from '../components/DiscoverList'
import { Servers } from '../components/Servers'
import { auth, db } from '../server/firebase'

const Explore = () => {
  const [servers] = useCollection(
    query(collection(db, 'servers'), where('community', '==', true))
  )

  return (
    <div>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen overflow-hidden bg-discord-primary">
        <Servers />
        <DiscoverList />
        <div className="h-screen w-2/3 overflow-y-scroll scrollbar-hide ml-auto mr-auto">
          <div className="grid h-1/3 w-full place-items-center rounded-xl bg-gradient-to-t from-discord-blurple">
            <p className="text-md text-white lg:text-4xl ">
              Find Your community on discord
            </p>
          </div>
          <div className='mt-3 grid grid-cols-3 space-x-2'>
            {servers?.docs?.map((doc) => (
              <CommunityServerCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore

import { collection, query, where } from 'firebase/firestore'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../server/firebase'
import { InviteServer } from './InviteServer'

export const LandingProfile = () => {
  const [user] = useAuthState(auth)
  const [invites] = useCollection(
    query(collection(db, 'invites'), where('emailId', '==', user?.email))
  )
  return (
    <div className="relative h-screen  w-2/3 bg-discord-primary text-white">
      <div className="p-4">
        <h1 className="my-4 text-xl font-bold">Invitations</h1>
        {invites?.docs?.length ? (
          invites?.docs?.map((doc) => <InviteServer doc={doc} />)
        ) : (
          <p>You have no inivitation from any server, Join a community NOW!</p>
        )}
      </div>
    </div>
  )
}

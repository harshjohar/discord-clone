import { collection, query, where } from 'firebase/firestore'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../server/firebase'
import { InviteServer } from './InviteServer'

export const LandingProfile = () => {
  const [user] = useAuthState(auth);
  const [invites] = useCollection(query(collection(db, 'invites'), where('emailId', '==', user?.email)))
  return (
    <div className="relative h-screen  w-2/3 bg-discord-primary text-white">
      <div>
        <h1>Invitations</h1>
        {invites?.docs?.map(doc=> (
          <InviteServer doc={doc} />
        ))}
      </div>
    </div>
  )
}

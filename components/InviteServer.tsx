import {
  arrayUnion,
  deleteDoc,
  doc,
  DocumentData,
  QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { auth, db } from '../server/firebase'

interface inviteDoc {
  doc: QueryDocumentSnapshot<DocumentData>
}
export const InviteServer = (props: inviteDoc) => {
  const invitation = props.doc.data()
  const [serverInfo] = useDocument(doc(db, 'servers', invitation.serverId))
  const serverName = serverInfo?.data()?.name
  const serverDesc = serverInfo?.data()?.description
  const serverId = serverInfo?.id
  const [user] = useAuthState(auth)

  const acceptInvite = () => {
    serverId &&
      setDoc(
        doc(db, 'servers', serverId),
        {
          users: arrayUnion(user?.uid),
        },
        { merge: true }
      ).then(()=> {
        deleteDoc(doc(db, 'invites', props.doc.id))
      })
  }
  const rejectInvite = () => {
    deleteDoc(doc(db, 'invites', props.doc.id))
  }

  return (
    <div className='p-3 bg-discord-sidebarleft m-2 rounded-xl'>
      <p className='text-lg cursor-default'>{serverName}</p>
      <p className='text-sm'>{serverDesc}</p>
      <div className="space-x-3 mt-2">
        <button onClick={acceptInvite} className='p-1 bg-discord-primary rounded-md cursor-pointer hover:bg-discord-green hover:text-discord-black'>Accept</button>
        <button onClick={rejectInvite} className='p-1 bg-discord-primary rounded-md cursor-pointer hover:bg-discord-red'>Reject</button>
      </div>
    </div>
  )
}

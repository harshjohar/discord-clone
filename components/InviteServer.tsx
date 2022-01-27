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
    <div>
      <p>{serverName}</p>
      <div className="space-x-3">
        <button onClick={acceptInvite}>Accept</button>
        <button onClick={rejectInvite}>Reject</button>
      </div>
    </div>
  )
}

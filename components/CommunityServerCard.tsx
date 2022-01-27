import { Avatar } from '@mui/material'
import {
  arrayUnion,
  doc,
  DocumentData,
  QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { auth, db } from '../server/firebase'

interface serverDoc {
  doc: QueryDocumentSnapshot<DocumentData>
}

export const CommunityServerCard = (props: serverDoc) => {
  const colors = ['red', 'green', 'fuchsia', 'blurple']
  const [color, setColor] = useState('')
  const [user] = useAuthState(auth)

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * 4)])
  })

  const joinServer = () => {
    setDoc(
      doc(db, 'servers', props.doc.id),
      {
        users: arrayUnion(user?.uid),
      },
      { merge: true }
    )
  }
  return (
    <div className="relative h-80 w-auto rounded-xl bg-discord-selectedOption">
      <div
        className={`h-1/2 bg-gradient-to-b from-discord-${color} rounded-xl`}
      ></div>
      <div className="absolute top-1/3 p-4">
        {props.doc.data().photo ? (
          <img
            src={props.doc.data().photo}
            alt=""
            className="h-10 w-10 rounded-lg"
          />
        ) : (
          <Avatar className="h-10 w-10 rounded-lg">
            {props.doc.data().name[0]}
          </Avatar>
        )}
      </div>
      <div className="h-1/4 p-3">
        <p className="text-lg font-bold text-white">{props.doc.data().name}</p>
        <p>{props.doc.data().description}</p>
      </div>

      <div className="p-2">
        {!props.doc.data().users.includes(user?.uid) ? (
          <button
            className="w-full cursor-pointer rounded-md bg-discord-green p-2 px-4 font-bold text-discord-black"
            onClick={joinServer}
          >
            JOIN!
          </button>
        ) : (
          <button className="w-full cursor-default rounded-md bg-discord-blurple p-2 px-4 font-bold text-discord-white">
            JOINED!
          </button>
        )}
      </div>
      <div className="px-2 text-gray-400">
        <p>Members: {props.doc.data().users.length}</p>
      </div>
    </div>
  )
}

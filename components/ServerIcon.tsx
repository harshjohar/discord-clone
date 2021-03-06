import { Avatar } from '@mui/material'
import { QueryDocumentSnapshot, DocumentData, doc, limit, query, collection } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { enterChannel, exitChannel } from '../features/channelSlice'
import { enterServer, selectServerId } from '../features/serverSlice'
import { db } from '../server/firebase'

interface serverProp {
  doc: QueryDocumentSnapshot<DocumentData>
}
export const ServerIcon = (props: serverProp) => {
  const dispatch = useDispatch()
  const currServer = useSelector(selectServerId)
  const serverInfo = props.doc.data()
  const router = useRouter();
  const selectServer = async () => {
    if (props.doc.id) {
      if(router.pathname === '/explore') {
        router.push('/')
      }
      dispatch(enterServer(props.doc.id))
      dispatch(exitChannel())
    }
  }
  return (
    <div onClick={selectServer}>
      {serverInfo.photo ? (
        <img
          src={serverInfo.photo}
          alt=""
          className={`serverIcon ${(props.doc.id === currServer) ? 'rounded-xl' : ''}`}
        />
      ) : (
        <Avatar className={`serverIcon ${(props.doc.id === currServer) ? 'rounded-xl' : ''}`}>{serverInfo.name[0]}</Avatar>
      )}
    </div>
  )
}

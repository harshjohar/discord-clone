import { Avatar } from '@mui/material'
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enterServer, selectServerId } from '../features/serverSlice'

interface serverProp {
  doc: QueryDocumentSnapshot<DocumentData>
}
export const ServerIcon = (props: serverProp) => {
  const dispatch = useDispatch()
  const currServer = useSelector(selectServerId)
  const serverInfo = props.doc.data()
  const selectServer = () => {
    if (props.doc.id) {
      dispatch(enterServer(props.doc.id))
    }
  }
  return (
    <div onClick={selectServer}>
      {serverInfo.photo ? (
        <img
          src={serverInfo.photo}
          alt=""
          className={`serverIcon ${props.doc.id === currServer ? '' : ''}`}
        />
      ) : (
        <Avatar className="serverIcon">{serverInfo.name[0]}</Avatar>
      )}
    </div>
  )
}

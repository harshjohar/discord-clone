import { Avatar } from '@mui/material'
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'
import React from 'react'
import { useDispatch } from 'react-redux'
import { enterServer } from '../features/serverSlice'

interface serverProp {
  doc: QueryDocumentSnapshot<DocumentData>
}
export const ServerIcon = (props: serverProp) => {
  const dispatch = useDispatch()
  const serverInfo = props.doc.data()
  const selectServer = () => {
    if (props.doc.id) {
      dispatch(enterServer(props.doc.id))
    }
  }
  return (
    <div onClick={selectServer}>
      {serverInfo.photo ? (
        <img src={serverInfo.photo} alt="" className="serverIcon" />
      ) : (
        <Avatar className="serverIcon">{serverInfo.name[0]}</Avatar>
      )}
    </div>
  )
}

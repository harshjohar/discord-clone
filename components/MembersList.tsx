import { doc } from 'firebase/firestore'
import React from 'react'
import { useDocument } from 'react-firebase-hooks/firestore'
import { useSelector } from 'react-redux'
import { selectServerId } from '../features/serverSlice'
import { db } from '../server/firebase'
import { Member } from './Member'

export const MembersList = () => {
  const serverId = useSelector(selectServerId)

  const serverData = useDocument(doc(db, 'servers', serverId))

  const members = serverData?.[0]?.data()?.users

  return (
    <div className="mt-3 flex flex-col space-y-3 overflow-y-scroll p-2 scrollbar-hide">
      <h2 className="text-gray-500">MEMBERS - {members?.length}</h2>
      {members?.map((member: any, i: number) => {
        return <Member key={i} memberId={member} />
      })}
    </div>
  )
}

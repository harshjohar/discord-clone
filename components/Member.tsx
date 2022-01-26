import { doc } from 'firebase/firestore';
import React from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../server/firebase';

interface MemberProp {
  memberId: string
}
export const Member = (props: MemberProp) => {
  const photoUrl = "/dp.png"
  const displayName = "harsh"

  const memberId = props.memberId;

  const [data] = useDocument(doc(db, 'users', memberId));

  const user = data?.data();

  return (
    <div className="flex cursor-pointer items-center hover:bg-discord-primary">
      {user&& <img src={user?.photoURL} alt="dp" className="h-10 w-10 rounded-full" />}
      <p className="mx-3 text-gray-500">{user?.displayName}</p>
    </div>
  )
}

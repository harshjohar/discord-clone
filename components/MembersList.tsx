import React from 'react'
import { Member } from './Member'

// add member count

export const MembersList = () => {
  return (
    <div className="flex flex-col space-y-3 overflow-y-scroll p-2 scrollbar-hide">
      <h2 className="text-gray-500">MEMBERS - 69</h2>
      <Member displayName="Pikachu" photoURL="/dp.png" />
      <Member displayName="Pikachu" photoURL="/dp.png" />
      <Member displayName="Pikachu" photoURL="/dp.png" />
      <Member displayName="Pikachu" photoURL="/dp.png" />
      <Member displayName="Pikachu" photoURL="/dp.png" />
      <Member displayName="Pikachu" photoURL="/dp.png" />
    </div>
  )
}

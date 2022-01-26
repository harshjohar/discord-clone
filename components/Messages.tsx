import {
  collection,
  DocumentData,
  DocumentReference,
  orderBy,
  query,
} from 'firebase/firestore'
import React, { useRef, useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Message } from './Message'

interface channelProp {
  channelDoc: DocumentReference<DocumentData>
}

export const Messages = (props: channelProp) => {
  const endRef = useRef<HTMLDivElement>(null)

  const [messages] = useCollection(
    query(collection(props.channelDoc, 'messages'), orderBy('timestamp', 'asc'))
  )
  useEffect(() => {
    endRef?.current?.scrollIntoView()
  }, [messages])
  return (
    <div className="h-[80%] overflow-y-scroll scroll-smooth scrollbar-hide">
      {messages?.docs?.map((doc) => {
        const { message, timestamp, displayName, photoUrl } = doc.data()
        return (
          <Message
            key={doc.id}
            message={message}
            timestamp={timestamp}
            displayName={displayName}
            photoUrl={photoUrl}
          />
        )
      })}

      {/* scroll into view */}
      <div ref={endRef} />
    </div>
  )
}

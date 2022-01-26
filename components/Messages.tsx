import React, { useRef, useEffect } from 'react';
import { Message } from './Message';

export const Messages = () => {
    const endRef=useRef<HTMLDivElement>(null);

    useEffect(()=> {
        endRef?.current?.scrollIntoView();
    }, [])
  return <div className='h-[80%] overflow-y-scroll scrollbar-hide scroll-smooth'>
      <Message message='hi there' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hellooo there' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='heyy' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='hihihi' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='heehee' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='heehee' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='heehee' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />
      <Message message='heehee' timestamp={22} photoUrl='/dp.png' displayName='Pikachu' />


      {/* scroll into view */}
      <div ref={endRef} />
  </div>;
};

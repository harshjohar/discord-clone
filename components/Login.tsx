import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../server/firebase';

export const Login = () => {
    const login =() => {
        signInWithPopup(auth, provider);
    }
  return <div>
      <button onClick={login}>Login</button>
  </div>;
};

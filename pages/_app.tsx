import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../server/firebase'
import { Login } from '../components/Login'
import { Loading } from '../components/Loading'
import { FC, useEffect } from 'react'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { wrapper } from '../app/store'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, 'users', user.uid),
        {
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
          lastSeen: serverTimestamp(),
        },
        {
          merge: true,
        }
      )
    }
  }, [user])

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Login />
  }
  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(WrappedApp);

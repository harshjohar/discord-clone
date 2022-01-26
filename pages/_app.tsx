import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../server/firebase'
import { Login } from '../components/Login'
import { Loading } from '../components/Loading'
import { useEffect } from 'react'
import { doc, setDoc } from 'firebase/firestore'

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, 'users', user.uid),
        {
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
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
  return <Component {...pageProps} />
}

export default MyApp

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDKYynSuCy_bzRBL6ARe8YHAH1NbGyg43g',
  authDomain: 'discord-harsh.firebaseapp.com',
  projectId: 'discord-harsh',
  storageBucket: 'discord-harsh.appspot.com',
  messagingSenderId: '1013927994106',
  appId: '1:1013927994106:web:cb996ef7799c6317a1df43',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
const provider = new GoogleAuthProvider()

export { auth, db, provider }

import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../server/firebase'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectServerId } from '../features/serverSlice'
import { Switch } from '@mui/material'
import { useDocument } from 'react-firebase-hooks/firestore'

const Server = () => {
  useEffect(() => {
    if (!serverId) {
      router.push('/')
    }
  })
  const router = useRouter()
  const [emailId, setEmailId] = useState('')
  const [user] = useAuthState(auth)
  const serverId = useSelector(selectServerId)
  const inviteToServer = async (e: any) => {
    e.preventDefault()
    const colRef = collection(db, 'invites')

    const check = await getDocs(
      query(collection(db, 'users'), where('email', '==', emailId))
    )
    if (check.docs.length === 0) {
      alert('Please Enter a valid user!')
      return
    }

    if (emailId.length > 0) {
      addDoc(colRef, {
        emailId,
        serverId,
      })
        .then(() => {
          setEmailId('')
        })
        .catch((err) => console.log(err))
    }
  }
  const serverInfo =serverId && getDoc(doc(db, 'servers', serverId))
  const [checked, setChecked] = useState(serverInfo?.[0]?.data()?.community)
  const handleChange = (event: any) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    if (checked) {
      serverId &&
        setDoc(
          doc(db, 'servers', serverId),
          {
            community: true,
          },
          { merge: true }
        )
    } else {
      serverId &&
        setDoc(
          doc(db, 'servers', serverId),
          {
            community: false,
          },
          { merge: true }
        )
    }
  }, [checked])

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-discord-primary">
      <Head>
        <title>Server Properties</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>

      <div className="pl-auto flex h-screen w-[30%] flex-col space-y-2 bg-discord-sidebarleft pt-[15%] text-discord-white md:px-10">
        <h1 className="text-md md:text-lg lg:text-2xl">Invite a new Member</h1>
        <form>
          <input
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="w-full bg-discord-primary p-3"
          />
          <button type="submit" onClick={inviteToServer} className="hidden">
            Invite!
          </button>
        </form>
      </div>
      <div className="relative flex h-screen w-[70%] flex-col p-16">
        <h1>Server Info</h1>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <p>Toggle community</p>
      </div>
      <div
        className="absolute top-10 right-10 flex h-10 w-10 items-center rounded-full p-2 hover:bg-gray-200 hover:bg-opacity-50 hover:text-discord-primary"
        onClick={() => router.push('/')}
      >
        <CloseIcon className="cursor-pointer text-white" />
      </div>
    </div>
  )
}

export default Server

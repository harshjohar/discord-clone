import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../server/firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { exitServer, selectServerId } from '../features/serverSlice'
import { useDocument } from 'react-firebase-hooks/firestore'
import { Delete } from '@mui/icons-material'

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
  const dispatch = useDispatch()

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
  const [serverInfo] = useDocument(doc(db, 'servers', serverId))
  const [checked, setChecked] = useState(serverInfo?.data()?.community)

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

  const deleteServer = () => {
    const sure = confirm('Are you sure?')
    if (sure && serverId) {
      router.push('/')
      deleteDoc(doc(db, 'servers', serverId)).then(() => {
        dispatch(exitServer())
        alert('Server Deleted!')
      })
    }
  }

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-discord-primary">
      <Head>
        <title>Server Properties</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>

      <div className="pl-auto flex h-screen w-[50%] flex-col space-y-2 bg-discord-sidebarleft pt-[15%] text-discord-white md:w-[30%] md:px-10">
        <h1 className="text-md md:text-lg lg:text-2xl">Invite a new Member</h1>
        <form>
          <input
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="md:w-full bg-discord-primary p-3 w-[90%]"
          />
          <button type="submit" onClick={inviteToServer} className="hidden">
            Invite!
          </button>
        </form>
      </div>
      <div className="relative flex h-screen w-[50%] flex-col md:p-16 p-6 py-16 md:w-[70%] mt-2">
        <h1 className="text-3xl text-white hidden md:inline">Server Info</h1>
        <div className="flex h-[30%] flex-col rounded-xl bg-discord-sidebarleft md:p-3 text-gray-400 p-2">
          <h2 className="text-2xl text-white">{serverInfo?.data()?.name}</h2>
          <p>Members: {serverInfo?.data()?.users?.length}</p>
          <p className="mt-5 text-discord-yellow hidden md:inline">
            {!checked
              ? 'Want to make your private server a community?'
              : 'Want this this server to be private again?'}
          </p>
          <div className="flex md:space-x-4 md:flex-row flex-col">
            <button
              onClick={() => setChecked(false)}
              className={`mt-2 rounded-lg bg-discord-primary p-2  ${
                !checked && 'text-discord-green'
              }`}
            >
              Private
            </button>
            <button
              onClick={() => setChecked(true)}
              className={`mt-2 rounded-lg bg-discord-primary p-2  ${
                checked && 'text-discord-red'
              }`}
            >
              Community
            </button>
          </div>
        </div>
        {serverInfo?.data()?.owner && (
          <button
            onClick={deleteServer}
            className="mt-4 text-white flex w-fit items-center rounded-md bg-discord-red p-3 hover:opacity-80"
          >
            <Delete /> Delete Server
          </button>
        )}
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

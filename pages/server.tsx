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
import { Avatar } from '@mui/material'

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

  const setCommunity = (check: boolean) => {
    if (check) {
      serverId &&
        setDoc(
          doc(db, 'servers', serverId),
          {
            community: true,
          },
          { merge: true }
        ).then(() => {
          setChecked(true)
        })
    } else {
      serverId &&
        setDoc(
          doc(db, 'servers', serverId),
          {
            community: false,
          },
          { merge: true }
        ).then(() => {
          setChecked(false)
        })
    }
  }

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
  console.log(serverInfo?.data()?.community)
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
            className="w-[90%] bg-discord-primary p-3 md:w-full"
          />
          <button type="submit" onClick={inviteToServer} className="hidden">
            Invite!
          </button>
        </form>
      </div>
      <div className="relative mt-2 flex h-screen w-[50%] flex-col p-6 py-16 md:w-[70%] md:p-16">
        <h1 className="hidden text-3xl text-white md:inline">
          Server Info{' '}
          <span>
            {serverInfo?.data()?.community ? '(community)' : '(private)'}
          </span>
        </h1>
        <div className="flex flex-col rounded-xl bg-discord-sidebarleft p-2 text-gray-400 md:p-3">
          <div className="flex w-full justify-between">
            <div>
              <h2 className="text-2xl text-white">
                {serverInfo?.data()?.name}{' '}
              </h2>
              <p>Members: {serverInfo?.data()?.users?.length}</p>
            </div>
            <div className="cursor-pointer hover:opacity-90">
              {serverInfo?.data()?.photo ? (
                <img src={serverInfo?.data()?.photo} alt="" />
              ) : (
                <Avatar>{serverInfo?.data()?.name?.[0]}</Avatar>
              )}
            </div>
          </div>
          <p className="mt-5 hidden text-discord-yellow md:inline">
            {!checked
              ? 'Want to make your private server a community?'
              : 'Want this this server to be private again?'}
          </p>
          {serverInfo?.data()?.owner === user?.uid ? (
            <div className="flex flex-col md:flex-row md:space-x-4">
              <button
                onClick={() => setCommunity(false)}
                className={`mt-2 rounded-lg bg-discord-primary p-2  ${'text-discord-green'}`}
              >
                Private
              </button>
              <button
                onClick={() => setCommunity(true)}
                className={`mt-2 rounded-lg bg-discord-primary p-2  ${'text-discord-red'}`}
              >
                Community
              </button>
            </div>
          ) : (
            <p>CONTACT SERVER OWNER THEN!</p>
          )}
        </div>
        {serverInfo?.data()?.owner === user?.uid && (
          <button
            onClick={deleteServer}
            className="mt-4 flex w-fit items-center rounded-md bg-discord-red p-3 text-white hover:opacity-80"
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

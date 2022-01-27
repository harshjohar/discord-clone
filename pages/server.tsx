import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const server = () => {
  const router = useRouter()

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-discord-primary">
      <Head>
        <title>Server Properties</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>

      <div className="pl-auto flex h-screen w-[30%] flex-col space-y-2 bg-discord-sidebarleft pt-[15%] text-discord-white md:px-10">
        
      </div>
      <div className="relative flex h-screen w-[70%] flex-col p-16">
        
      </div>
    </div>
  )
}

export default server

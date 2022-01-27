import {
  MusicNote,
  LiveTv,
  SportsEsports,
  School,
  Hub,
  Explore,
} from '@mui/icons-material'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React from 'react'

export const DiscoverList = () => {
  return (
    <div className="relative h-screen w-60 space-y-3 overflow-hidden bg-discord-topLeft">
      <h1 className="p-3 text-2xl font-extrabold text-white">Discover</h1>
      <DiscoverItem item="Home" Icon={Explore} active={true} />
      <DiscoverItem item="Gaming" Icon={SportsEsports} active={false} />
      <DiscoverItem item="Music" Icon={MusicNote} active={false} />
      <DiscoverItem item="Education" Icon={School} active={false} />
      <DiscoverItem item="Entertainment" Icon={LiveTv} active={false} />
      <DiscoverItem item="Student Hubs" Icon={Hub} active={false} />
    </div>
  )
}

interface discoverItem {
  item: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  active: boolean
}

const DiscoverItem = (props: discoverItem) => {
  const Icon = props.Icon
  return (
    <div className={`flex items-center p-2 text-gray-400 m-2 rounded-lg cursor-pointer font-semibold ${props.active && "bg-discord-blurple"}`}>
      <Icon className={`mr-2 ${props.active && "text-white"}`} />
      <p className={`${props.active && "text-white"}`}>{props.item}</p>
    </div>
  )
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface ChannelState {
    channelId: any
  }
  
  const initialState: ChannelState = {
    channelId: null,
  }
  
  export const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
      enterChannel: (state, actions:PayloadAction<string>) => {
        state.channelId = actions.payload
      }
    },
  })
  
  export const { enterChannel } = channelSlice.actions
  
  export const selectChannelId = (state: RootState) => state.channel.channelId
  
  export default channelSlice.reducer
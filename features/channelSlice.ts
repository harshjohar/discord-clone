import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
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
      }, 
      exitChannel: (state)=> {
        state.channelId=null
      }
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
  })
  
  export const { enterChannel, exitChannel } = channelSlice.actions
  
  export const selectChannelId = (state: RootState) => state.channel.channelId
  
  export default channelSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { HYDRATE } from "next-redux-wrapper";

interface ServerState {
  serverId: any
}

const initialState: ServerState = {
  serverId: null,
}

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    enterServer: (state, actions:PayloadAction<string>) => {
      state.serverId = actions.payload
    },
    exitServer: (state) => {
      state.serverId = null
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

export const { enterServer, exitServer } = serverSlice.actions

export const selectServerId = (state: RootState) => state.server.serverId

export default serverSlice.reducer
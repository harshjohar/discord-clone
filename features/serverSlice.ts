import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

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
    }
  },
})

export const { enterServer } = serverSlice.actions

export const selectServerId = (state: RootState) => state.server.serverId

export default serverSlice.reducer
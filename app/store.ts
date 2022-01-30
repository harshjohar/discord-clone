import { configureStore } from '@reduxjs/toolkit'
import serverReducer from "../features/serverSlice"
import channelReducer from "../features/channelSlice"
import { createWrapper } from 'next-redux-wrapper'

export const store =()=> configureStore({
  reducer: {
    server: serverReducer,
    channel: channelReducer
  },
})

export type AppStore = ReturnType<typeof store>

export const wrapper = createWrapper<AppStore>(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
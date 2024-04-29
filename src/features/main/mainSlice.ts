import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  global: boolean
}

const initialState: MainState = {
  global: false,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setGlobal: (state) => {
      state.global = !state.global
    },
  },
})

export const { setGlobal } = mainSlice.actions

export default mainSlice.reducer

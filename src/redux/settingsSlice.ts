import { createSlice } from '@reduxjs/toolkit'

type SettingsState = {
    theme?: 'light' | 'dark' | 'system'
}

const initialState = {
    theme: 'system',
} satisfies SettingsState as SettingsState

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
    },
})

export const { setTheme } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer

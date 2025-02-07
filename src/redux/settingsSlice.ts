import { createSlice } from '@reduxjs/toolkit'

type SettingsState = {
    theme?: 'light' | 'dark' | 'system'
    effectiveTheme?: 'light' | 'dark'
}

const initialState = {
    theme: 'system',
    effectiveTheme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
} satisfies SettingsState as SettingsState

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
            state.effectiveTheme =
                action.payload === undefined || action.payload === 'system'
                    ? window.matchMedia('(prefers-color-scheme: dark)').matches
                        ? 'dark'
                        : 'light'
                    : action.payload
        },
        setEffectiveTheme: (state, action) => {
            state.effectiveTheme = action.payload
        },
    },
})

export const { setTheme, setEffectiveTheme } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer

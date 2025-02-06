import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './filtersSlice'
import { settingsReducer } from './settingsSlice'

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        settings: settingsReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

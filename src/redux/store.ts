import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './filtersSlice'
import { settingsReducer } from './settingsSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { persistStore } from 'redux-persist'

const persistSettingsConfig = {
    key: 'settings',
    storage,
}

const persistedSettingsReducer = persistReducer(
    persistSettingsConfig,
    settingsReducer
)

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        settings: persistedSettingsReducer,
    },
})

const persistor = persistStore(store)

export default store
export { persistor }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

import { Routes, Route } from 'react-router'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { useEffect, useRef } from 'react'
import { setEffectiveTheme } from './redux/settingsSlice'

function App() {
    const theme = useAppSelector((state) => state.settings.theme)
    const dispatch = useAppDispatch()
    const darkModeListenerEnabledRef = useRef(false)

    useEffect(() => {
        document.body.classList.remove('light', 'dark')
        if (theme === undefined || theme === 'system') {
            const darkModePreference = window.matchMedia(
                '(prefers-color-scheme: dark)'
            )
            if (darkModeListenerEnabledRef.current === false) {
                darkModePreference.addEventListener('change', (e) => {
                    document.body.classList.remove('light', 'dark')
                    if (e.matches) {
                        document.body.classList.add('dark')
                        dispatch(setEffectiveTheme('dark'))
                    } else {
                        dispatch(setEffectiveTheme('light'))
                    }
                })
                darkModeListenerEnabledRef.current = true
            }
            if (darkModePreference.matches) document.body.classList.add('dark')
        } else {
            document.body.classList.add(theme)
        }
    }, [theme])

    return (
        <div className=" text-text-primary-light dark:text-text-primary-dark w-dvw h-dvh flex bg-bg-light dark:bg-bg-dark">
            <Sidebar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </div>
    )
}

export default App

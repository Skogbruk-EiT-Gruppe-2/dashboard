import { Routes, Route } from 'react-router'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import { useAppSelector } from './hooks/redux'
import { useEffect } from 'react'

function App() {
    const theme = useAppSelector((state) => state.settings.theme)

    useEffect(() => {
        console.log(theme)
        document.body.classList.remove('light', 'dark')
        if (theme === undefined || theme === 'system') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches)
                document.body.classList.add('dark')
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

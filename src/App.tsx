import { Routes, Route } from 'react-router'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'

function App() {
    return (
        <div className=" text-text-primary-light dark:text-text-primary-dark w-dvw h-dvh flex bg-bg-light dark:bg-bg-dark">
            <Sidebar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App

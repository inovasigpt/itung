import { Routes, Route, Navigate } from 'react-router-dom'
import { useProfile } from './contexts/ProfileContext'
import Home from './pages/Home'
import ProfileSelect from './pages/ProfileSelect'
import DifficultySelect from './pages/DifficultySelect'
import Game from './pages/Game'
import GameSummary from './pages/GameSummary'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

function App() {
    const { currentProfile } = useProfile()

    return (
        <div className="min-h-screen bg-kid-bg">
            <Routes>
                {/* Profile Selection - First screen if no profile selected */}
                <Route path="/profiles" element={<ProfileSelect />} />

                {/* Main Game Routes - Redirect to profiles if not selected */}
                <Route
                    path="/"
                    element={currentProfile ? <Home /> : <Navigate to="/profiles" replace />}
                />
                <Route
                    path="/difficulty/:operation"
                    element={currentProfile ? <DifficultySelect /> : <Navigate to="/profiles" replace />}
                />
                <Route
                    path="/game/:operation/:difficulty"
                    element={currentProfile ? <Game /> : <Navigate to="/profiles" replace />}
                />
                <Route
                    path="/summary"
                    element={currentProfile ? <GameSummary /> : <Navigate to="/profiles" replace />}
                />

                {/* Auth Routes - Optional */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </div>
    )
}

export default App

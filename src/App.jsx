import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DifficultySelect from './pages/DifficultySelect'
import Game from './pages/Game'
import GameSummary from './pages/GameSummary'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

function App() {
    return (
        <div className="min-h-screen bg-kid-bg">
            <Routes>
                {/* Main Game Routes - No auth required */}
                <Route path="/" element={<Home />} />
                <Route path="/difficulty/:operation" element={<DifficultySelect />} />
                <Route path="/game/:operation/:difficulty" element={<Game />} />
                <Route path="/summary" element={<GameSummary />} />

                {/* Auth Routes - Optional */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </div>
    )
}

export default App

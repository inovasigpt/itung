import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Header({ title }) {
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (error) {
            console.error('Failed to logout:', error)
        }
    }

    return (
        <header className="w-full px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 btn-press transition-all"
                >
                    <svg className="w-5 h-5 text-kid-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {title && (
                    <h1 className="text-xl font-bold text-kid-dark">{title}</h1>
                )}
            </div>

            <div className="flex items-center gap-2">
                {currentUser ? (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 rounded-kid bg-white shadow-md text-kid-dark font-semibold hover:bg-gray-50 btn-press transition-all"
                    >
                        Keluar
                    </button>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="px-4 py-2 rounded-kid bg-kid-blue text-white font-semibold hover:bg-blue-600 btn-press transition-all shadow-md"
                    >
                        Masuk
                    </button>
                )}
            </div>
        </header>
    )
}

export default Header

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { resetPassword } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(email)
            setMessage('Cek email kamu untuk link reset password')
        } catch (err) {
            setError('Gagal mengirim email reset password')
            console.error(err)
        }
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-kid-bg flex flex-col">
            {/* Back Button */}
            <header className="px-4 py-4">
                <button
                    onClick={() => navigate('/login')}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 btn-press transition-all"
                >
                    <svg className="w-5 h-5 text-kid-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
                {/* Mascot */}
                <div className="mb-8 animate-bounce-soft">
                    <div className="w-24 h-24 bg-kid-yellow rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-5xl">🔑</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-kid-dark mb-2">Lupa Password?</h1>
                <p className="text-gray-500 mb-8 text-center">Masukkan email untuk reset password</p>

                {/* Success Message */}
                {message && (
                    <div className="w-full max-w-sm bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-kid mb-4">
                        {message}
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="w-full max-w-sm bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-kid mb-4">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-kid-dark mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-kid-lg border-2 border-gray-200 focus:border-kid-yellow focus:outline-none transition-all text-kid-dark"
                            placeholder="email@contoh.com"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-kid-lg bg-kid-yellow text-kid-dark font-bold text-lg hover:bg-yellow-400 btn-press transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Memuat...' : 'Kirim Link Reset'}
                    </button>
                </form>

                {/* Back to Login */}
                <Link to="/login" className="mt-6 text-kid-blue font-semibold hover:underline">
                    Kembali ke Login
                </Link>
            </main>
        </div>
    )
}

export default ForgotPassword

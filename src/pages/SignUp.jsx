import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { signup } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            return setError('Password tidak sama')
        }

        if (password.length < 6) {
            return setError('Password minimal 6 karakter')
        }

        try {
            setError('')
            setLoading(true)
            await signup(email, password)
            navigate('/')
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                setError('Email sudah terdaftar')
            } else {
                setError('Gagal membuat akun')
            }
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
                {/* Robot Mascot */}
                <div className="mb-8 animate-bounce-soft">
                    <div className="w-24 h-24 bg-kid-green rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-5xl">🎉</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-kid-dark mb-2">Daftar Akun</h1>
                <p className="text-gray-500 mb-8">Buat akun baru untuk menyimpan progres</p>

                {/* Error Message */}
                {error && (
                    <div className="w-full max-w-sm bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-kid mb-4">
                        {error}
                    </div>
                )}

                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-kid-dark mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-kid-lg border-2 border-gray-200 focus:border-kid-green focus:outline-none transition-all text-kid-dark"
                            placeholder="email@contoh.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-kid-dark mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-kid-lg border-2 border-gray-200 focus:border-kid-green focus:outline-none transition-all text-kid-dark"
                            placeholder="Minimal 6 karakter"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-kid-dark mb-2">Konfirmasi Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-kid-lg border-2 border-gray-200 focus:border-kid-green focus:outline-none transition-all text-kid-dark"
                            placeholder="Ulangi password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-kid-lg bg-kid-green text-white font-bold text-lg hover:bg-green-600 btn-press transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Memuat...' : 'DAFTAR'}
                    </button>
                </form>

                {/* Login Link */}
                <p className="mt-6 text-gray-500">
                    Sudah punya akun?{' '}
                    <Link to="/login" className="text-kid-blue font-semibold hover:underline">
                        Masuk
                    </Link>
                </p>
            </main>
        </div>
    )
}

export default SignUp

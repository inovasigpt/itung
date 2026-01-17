import { useNavigate, useLocation } from 'react-router-dom'
import { getOperationName, getDifficultyName } from '../utils/questionGenerator'

function GameSummary() {
    const navigate = useNavigate()
    const location = useLocation()
    const { wrongAttempts = 0, operation, difficulty } = location.state || {}

    // Calculate stars based on wrong attempts
    const getStars = () => {
        if (wrongAttempts <= 2) return 3
        if (wrongAttempts <= 5) return 2
        return 1
    }

    const stars = getStars()

    const getMessage = () => {
        if (stars === 3) return 'Luar Biasa! 🎉'
        if (stars === 2) return 'Bagus Sekali! 👏'
        return 'Terus Berlatih! 💪'
    }

    const getSubMessage = () => {
        if (stars === 3) return 'Kamu sangat hebat!'
        if (stars === 2) return 'Sedikit lagi sempurna!'
        return 'Jangan menyerah!'
    }

    return (
        <div className="min-h-screen bg-kid-bg flex flex-col items-center justify-center p-6">
            {/* Result Card */}
            <div className="bg-white rounded-kid-lg shadow-xl p-8 max-w-sm w-full text-center animate-pop-in">
                {/* Operation Badge */}
                {operation && (
                    <div className="inline-flex items-center gap-2 bg-kid-bg rounded-full px-4 py-2 mb-6">
                        <span className="text-sm font-semibold text-kid-dark">
                            {getOperationName(operation)} • {getDifficultyName(difficulty)}
                        </span>
                    </div>
                )}

                {/* Stars */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    {[1, 2, 3].map((starNum) => (
                        <span
                            key={starNum}
                            className={`text-5xl transition-all duration-500 ${starNum <= stars
                                    ? 'animate-bounce-soft'
                                    : 'opacity-30 grayscale'
                                }`}
                            style={{ animationDelay: `${starNum * 200}ms` }}
                        >
                            ⭐
                        </span>
                    ))}
                </div>

                {/* Message */}
                <h1 className="text-3xl font-bold text-kid-dark mb-2">
                    {getMessage()}
                </h1>
                <p className="text-gray-500 mb-6">
                    {getSubMessage()}
                </p>

                {/* Stats */}
                <div className="bg-kid-bg rounded-kid p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Jawaban salah:</span>
                        <span className="font-bold text-kid-dark">{wrongAttempts} kali</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={() => navigate(`/game/${operation}/${difficulty}`)}
                        className="w-full py-4 rounded-kid-lg bg-kid-blue text-white font-bold text-lg hover:bg-blue-600 btn-press transition-all"
                    >
                        Main Lagi 🔄
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full py-4 rounded-kid-lg bg-gray-200 text-kid-dark font-bold text-lg hover:bg-gray-300 btn-press transition-all"
                    >
                        Kembali ke Beranda
                    </button>
                </div>
            </div>

            {/* Celebration particles for 3 stars */}
            {stars === 3 && (
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 20 }, (_, i) => (
                        <div
                            key={i}
                            className="absolute text-2xl animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        >
                            {['🎉', '✨', '🌟', '🎊'][Math.floor(Math.random() * 4)]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default GameSummary

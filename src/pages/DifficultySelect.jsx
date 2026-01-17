import { useNavigate, useParams } from 'react-router-dom'
import { getOperationName, getOperationSymbol } from '../utils/questionGenerator'

function DifficultySelect() {
    const navigate = useNavigate()
    const { operation } = useParams()

    const difficulties = [
        {
            id: 'mudah',
            name: 'Mudah',
            range: 'Angka 1 - 10',
            icon: '🍎',
            color: 'bg-kid-blue',
            hoverColor: 'hover:bg-blue-600'
        },
        {
            id: 'sedang',
            name: 'Sedang',
            range: 'Angka 1 - 50',
            icon: '📚',
            color: 'bg-kid-green',
            hoverColor: 'hover:bg-green-600'
        },
        {
            id: 'sulit',
            name: 'Sulit',
            range: 'Angka 1 - 100',
            icon: '🏆',
            color: 'bg-kid-yellow',
            hoverColor: 'hover:bg-yellow-500'
        },
        {
            id: 'sangat-sulit',
            name: 'Sangat Sulit',
            range: 'Angka 1 - 1000',
            icon: '🚀',
            color: 'bg-kid-purple',
            hoverColor: 'hover:bg-purple-600'
        },
    ]

    const handleSelect = (difficultyId) => {
        navigate(`/game/${operation}/${difficultyId}`)
    }

    return (
        <div className="min-h-screen bg-kid-bg">
            {/* Header */}
            <header className="px-4 py-6">
                <button
                    onClick={() => navigate('/')}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 btn-press transition-all mb-4"
                >
                    <svg className="w-5 h-5 text-kid-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-4">
                        <span className="text-2xl font-bold text-kid-dark">{getOperationSymbol(operation)}</span>
                        <span className="text-lg font-semibold text-kid-dark">{getOperationName(operation)}</span>
                    </div>
                    <h1 className="text-2xl font-bold text-kid-dark">Pilih Tingkat Kesulitan</h1>
                </div>
            </header>

            {/* Difficulty Cards */}
            <main className="px-6 pb-8">
                <div className="space-y-4">
                    {difficulties.map((diff, index) => (
                        <button
                            key={diff.id}
                            onClick={() => handleSelect(diff.id)}
                            className={`
                w-full ${diff.color} ${diff.hoverColor}
                rounded-kid-lg shadow-lg p-6
                flex items-center gap-4
                text-white btn-press transition-all
                hover:scale-[1.02] hover:shadow-xl
                animate-pop-in
              `}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-kid flex items-center justify-center">
                                <span className="text-3xl">{diff.icon}</span>
                            </div>
                            <div className="text-left flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="bg-white/20 px-2 py-1 rounded-full text-sm font-bold">
                                        Level {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mt-1">{diff.name}</h3>
                                <p className="text-white/80 text-sm">{diff.range}</p>
                            </div>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default DifficultySelect

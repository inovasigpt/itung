import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Home() {
    const navigate = useNavigate()
    const { currentUser, logout } = useAuth()

    const operations = [
        {
            id: 'penjumlahan',
            name: 'Penjumlahan',
            symbol: '+',
            color: 'bg-kid-blue',
            hoverColor: 'hover:bg-blue-600'
        },
        {
            id: 'pengurangan',
            name: 'Pengurangan',
            symbol: '-',
            color: 'bg-kid-green',
            hoverColor: 'hover:bg-green-600'
        },
        {
            id: 'perkalian',
            name: 'Perkalian',
            symbol: '×',
            color: 'bg-kid-yellow',
            hoverColor: 'hover:bg-yellow-500'
        },
        {
            id: 'pembagian',
            name: 'Pembagian',
            symbol: '÷',
            color: 'bg-kid-pink',
            hoverColor: 'hover:bg-pink-500'
        },
    ]

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error('Failed to logout:', error)
        }
    }

    return (
        <div className="min-h-screen bg-kid-bg pb-8">
            {/* Header */}
            <header className="bg-kid-blue text-white px-6 py-8 rounded-b-[2rem] shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-blue-100 text-sm">Selamat Datang! 👋</p>
                        <h1 className="text-2xl font-bold">
                            Halo, {currentUser ? 'Adik!' : 'Teman!'}
                        </h1>
                    </div>
                    {currentUser ? (
                        <button
                            onClick={handleLogout}
                            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-kid font-semibold transition-all btn-press"
                        >
                            Keluar
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-white text-kid-blue px-4 py-2 rounded-kid font-semibold hover:bg-blue-50 transition-all btn-press"
                        >
                            Masuk
                        </button>
                    )}
                </div>

                {/* Stats */}
                <div className="flex gap-4 mt-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-kid px-4 py-3 flex-1">
                        <p className="text-blue-100 text-xs">Bintang</p>
                        <p className="text-xl font-bold">⭐ 0</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-kid px-4 py-3 flex-1">
                        <p className="text-blue-100 text-xs">Hari Beruntun</p>
                        <p className="text-xl font-bold">🔥 0</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6 mt-8">
                <h2 className="text-xl font-bold text-kid-dark mb-4">Pilih Operasi</h2>

                <div className="grid grid-cols-2 gap-4">
                    {operations.map((op) => (
                        <button
                            key={op.id}
                            onClick={() => navigate(`/difficulty/${op.id}`)}
                            className={`
                ${op.color} ${op.hoverColor}
                aspect-square rounded-kid-lg shadow-lg
                flex flex-col items-center justify-center
                text-white btn-press transition-all
                hover:scale-105 hover:shadow-xl
              `}
                        >
                            <span className="text-5xl font-bold mb-2">{op.symbol}</span>
                            <span className="text-lg font-semibold">{op.name}</span>
                        </button>
                    ))}
                </div>
            </main>

            {/* Robot Mascot */}
            <div className="fixed bottom-4 right-4 animate-bounce-soft">
                <div className="bg-white rounded-full p-3 shadow-lg">
                    <span className="text-3xl">🤖</span>
                </div>
            </div>
        </div>
    )
}

export default Home

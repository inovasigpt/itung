import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../contexts/ProfileContext'

function ProfileSelect() {
    const navigate = useNavigate()
    const { profiles, addProfile, selectProfile } = useProfile()
    const [showAddForm, setShowAddForm] = useState(false)
    const [newName, setNewName] = useState('')
    const [error, setError] = useState('')

    const handleSelectProfile = (profileId) => {
        selectProfile(profileId)
        navigate('/')
    }

    const handleAddProfile = (e) => {
        e.preventDefault()
        const trimmedName = newName.trim()

        if (!trimmedName) {
            setError('Nama tidak boleh kosong')
            return
        }

        if (trimmedName.length > 20) {
            setError('Nama maksimal 20 karakter')
            return
        }

        if (profiles.some(p => p.name.toLowerCase() === trimmedName.toLowerCase())) {
            setError('Nama sudah ada')
            return
        }

        addProfile(trimmedName)
        navigate('/')
    }

    const avatarColors = [
        'bg-kid-blue',
        'bg-kid-green',
        'bg-kid-yellow',
        'bg-kid-pink',
        'bg-kid-purple'
    ]

    const avatarEmojis = ['🦁', '🐰', '🦊', '🐼', '🦄', '🐸', '🐱', '🐶']

    return (
        <div className="min-h-screen bg-kid-bg flex flex-col">
            {/* Header */}
            <header className="bg-kid-blue text-white px-6 py-8 rounded-b-[2rem] shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-2">👋 Siapa yang mau belajar?</h1>
                <p className="text-blue-100">Pilih atau buat profil baru</p>
            </header>

            <main className="flex-1 px-6 py-8">
                {/* Existing Profiles */}
                {profiles.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-lg font-bold text-kid-dark mb-4">Profil Tersedia</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {profiles.map((profile, index) => (
                                <button
                                    key={profile.id}
                                    onClick={() => handleSelectProfile(profile.id)}
                                    className="bg-white rounded-kid-lg shadow-lg p-4 text-center hover:scale-105 btn-press transition-all"
                                >
                                    <div className={`w-16 h-16 ${avatarColors[index % avatarColors.length]} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <span className="text-3xl">{avatarEmojis[index % avatarEmojis.length]}</span>
                                    </div>
                                    <h3 className="font-bold text-kid-dark text-lg">{profile.name}</h3>
                                    <div className="flex items-center justify-center gap-3 mt-2 text-sm text-gray-500">
                                        <span>⭐ {profile.totalStars}</span>
                                        <span>🔥 {profile.loginStreak}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add New Profile */}
                {!showAddForm ? (
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="w-full py-4 rounded-kid-lg border-2 border-dashed border-gray-300 text-gray-500 font-semibold hover:border-kid-blue hover:text-kid-blue transition-all flex items-center justify-center gap-2"
                    >
                        <span className="text-2xl">+</span>
                        <span>Tambah Profil Baru</span>
                    </button>
                ) : (
                    <div className="bg-white rounded-kid-lg shadow-lg p-6 animate-pop-in">
                        <h3 className="font-bold text-kid-dark text-lg mb-4">Profil Baru</h3>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-kid mb-4 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleAddProfile}>
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => {
                                    setNewName(e.target.value)
                                    setError('')
                                }}
                                placeholder="Masukkan nama..."
                                className="w-full px-4 py-3 rounded-kid-lg border-2 border-gray-200 focus:border-kid-blue focus:outline-none transition-all text-kid-dark text-lg mb-4"
                                autoFocus
                            />

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAddForm(false)
                                        setNewName('')
                                        setError('')
                                    }}
                                    className="flex-1 py-3 rounded-kid-lg bg-gray-200 text-kid-dark font-semibold hover:bg-gray-300 btn-press transition-all"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 rounded-kid-lg bg-kid-blue text-white font-semibold hover:bg-blue-600 btn-press transition-all"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Play as Guest */}
                {profiles.length === 0 && !showAddForm && (
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 mb-4">atau</p>
                        <button
                            onClick={() => {
                                addProfile('Tamu')
                                navigate('/')
                            }}
                            className="text-kid-blue font-semibold hover:underline"
                        >
                            Main sebagai Tamu
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default ProfileSelect

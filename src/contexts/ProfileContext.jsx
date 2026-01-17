import { createContext, useContext, useState, useEffect } from 'react'

const ProfileContext = createContext()

const STORAGE_KEY = 'itung_profiles'

// Default profile structure
const createProfile = (name) => ({
    id: Date.now().toString(),
    name,
    totalStars: 0,
    loginStreak: 0,
    lastPlayedDate: null,
    createdAt: new Date().toISOString()
})

export function useProfile() {
    return useContext(ProfileContext)
}

export function ProfileProvider({ children }) {
    const [profiles, setProfiles] = useState([])
    const [currentProfile, setCurrentProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    // Load profiles from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY)
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData)
                setProfiles(parsed.profiles || [])

                // Restore last active profile
                if (parsed.lastActiveProfileId) {
                    const lastProfile = parsed.profiles?.find(p => p.id === parsed.lastActiveProfileId)
                    if (lastProfile) {
                        setCurrentProfile(lastProfile)
                    }
                }
            } catch (e) {
                console.error('Failed to parse saved profiles:', e)
            }
        }
        setLoading(false)
    }, [])

    // Save to localStorage whenever profiles change
    useEffect(() => {
        if (!loading) {
            const dataToSave = {
                profiles,
                lastActiveProfileId: currentProfile?.id || null
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
        }
    }, [profiles, currentProfile, loading])

    // Add new profile
    const addProfile = (name) => {
        const newProfile = createProfile(name)
        setProfiles(prev => [...prev, newProfile])
        setCurrentProfile(newProfile)
        return newProfile
    }

    // Select profile and update streak
    const selectProfile = (profileId) => {
        const profile = profiles.find(p => p.id === profileId)
        if (profile) {
            // Update login streak
            const today = new Date().toDateString()
            const lastPlayed = profile.lastPlayedDate

            let updatedProfile = { ...profile }

            if (lastPlayed) {
                const lastDate = new Date(lastPlayed)
                const yesterday = new Date()
                yesterday.setDate(yesterday.getDate() - 1)

                if (lastDate.toDateString() === yesterday.toDateString()) {
                    // Consecutive day - increase streak
                    updatedProfile.loginStreak += 1
                } else if (lastDate.toDateString() !== today) {
                    // Missed a day - reset streak
                    updatedProfile.loginStreak = 1
                }
                // Same day - keep streak unchanged
            } else {
                // First time playing
                updatedProfile.loginStreak = 1
            }

            updatedProfile.lastPlayedDate = today

            // Update in profiles array
            setProfiles(prev => prev.map(p => p.id === profileId ? updatedProfile : p))
            setCurrentProfile(updatedProfile)
        }
    }

    // Add stars to current profile
    const addStars = (starsEarned) => {
        if (currentProfile && starsEarned > 0) {
            const updatedProfile = {
                ...currentProfile,
                totalStars: currentProfile.totalStars + starsEarned
            }

            setProfiles(prev => prev.map(p => p.id === currentProfile.id ? updatedProfile : p))
            setCurrentProfile(updatedProfile)
        }
    }

    // Delete profile
    const deleteProfile = (profileId) => {
        setProfiles(prev => prev.filter(p => p.id !== profileId))
        if (currentProfile?.id === profileId) {
            setCurrentProfile(null)
        }
    }

    // Logout (clear current profile without deleting)
    const logoutProfile = () => {
        setCurrentProfile(null)
    }

    const value = {
        profiles,
        currentProfile,
        loading,
        addProfile,
        selectProfile,
        addStars,
        deleteProfile,
        logoutProfile
    }

    return (
        <ProfileContext.Provider value={value}>
            {!loading && children}
        </ProfileContext.Provider>
    )
}

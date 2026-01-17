/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'kid-blue': '#3B82F6',
                'kid-green': '#10B981',
                'kid-yellow': '#FBBF24',
                'kid-pink': '#F472B6',
                'kid-purple': '#8B5CF6',
                'kid-bg': '#F8FAFC',
                'kid-dark': '#1E293B',
            },
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif'],
            },
            borderRadius: {
                'kid': '1rem',
                'kid-lg': '1.5rem',
            },
        },
    },
    plugins: [],
}

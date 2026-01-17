import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import NumPad from '../components/NumPad'
import ResultPopup from '../components/ResultPopup'
import { generateQuestions, getOperationName, getDifficultyName } from '../utils/questionGenerator'

function Game() {
    const navigate = useNavigate()
    const { operation, difficulty } = useParams()

    // Game state
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [userAnswer, setUserAnswer] = useState('')
    const [answered, setAnswered] = useState([])
    const [skipped, setSkipped] = useState([])
    const [wrongAttempts, setWrongAttempts] = useState(0)
    const [showPopup, setShowPopup] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [isGameEnd, setIsGameEnd] = useState(false)

    // Initialize questions
    useEffect(() => {
        try {
            const generatedQuestions = generateQuestions(operation, difficulty, 10)
            setQuestions(generatedQuestions)
        } catch (error) {
            console.error('Failed to generate questions:', error)
            navigate('/')
        }
    }, [operation, difficulty, navigate])

    // Find next unanswered question
    const findNextUnanswered = useCallback((fromIndex) => {
        for (let i = fromIndex; i < 10; i++) {
            if (!answered.includes(i)) {
                return i
            }
        }
        // Check skipped questions
        for (let i = 0; i < fromIndex; i++) {
            if (!answered.includes(i)) {
                return i
            }
        }
        return -1 // All answered
    }, [answered])

    // Handle answer submission
    const handleSubmit = () => {
        if (!userAnswer || showPopup) return

        const currentQuestion = questions[currentIndex]
        const correct = parseInt(userAnswer) === currentQuestion.answer

        setIsCorrect(correct)
        setShowPopup(true)

        if (!correct) {
            setWrongAttempts(prev => prev + 1)
        }

        // Mark as answered
        setAnswered(prev => [...prev, currentIndex])
        // Remove from skipped if it was skipped before
        setSkipped(prev => prev.filter(i => i !== currentIndex))
    }

    // Handle skip
    const handleSkip = () => {
        if (showPopup) return

        // Add to skipped if not already skipped and not answered
        if (!skipped.includes(currentIndex) && !answered.includes(currentIndex)) {
            setSkipped(prev => [...prev, currentIndex])
        }

        // Move to next question
        moveToNextQuestion()
    }

    // Move to next question logic
    const moveToNextQuestion = useCallback(() => {
        setUserAnswer('')

        // Find next unanswered question
        let nextIndex = findNextUnanswered(currentIndex + 1)

        if (nextIndex === -1) {
            // All questions answered - game end
            setIsGameEnd(true)
        } else {
            setCurrentIndex(nextIndex)
        }
    }, [currentIndex, findNextUnanswered])

    // Handle popup close
    const handlePopupClose = () => {
        setShowPopup(false)

        // Check if all answered
        const newAnswered = [...answered]
        if (newAnswered.length >= 10) {
            // Navigate to summary
            navigate('/summary', {
                state: {
                    wrongAttempts,
                    operation,
                    difficulty
                }
            })
        } else {
            moveToNextQuestion()
        }
    }

    // Effect to navigate when game ends
    useEffect(() => {
        if (isGameEnd && answered.length >= 10) {
            navigate('/summary', {
                state: {
                    wrongAttempts,
                    operation,
                    difficulty
                }
            })
        }
    }, [isGameEnd, answered.length, wrongAttempts, operation, difficulty, navigate])

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-kid-bg flex items-center justify-center">
                <div className="text-xl font-bold text-kid-dark">Memuat soal...</div>
            </div>
        )
    }

    const currentQuestion = questions[currentIndex]

    return (
        <div className="min-h-screen bg-kid-bg flex flex-col">
            {/* Header */}
            <header className="px-4 py-4 flex items-center justify-between">
                <button
                    onClick={() => navigate('/')}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 btn-press transition-all"
                >
                    <svg className="w-5 h-5 text-kid-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-center">
                    <p className="text-sm text-gray-500">{getOperationName(operation)}</p>
                    <p className="text-xs text-gray-400">{getDifficultyName(difficulty)}</p>
                </div>
                <div className="w-10" /> {/* Spacer */}
            </header>

            {/* Progress Bar */}
            <ProgressBar total={10} current={currentIndex} answered={answered} />

            {/* Question Display */}
            <main className="flex-1 flex flex-col items-center justify-center px-6">
                <div className="bg-white rounded-kid-lg shadow-lg p-8 w-full max-w-md mb-8">
                    <p className="text-center text-gray-500 text-sm mb-2">Soal {currentIndex + 1} dari 10</p>
                    <div className="text-center">
                        <span className="text-4xl md:text-5xl font-bold text-kid-dark">
                            {currentQuestion.question} = ?
                        </span>
                    </div>
                </div>

                {/* NumPad */}
                <NumPad
                    value={userAnswer}
                    onChange={setUserAnswer}
                    onSubmit={handleSubmit}
                    onSkip={handleSkip}
                    onClear={() => setUserAnswer('')}
                />
            </main>

            {/* Result Popup */}
            {showPopup && (
                <ResultPopup
                    isCorrect={isCorrect}
                    correctAnswer={currentQuestion.answer}
                    onClose={handlePopupClose}
                />
            )}
        </div>
    )
}

export default Game

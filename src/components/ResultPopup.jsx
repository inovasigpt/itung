function ResultPopup({ isCorrect, correctAnswer, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-pop-in">
            <div className={`
        bg-white rounded-kid-lg p-8 mx-4 max-w-sm w-full text-center shadow-2xl
        ${isCorrect ? 'border-4 border-kid-green' : 'border-4 border-red-500'}
      `}>
                {/* Icon */}
                <div className={`
          w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center
          ${isCorrect ? 'bg-kid-green' : 'bg-red-500'}
        `}>
                    {isCorrect ? (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>

                {/* Message */}
                <h2 className={`text-3xl font-bold mb-2 ${isCorrect ? 'text-kid-green' : 'text-red-500'}`}>
                    {isCorrect ? 'Benar!' : 'Salah!'}
                </h2>

                {!isCorrect && (
                    <p className="text-kid-dark text-lg mb-4">
                        Jawaban yang benar: <span className="font-bold">{correctAnswer}</span>
                    </p>
                )}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`
            mt-4 px-8 py-3 rounded-kid-lg font-bold text-white text-lg
            btn-press transition-all
            ${isCorrect ? 'bg-kid-green hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}
          `}
                >
                    Lanjut
                </button>
            </div>
        </div>
    )
}

export default ResultPopup

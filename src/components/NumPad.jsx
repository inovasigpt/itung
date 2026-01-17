function NumPad({ value, onChange, onSubmit, onSkip, onClear }) {
    const handleNumberClick = (num) => {
        // Limit input to reasonable length
        if (value.length < 6) {
            onChange(value + num)
        }
    }

    const handleBackspace = () => {
        onChange(value.slice(0, -1))
    }

    const buttons = [
        { label: '1', action: () => handleNumberClick('1'), color: 'bg-white' },
        { label: '2', action: () => handleNumberClick('2'), color: 'bg-white' },
        { label: '3', action: () => handleNumberClick('3'), color: 'bg-white' },
        { label: '4', action: () => handleNumberClick('4'), color: 'bg-white' },
        { label: '5', action: () => handleNumberClick('5'), color: 'bg-white' },
        { label: '6', action: () => handleNumberClick('6'), color: 'bg-white' },
        { label: '7', action: () => handleNumberClick('7'), color: 'bg-white' },
        { label: '8', action: () => handleNumberClick('8'), color: 'bg-white' },
        { label: '9', action: () => handleNumberClick('9'), color: 'bg-white' },
        { label: '⌫', action: handleBackspace, color: 'bg-kid-pink text-white' },
        { label: '0', action: () => handleNumberClick('0'), color: 'bg-white' },
        { label: 'OK', action: onSubmit, color: 'bg-kid-green text-white' },
    ]

    return (
        <div className="w-full max-w-xs mx-auto">
            {/* Display */}
            <div className="bg-white rounded-kid-lg shadow-md mb-4 p-4 min-h-[60px] flex items-center justify-center">
                <span className="text-3xl font-bold text-kid-dark">
                    {value || '?'}
                </span>
            </div>

            {/* Numpad Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={btn.action}
                        className={`
              ${btn.color}
              h-16 rounded-kid-lg shadow-md
              text-2xl font-bold
              hover:scale-105 btn-press
              transition-all duration-150
              ${btn.color === 'bg-white' ? 'text-kid-dark hover:bg-gray-50' : ''}
            `}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* Skip Button */}
            <button
                onClick={onSkip}
                className="w-full py-3 rounded-kid-lg bg-gray-200 text-kid-dark font-semibold hover:bg-gray-300 btn-press transition-all"
            >
                Lewati →
            </button>
        </div>
    )
}

export default NumPad

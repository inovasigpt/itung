function ProgressBar({ total, current, answered }) {
    return (
        <div className="flex items-center justify-center gap-2 py-4">
            {Array.from({ length: total }, (_, index) => {
                const isAnswered = answered.includes(index)
                const isCurrent = index === current

                return (
                    <div
                        key={index}
                        className={`
              w-6 h-6 rounded-full transition-all duration-300
              ${isAnswered
                                ? 'bg-kid-green shadow-md'
                                : 'bg-gray-300'
                            }
              ${isCurrent && !isAnswered
                                ? 'ring-2 ring-kid-blue ring-offset-2 scale-110'
                                : ''
                            }
            `}
                    />
                )
            })}
        </div>
    )
}

export default ProgressBar

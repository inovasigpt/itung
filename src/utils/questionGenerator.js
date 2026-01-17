/**
 * Question Generator Utility
 * Generates math questions based on operation type and difficulty level
 */

const DIFFICULTY_RANGES = {
    mudah: { min: 1, max: 10 },
    sedang: { min: 1, max: 50 },
    sulit: { min: 1, max: 100 },
    'sangat-sulit': { min: 1, max: 1000 }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateAdditionQuestion(difficulty) {
    const range = DIFFICULTY_RANGES[difficulty]
    const a = getRandomInt(range.min, range.max)
    const b = getRandomInt(range.min, range.max)

    return {
        question: `${a} + ${b}`,
        answer: a + b,
        operandA: a,
        operandB: b
    }
}

function generateSubtractionQuestion(difficulty) {
    const range = DIFFICULTY_RANGES[difficulty]
    let a = getRandomInt(range.min, range.max)
    let b = getRandomInt(range.min, range.max)

    // Ensure positive result
    if (b > a) {
        [a, b] = [b, a]
    }

    return {
        question: `${a} - ${b}`,
        answer: a - b,
        operandA: a,
        operandB: b
    }
}

function generateMultiplicationQuestion(difficulty) {
    const range = DIFFICULTY_RANGES[difficulty]
    // For multiplication, use smaller ranges to avoid huge numbers
    const maxMultiplier = difficulty === 'sangat-sulit' ? 100 :
        difficulty === 'sulit' ? 20 :
            difficulty === 'sedang' ? 12 : 10

    const a = getRandomInt(range.min, Math.min(range.max, maxMultiplier))
    const b = getRandomInt(range.min, Math.min(range.max, maxMultiplier))

    return {
        question: `${a} × ${b}`,
        answer: a * b,
        operandA: a,
        operandB: b
    }
}

function generateDivisionQuestion(difficulty) {
    const range = DIFFICULTY_RANGES[difficulty]
    // Generate result and divisor first, then calculate dividend
    // This ensures whole number results
    const maxResult = difficulty === 'sangat-sulit' ? 100 :
        difficulty === 'sulit' ? 50 :
            difficulty === 'sedang' ? 20 : 10

    const result = getRandomInt(1, maxResult)
    const divisor = getRandomInt(2, Math.min(range.max / 2, 20))
    const dividend = result * divisor

    return {
        question: `${dividend} ÷ ${divisor}`,
        answer: result,
        operandA: dividend,
        operandB: divisor
    }
}

export function generateQuestions(operation, difficulty, count = 10) {
    const questions = []

    const generator = {
        'penjumlahan': generateAdditionQuestion,
        'pengurangan': generateSubtractionQuestion,
        'perkalian': generateMultiplicationQuestion,
        'pembagian': generateDivisionQuestion
    }[operation]

    if (!generator) {
        throw new Error(`Unknown operation: ${operation}`)
    }

    for (let i = 0; i < count; i++) {
        questions.push({
            id: i,
            ...generator(difficulty)
        })
    }

    return questions
}

export function getOperationSymbol(operation) {
    return {
        'penjumlahan': '+',
        'pengurangan': '-',
        'perkalian': '×',
        'pembagian': '÷'
    }[operation] || '?'
}

export function getOperationName(operation) {
    return {
        'penjumlahan': 'Penjumlahan',
        'pengurangan': 'Pengurangan',
        'perkalian': 'Perkalian',
        'pembagian': 'Pembagian'
    }[operation] || operation
}

export function getDifficultyName(difficulty) {
    return {
        'mudah': 'Mudah',
        'sedang': 'Sedang',
        'sulit': 'Sulit',
        'sangat-sulit': 'Sangat Sulit'
    }[difficulty] || difficulty
}

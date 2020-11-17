class Hangman {
    constructor(word = [] , remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        if (this.remainingGuesses <= 0){
            this.status='failed'
        } else if (!this.puzzle.includes('*')){
            this.status='finished'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (game1.status !== 'playing'){
            return
        }
    
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
}

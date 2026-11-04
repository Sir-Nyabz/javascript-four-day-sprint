const passedScores = scores.filter((score) => {
    return score >= 50
})

console.log(passedScores)

const firstHighScore = scores.find((score) => {
    return score >= 80
})

console.log(firstHighScore)

const totalScore = scores.reduce((total, score) => {
    return total + score
}, 0)

console.log(totalScore)
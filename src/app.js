students.forEach((student) => {
    console.log(student)
})

const scores = [45, 78, 90, 32, 65, 88]

const increasedScores = scores.map((score) => {
    return score + 5
})

console.log(increasedScores)
function gradeLabel(score) {
    if (!Number.isFinite(score) || score < 0 || score > 100) {
        return 'Invalid'
    }

    if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log(gradeLabel(89))
console.log(gradeLabel(90))
console.log(gradeLabel(0))
console.log(gradeLabel(100))
console.log(gradeLabel(-1))
console.log(gradeLabel(101))
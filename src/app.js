function convertMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60)
    const remainingMinutes = totalMinutes % 60

    return {
        hours,
        minutes: remainingMinutes
    }
}

const result = convertMinutes(137)

console.log(result)
console.log(`${result.hours} hours and ${result.minutes} minutes`)
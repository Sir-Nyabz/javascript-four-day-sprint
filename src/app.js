function fizzBuzz(limit) {
    const results = []

    for (let number = 1; number <= limit; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            results.push('FizzBuzz')
        } else if (number % 3 === 0) {
            results.push('Fizz')
        } else if (number % 5 === 0) {
            results.push('Buzz')
        } else {
            results.push(number)
        }
    }

    return results
}

console.log(fizzBuzz(15))
console.log(fizzBuzz(16))
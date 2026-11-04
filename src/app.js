const prices = [5, 12, 25, 8, 30]

let total = 0
let countAbove20 = 0

for (const price of prices) {
    total += price

    if (price > 20) {
        countAbove20++
    }
}

console.log('Total:', total)
console.log('Prices above 20:', countAbove20)
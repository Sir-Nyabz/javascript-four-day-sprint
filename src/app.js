const price = 12.50
const quantity = 3

const subtotal = price * quantity
const tax = subtotal * 0.08
const total = subtotal + tax

console.log('Subtotal:', subtotal)
console.log('Tax:', tax)
console.log('Total:', total)
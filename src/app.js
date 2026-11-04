const amount = Number('abc')

if (Number.isFinite(amount)) {
    console.log(amount * 2)
} else {
    console.log('Invalid amount')
}
function calculateDiscountedCart(items, taxRate) {
    let subtotalBeforeTax = 0

    for (const item of items) {
        const lineTotal = calculateLineTotal(
            item.price,
            item.quantity
        )

        const discountedTotal =
            item.quantity > 5
                ? lineTotal * 0.95
                : lineTotal

        subtotalBeforeTax += discountedTotal
    }

    const tax = subtotalBeforeTax * taxRate

    return {
        subtotalBeforeTax,
        tax,
        total: subtotalBeforeTax + tax
    }
}

const cart = [
    { name: 'Books', price: 10, quantity: 6 },
    { name: 'Pens', price: 5, quantity: 2 }
]

const receipt = calculateDiscountedCart(cart, 0.08)

console.log(receipt)
const orderPromise = new Promise((resolve, reject) => {
    const orderSuccessful = true

    if (orderSuccessful) {
        resolve("Order completed successfully.")
    } else {
        reject("Order failed.")
    }
})

orderPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

    function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Your order is ready.")
        }, 2000)
    })
}

placeOrder()
    .then((message) => {
        console.log(message)
    })


    // 1. Set the payment status
const paymentSuccessful = true;

// 2. Create a Promise
const paymentPromise = new Promise((resolve, reject) => {

    if (paymentSuccessful === true) {
        resolve("Payment successful.");
    } else {
        reject("Payment failed.");
    }

});

// 3. Handle a successful payment
paymentPromise
    .then((message) => {
        console.log(message);
    })

    // 4. Handle a failed payment
    .catch((error) => {
        console.log(error);
    });
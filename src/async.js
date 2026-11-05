async function loadUser() {
    try {
        const user = await getUser()

        console.log(user)
    } catch (error) {
        console.error("Something went wrong:", error.message)
    }
}

loadUser()


function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "John"
            })
        }, 2000)
    })
}

async function displayUser() {
    const user = await getUser()

    console.log(user)
}

displayUser()
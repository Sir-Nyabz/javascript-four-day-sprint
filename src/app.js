const student = {
    name: 'Ama',
    programme: 'Computer Science',

    introduce() {
        return `My name is ${this.name} and I study ${this.programme}.`
    }
}

console.log(student.introduce())
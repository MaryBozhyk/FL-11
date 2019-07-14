function getMin(...arguments) {
    let number
    for (let i = 0; i < arguments.length; i++) {
        if (i === 0) {
            number = arguments[i]
        } else if (arguments[i] < number) {
            number = arguments[i]
        }
    }
    alert(number)
}
getMin(3, 0, -3)

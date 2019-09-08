function reverseNumber(number) {
    let result = 0
    let figure = 0
    let check = false
    if (number < 0) {
        number = -number
        check = true
    }
    while (number >= 10) {
        result *= 10
        figure = number % 10
        number = (number - figure) / 10
        result += figure
    }
    if (number < 10) {
        result *= 10
        result += number
    }
    if (check) {
        result = -result
    }
    alert(result)
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
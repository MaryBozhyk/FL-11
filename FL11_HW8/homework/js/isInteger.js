function isInteger(number) {
    return number % 1 === 0
}
let integer = isInteger(5);
alert(integer)
integer = isInteger(5.1);
alert(integer)
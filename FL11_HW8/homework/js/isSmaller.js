function isBigger(a, b) {
    return a > b;
}

function isSmaller(a, b) {
    return !isBigger(a, b)
}
let smaller = isSmaller(5, -1);
alert(smaller)
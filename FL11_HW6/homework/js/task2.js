let a = +prompt('Enter sides leangth','0')
let b = +prompt('Enter sides leangth','0')
let c = +prompt('Enter sides leangth','0')
if ( a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
    if (a === b && a === c) {
        console.log('Eequivalent triangle');
    } else if(a === b && a !== c || b === c && b !== a || a === c && a !== b ){
        console.log('Isosceles triangle');
    } else{
        console.log('Normal triangle');
    } 
} else {
    console.log('Triangle doesn’t exist');
}

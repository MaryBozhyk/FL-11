let a1 = +prompt('Input value a1','0')
let a2 = +prompt('Input value a2','0')
let b1 = +prompt('Input value b1','0')
let b2 = +prompt('Input value b2','0')
let c1 = +prompt('Input value c1','0')
let c2 = +prompt('Input value c2','0')
let x1 = (a1 + b1) / '2';
let x2 = (a2 + b2) / '2';
if ( a1 === null || b1 === null || c1 === null || isNaN(a1) || isNaN(b1) || isNaN(c1) ||
a2 === null || b2 === null || c2 === null || isNaN(a2) || isNaN(b2) || isNaN(c2) ) {
    console.log('Invalid input data');
} else if (x1 === c1 && x2 === c2) {
        console.log('true');
    } else{
        console.log('false');
    }


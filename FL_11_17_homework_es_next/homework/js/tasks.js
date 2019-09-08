// task1
function maxElement(arr) {
    return Math.max(...arr)
}

const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
console.log(maxElement(array));

// task2
function copyArray(arr) {
    return [...arr];
}

const arr = [1, 2, 3];
const copiedArray = copyArray(arr);
console.log(arr, copiedArray);
console.log(arr === copiedArray);

// task3
function addUniqueId(value) {
    let copy = {...value}
    copy[Symbol('id') ] = 1
    return copy;
}

console.log(addUniqueId({ name: 123 }));

// task4
function regroupObject(obj) {
    const newObj = obj.details;
    let { university, user } = newObj;
    user = {};
    user.age = newObj.age;
    user.firstname = obj.name;
    user.id = newObj.id;
    return { university, user };
}

const oldObj = { name: 'Someone', details: { id: 1, age: 11, university: 'UNI' } };
console.log(regroupObject(oldObj));

// task5
function findUniqueElements(arr) {
    const set = new Set();
    arr.forEach(x => set.add(x));
    return [... set];
  }
const array1 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
console.log(findUniqueElements(array1));

// task6
function hideNumber(number) {
    return number.slice(-4).padStart(number.length, '*')
}
const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber))

// task7
function add(a = 'null', b = 'null') {
    if (isNaN(a) || isNaN(b)) {
        throw new Error ('Parameter is not a number or is not declared!');
    }
    return a + b
}

// console.log(add(5));
console.log(add(5, 12));

// task8
function fetchJson(url) {
    return fetch(url)
      .then(request => request.text())
      .then(text => {
        let data = JSON.parse(text);
        let arr = [];
        data.forEach(x => { arr.push(x.name) })
        return arr.sort(Intl.Collator().compare)
      })
      .catch(error => console.log(`ERROR: ${error.stack}`));
  }
  fetchJson('https://api.github.com/users/MaryBozhyk/repos').then(res => console.log(res))


// task9
async function fetchJson(url) {
    try {
        const request = await fetch(url);
        const text = await request.text();
        let data = JSON.parse(text);
        let arr = [];
        data.forEach(x => { arr.push(x.name) })
        return arr.sort(Intl.Collator().compare)
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
fetchJson('https://api.github.com/users/MaryBozhyk/repos').then(res => console.log(res))

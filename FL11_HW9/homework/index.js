const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
]

//task0
function getNumbers(x) {
    let valueArr = []
    for (let i=0; i < x.length; i++){
      if (Number(x[i])) {
        valueArr.push(x[i])
      }
    }
    return valueArr
}

//task1
function findTypes(){
    let argTypes = {};
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
       let argName = typeof arguments[i];
       let count = 1
       for (let i = 0; i < args.length; i++) {
           if (args[i] === argName) {
               count++
           }
       }
       args.push(argName);
       argTypes[`${argName}`] = count
    }
    return argTypes
}

//task2
function executeforEach(array, functionE) {
    for (let i = 0; i < array.length; i++) {
        functionE(array[i])
    }
}

//task3
function mapArray(array, functionM) {
    let arg = []
    executeforEach(array, function (el) {
        arg.push(functionM(el))
    })
    return arg
}

//task4
function filterArray(array, functionF) {
    let arg = []
    executeforEach(array, function (el) {
        if (functionF(el)) {
            arg.push(el)
        }
    })
    return arg
}

//task5
function showFormattedDate(date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return 'Date: ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()
}

//task6
function canConvertToDate(data){
    return !!Date.parse(data);
}

//task7
function daysBetween(x,y){
    const dayMs = 86400000
    let date1 = new Date(x);
    let date2 = new Date(y);
    let diffDays = Math.round((date2 - date1) / dayMs); 
   return diffDays
}

//task8
function getAmountOfAdultPeople(data){
    const age = 18;
    const fullYear = 365;
    let today = new Date();

    return filterArray(data, function (x) {
        let birthDate = new Date(x.birthday);
        return Math.round(daysBetween(birthDate, today) / fullYear) > age
    }).length;
}

//task 9
function keys() {
    let keyArr = []
    for (let i = 0; i < arguments.length; i++) {
        let keyEl = arguments[i]
        for (let [key] of Object.entries(keyEl)) {
            keyArr.push(key)
        }
    }
    return keyArr
}

//task 10
function values() {
    let valueArr = []
    for (let i = 0; i < arguments.length; i++) {
        let valueEl = arguments[i]
        for (let [, value] of Object.entries(valueEl)) {
            valueArr.push(value)
        }
    }
    return valueArr
}
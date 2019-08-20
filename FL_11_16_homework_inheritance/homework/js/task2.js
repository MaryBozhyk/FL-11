function create(prototype_object, ...propertiesObject) {
    let protoObj = Object();
    propertiesObject.forEach(x => {
        for (let key in x) {
            if (x.hasOwnProperty(key)) {
                protoObj[key] = x[key];
            }
        }
    })
    protoObj.__proto__ = prototype_object
    return protoObj
}

// const obj1 = { prop: 5 };
// const obj2 = create(obj1);

// console.log(Object.getPrototypeOf(obj2) === obj1); // => true
// console.log(obj2.prop); // => 5

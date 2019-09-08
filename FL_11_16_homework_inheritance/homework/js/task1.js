function assign(target, ...source) {
    source.forEach(x => {
        for (let key in x) {
            if (x.hasOwnProperty(key)) {
                target[key] = x[key];
            }
        }
    })
    return target;
}

// const defaults = { a: 123, b: 777 };
// const options = { a: 456 };
// const configs = assign({}, defaults, options); // => {a: 456, b: 777}
// console.log(configs)
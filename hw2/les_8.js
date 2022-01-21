function f(arr) {
    if (arguments.length !== 1 || !Array.isArray(arr)) {
        throw new Error('Error: parameter type should be an array');
    }
    if (!arr.length) {
        throw new Error('Error: parameter cant be an empty');
    } else if (arr.length) {
        const itemArr = arr.shift();
        console.log( itemArr);
        //console.log('arr', arr);
        f(arr);
    }
}

f([2,3,4,5,6,7,8]);

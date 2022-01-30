/*Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
    Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

    ```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
 */

function arrayFill(item, length) {
    if (arguments.length !== 2) {
        throw new Error('Error: arguments should be 2');
    }
    if (!(typeof arguments[0] === 'number' || typeof arguments[0] === 'string' || Array.isArray(arguments[0]) || typeof arguments[0] === "object")) {
        throw new Error('Error: parameter type should be a number or string or array or object');
    }
    if (typeof arguments[1] !== 'number') {
        throw new Error('Error: parameter type should be a number');
    }

    let resultArr = [];
    for (let i = 0; i < length; i++) {
        resultArr[i] = item;
    }

    return resultArr;
}

console.log('arrayFill', arrayFill('значение', 10));
/*Задача 6

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

    Функция должна содержать проверки:

    - Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

    ```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```

 */

const arr = [1,2,3];
const acc = 0;


function reducer(previousValue, currentValue, index, array) {

    let accumulation = previousValue + currentValue;

    return accumulation
}

function reduceRightImplement(arr, reducer, acc) {
    if (arguments.length !== 3) {
        throw new Error('Error: arguments.length should be 3');
    } else {
        if (!Array.isArray(arguments[0])) {
            throw new Error('Error: parameter type should be an array');
        }
        if (typeof arguments[1] !== 'function') {
            throw new Error('Error: parameter type should be a function');
        }
        if (!(typeof arguments[2] === 'number' || typeof arguments[2] === 'string')) {
            throw new Error('Error: parameter type should be a number or string');
        }
    }
    let previousValue = acc;
    for (let i = arr.length; i > 0 ; i--) {
        console.log('arr', arr[i-1]);
        if (acc === 0) {
            if (arr.length === 1) {
                previousValue = arr[0]
            } else {
                previousValue = reducer(previousValue, arr[i-1], i, arr)
            }
        } else {
            if (arr.length === 1) {
                previousValue = reducer(previousValue, arr[0], i, arr)
            } else {
                previousValue = reducer(previousValue, arr[i-1], i, arr)
            }
        }
    }
    return previousValue;
}

console.log('resultCount', reduceRightImplement(arr, reducer, acc));
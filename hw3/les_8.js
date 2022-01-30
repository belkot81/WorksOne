/*Задача 8

Напишите функцию `f` .
Данная функция принимает один параметр: одноуровневый или многоуровневый массив.
Возвращает данная функция сумму всех элементов на всех уровнях.
Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

    ```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
```
 */

const arr = [[[[[1, 2]]]]];

function flatImpl(array) {

    if (!Array.isArray(arguments[0])) {
        throw new Error('Error: parameter type should be an array');
    }
    let tempSumm = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {

            tempSumm += flatImpl(array[i]);
        } else {
            if (typeof array[i] === "number") {
                tempSumm += array[i];
            } else {
                throw new Error('Error: parameter type should be an number');
            }
        }
    }

    return tempSumm;
}

console.log('flatImpl(arr)', flatImpl(arr));
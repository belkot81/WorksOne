/*Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
    Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

    ```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
 */

function  some (arr, callback) {
    //Ваша реализация метода
    var result = 'false';
    if (!Array.isArray(arr)) throw new Error('Error: parameter type should be an array');
    if (typeof callback !== 'function') throw new Error('Error: parameter type should be a function');
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback(arr[i]))
            result = 'true';
        //callback(result)
    }
    return  result;
}


function callback(a) {
    //
    return a > 2;
}
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
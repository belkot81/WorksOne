/*Задача 2
Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
    Функция должна содержать проверки:
    - Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

    ```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
 */
function  filter (arr, callback) {
    var result = [];
    if (!Array.isArray(arr))
        throw new Error('Error: parameter type should be an array');
    if (typeof callback !== 'function')
        throw new Error('Error: parameter type should be a function');
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback(arr[i])) {
            result.push(arr[i])
        }
        callback(result)
    }
    return result;
}
function callback(a) {
    return a > 0;
}
const arr = [1,2,-7,3,-2,4];

let rez = filter (arr, callback)
console.log (rez);
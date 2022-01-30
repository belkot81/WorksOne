/*Задача 1
Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
    Функция должна содержать проверки:
    - Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
    ```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/
function forEach(arr, callback) {
    //Ваша реализация метода
    if  (!Array.isArray(arr)) throw new Error ('Error: parameter type should be an array');
    if  ( typeof callback !== 'function') throw new Error ('Error: parameter type should be a function');
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        callback(arr[i], i, arr);
    }
}

function callback (item,i){
    console.log(item, i, arr);
}

const arr = [1,2,3];

forEach(arr, callback);
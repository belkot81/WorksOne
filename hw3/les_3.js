/*
Задача 3
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/

function  mevery (arr, callback) {
    var result = 'true';
    if (!Array.isArray(arr)) throw new Error('Первый параметр обязателен и может принимать только массив');
    if (typeof callback !== 'function') throw new Error('Второй параметр обязателен и может принимать только функцию');
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (!callback(arr[i]))
            result = 'false';
        //callback(result)
    }
    return  result;
}
function callback(a) {
    //
    return a > 2;
}

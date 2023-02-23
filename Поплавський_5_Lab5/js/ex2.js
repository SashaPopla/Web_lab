"use struct";

let arrNumber = [],
    arrValue = [],
    numb = +prompt("Введіть кількість чисел", "");

if(isNaN(numb) || numb == '' || numb == null)
{
    alert("Введене чило було не коректне");
    console.log("Завдання 2");
    console.log("Ввести послідовність натуральних чисел та обчислити кількість двозначних чисел.");
    console.log("Результат виконання скрипта: Error");
}
else
{
    for(let i = 0; i < numb; i++)
    {
        arrNumber[i] = Math.floor(Math.random() * 1000);
    
        if(String(arrNumber[i]).length === 2)
            arrValue.push(arrNumber[i]);
    }
    
    console.log("Завдання 2");
    console.log("Ввести послідовність натуральних чисел та обчислити кількість двозначних чисел.");
    console.log("Введені дані: " + arrNumber);
    console.log("Результат виконання скрипта: " + arrValue.length);
}
"use struct";

let arrNumber = [];

for(let i = 10; i <= 99; i++)
{
    if(i % 9 == 0)
        arrNumber.push(i);
    
    if(i % 10 == 9)
        arrNumber.push(i);
}

console.log("Завдання 3");
console.log("Вивести всі двозначні числа, які діляться на 9 або містять цифру 9.");
console.log("Результат виконання скрипта: " + arrNumber);
/*
alert(arrNumber); 
*/
"use struct";

function addJsScript(src)
{
    let script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.body.appendChild(script);
}

function f(x, y) {
    if (x == 0 || y == 0)
        alert((x == 0 && y == 0) ? 'Центер координат' : 'ось' + ((x == 0 ? ' Y' : ' X')));
    else 
    {
        let horizont = (x > 0 ? [1, 4] : [3, 2]),
            vertical = (y > 0 ? [1, 2] : [4, 3]);

        horizont.forEach(el => { if (vertical.includes(el)) alert(el + ' чверть') });
    }
}

let x = +prompt("Введіть x", ""),
    y = +prompt("Введіть y", "");

if (x == '' || y == '' || x == null || y == null || isNaN(x) || isNaN(y)) 
{
    alert("Введені числа були не коректні");
    console.log("Завдання 1");
    console.log("Ввести координати точки A(x та y) i визначити: в якій чверті лежить ця точка. Відповідь вивести y вигляді повідомлення.");
    console.log("Результат виконання скрипта: Error");
}
else
{
    console.log("Завдання 1 ");
    console.log("Ввести координати точки A(x та y) i визначити: в якій чверті лежить ця точка. Відповідь вивести y вигляді повідомлення.");
    console.log("Введені дані: " + x + " " + y);
    console.log("Результат виконання скрипта: "); f(x, y);
}

for(let i = 2; i < 5; i++)
{
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
      }
      
      ask(
        'Подключати '+ i +' скрипт?',
        function() { alert("Вы согласились."); addJsScript('./js/ex'+i+'.js')},
        function() { alert("Вы отменили выполнение."); }
      );
}
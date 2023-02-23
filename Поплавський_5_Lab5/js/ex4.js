"use struct";

function gcd(n, m) {
  return m == 0 ? n : gcd(m, n % m);
}

function nok(n, m) {
  return n * m / gcd(n, m);
}

const n = +prompt("Введіть перше число від 20 до 40", " "),
      m = +prompt("Введіть друге число від 20 до 40", " ");

if (!Number.isInteger(n) || !Number.isInteger(m) || n < 20 || m < 20 || n > 40 || m > 40 || n == null || m == null || n == '' || m == '' || isNaN(n) || isNaN(m)) {
  alert('Введені числа були не коректні');
  console.log("Завдання 4");
  console.log("Вивести НСК для довільної серії двоцифрових чисел від 20 до 40.");
  console.log("Результат виконання скрипта: Error");
}
else {
  console.log("Завдання 4");
  console.log("Вивести НСК для довільної серії двоцифрових чисел від 20 до 40.");
  console.log("Введені дані: " + n + " " + m);
  console.log("Результат виконання скрипта: " + nok(n, m));
}
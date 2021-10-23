/* 1. Выведите числа от 1 до 50 и от 35 до 8. */

let task = 0;

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

for(let i = 1; i<=50; i++) {
   document.write(`${i} `);
}

document.write('<br/>');

for(let i = 35; i>=8; i--) {
   document.write(`${i} `);
}

/* 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку. */

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

let j = 89;

while(j >= 11) {
   document.write(j + '<br/>');
   j--;
}

/* 3. С помощью цикла найдите сумму чисел от 0 до 100. */

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

let sum100 = 0;

for(let i = 0; i <= 100; i++) {
   sum100 = sum100 + i;
}

document.write(`Сумма чисел от 0 до 100 равна ${sum100}`);

/* 4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3). */

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

let sum15 = 0;

for(i = 1; i <= 5; i++) {
   for(j = 1; j <= i; j++) {
      sum15 = sum15 + j;
   }
   console.log(`Сумма чисел от 1 до ${i} равна: ${sum15}`);
   document.write(`<p>Сумма чисел от 1 до ${i} равна: ${sum15}</p>`);
   sum15 = 0;
}

/* 5. Выведите чётные числа от 8 до 56. Решить задание через while и for. */

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

console.log(`Вариант через while:`);

j = 8;

while ( j <= 56) {
   if (j % 2 == 0) {
      console.log(j);
      document.write(j + ' ');
         j++;
   }
   j++;
}

console.log(`Вариант через for:`);
for (let i = 8; i <= 56; i++) {
   if (i % 2 == 0) {
      console.log(i);
      document.write(i + ' ');
   }
}

/*
for (let i = 8; i <= 56;) {
   console.log(i);
   i = i + 2;
}
*/

/* 6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
…
3*1=3
3*2=6
3*3=9
3*4=12
…
Для решения задачи используйте вложенные циклы. */

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

for (i = 2; i <= 10; i++) {
   console.log(`\nУмножение на ${i}:`)
   for (j = 1; j <= 10; j++) {
      console.log(`${i}*${j} = ${i * j}`);
   }
}

/* 7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num. */

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

let n = 1000,
    num = 0;

for (; n >= 50;) {
   n = n / 2;
   num++;
}

console.log(`n = ${n}, количество итераций: ${num}`);

/* 8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь может ввести отрицательное значение.*/

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

let sum8 = 0,
    num8 = 0,
    arMean = 0;

for (let i = prompt('Введите число:'); i != false; ) {
   i = Number(i);
   if (isNaN(i) == true) {
      alert('Вы ошиблись! Введите число!')
   } else {
      sum8 = sum8 + i;
      num8 += 1;
      arMean = sum8 / num8;      
   }
   console.log(i);
   i = prompt('8. Введите ещё одно число:');
}

console.log(`Общая сумма: ${sum8}; среднее арифметическое: ${arMean}`);

/* 9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

let str9 = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    arrStr = str9.split(' ');

console.log(arrStr);

let big = arrStr[0];

for (let i = 1; i < arrStr.length; i++) {
   arrStr[i] = Number(arrStr[i]);
   if (big >= arrStr[i]) {
      // big = big;
   }
   else {
      big = arrStr[i];
   }
}

let small = arrStr[0];

for (let i = 1; i < arrStr.length; i++) {
   arrStr[i] = Number(arrStr[i]);
   if (small <= arrStr[i]) {

   } else {
      small = arrStr[i];
   }
}

console.log(`Самое большое число: ${big}; самое маленькое число: ${small}`);

/* 10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.*/

task++;
document.write(`<h2>Task ${task}</h2>`);
console.log(`\nTask ${task}`);

n = prompt('Введите любое число', 458);

let str10Arr = n.split('');
let count = 0,
    sum10 = 0;

for (i = 0; i < str10Arr.length; i++) {
   console.log(`${i+1}-я цифра числа: ${str10Arr[i]}`);
   count++;
   sum10 += Number(str10Arr[i]);
}

str10Arr = str10Arr.reverse();
n = str10Arr.join('');

console.log(`Количество цифр всего: ${count}`);
console.log(`Сумма цифр: ${sum10}`);
console.log(`Обратный порядок: ${n}`);
// Задача 1
// Выввети на экран фигуру из звездочек

// for (let i = 1; i <= 4; i++) {
//     document.write('*****<br>')
// }

// Задача 2
// Вывести все четные числа в диапазоне ,
//  который введет пользователь
// Ввод должен быть строчным (345 это числа 3 4 5)
// Создать массив , числа добавить в него , и вывести числа через массив

// let num = prompt("Enter number:")
// let arr = []
// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0) {
//         arr.push(+(num[i]))
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     document.write(`<p>${arr[i]}</p>`)
// }

// Задача 3
// Просуммировать четные числа из 2й задачи и вывести 
// let buff = 0
// for (let i = 0; i < arr.length; i++) {
//     buff += arr[i]
// }
// document.write(`${buff}`)

// Задача 4
// Дано число n=1000 . Делите его на 2 столько раз , пока резульат 
// деления не станет < 50 . Посчитать кол-во инетраций , и записать в 
// переменную num

// 1й способ
// let n = 1000
// let num = 0
// while (n >= 50) {
//     n /= 2
//     num+=1
// }
// document.write(`${n}`)

// 2й способ
// let iteration = 0
// for (let n = 1000; n > 50; n /= 2) {
//     iteration += 1
//     document.write(`${n}<br>`)
// }
// document.write(`${iteration}`)

// Задача 4
// Посчиать сколько четных и нечетных чисел 
// если ввели 3461 - (3 1 нечетные ) и (4 6 четные )

// let num = prompt()
// let even = []
// let odd = []
// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0) {
//         even.push(num[i])
//     } else {
//         odd.push(num[i])
//     }
// }
// document.write(`<p>Кол-во четных: ${even.length}</p>`)
// document.write(`<p>Кол-во нечетных: ${odd.length}</p>`)

// Задача 5
// Составить программу , которая выводит кол-во четных и нечетных чисел 
// от 24 до 97
// let even = 0
// let odd = 0
// for (let i = 24; i <= 97; i++) {
//     if (i % 2 == 0) {
//         even += 1
//     } else {
//         odd += 1
//     }
// }
// document.write(`<p>Четное:  ${even}</p>`)
// document.write(`<p>Нечетные:  ${odd}</p>`)

// Задача 6
// Найти среднее значение чисел . Если вводим 3456 (3 + 4 + 5 + 6)/4=18/4=4.5
// let nums = prompt()
// let buff = 0
// for (let i = 0; i < nums.length; i++) {
//     buff += +nums[i]
// }
// document.write(`${buff/nums.length}`)

// Задачи на обьекты
// Задача 1
// Создать массив students , который будет состоять из ключей name ,
// surname , age . Вывести всех студентов , кто старше 18
// let students = [{
//         name: "Andrey",
//         age: 19
//     },
//     {
//         name: "Alan",
//         age: 18
//     },
//     {
//         name: "Arman",
//         age: 13
//     },
//     {
//         name: "Aida",
//         age: 10
//     },
//     {
//         name: "Dima",
//         age: 19
//     },
//     {
//         name: "Jack",
//         age: 20
//     },
//     {
//         name: "John",
//         age: 14
//     },
//     {
//         name: "Bill",
//         age: 17
//     }
// ]

// Другой способ задания цикла 
// person равен каждому обьекту внутри массива
// for (const person of students) {
//     if (person.age > 18) {
//         document.write(`${person.name}<br>`)
//     }
// }

// 2й урок во 2й группе 1.01


// Задача 7
// Заполнить массив числами с клавиатуры , Посчитать сумму , 
// среднее арифметическое эл-ов массива . Вывести на экран массив , сумму 
// // ,среднее арифметическое
// let arr = []
// let length = +(prompt())
// let sum = 0
// for (let i = 0; i < length; i++) {
//     arr[i] = +(prompt("Num:"))
//     sum += arr[i]
// }

// document.write(`<p>Array: ${arr}</p>`)
// document.write(`<p>Sum: ${sum}</p>`)
// document.write(`<p>Proizvedenie : ${sum/length}</p>`)

// Двойные циклы
// Внури одного цикла есть второй
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         // Покажи document.write(`${j}`)
//         // и обьясни как работает
//         document.write('*')
//     }
//     document.write('<br>')
// }

// Дальше , в папку функции
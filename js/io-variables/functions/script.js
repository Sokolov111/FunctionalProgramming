// 25.03.22
// function name(параметры){
// тело функции
// }
// Обязательно обозначение function , название функции ,
//  задаем параметр (задавать не обязательно )
// и прописываем тело функции 

// Пропишем простую функцию
// function func() {
//     alert("Hello!")
// }
// Если проверить , ничего не выйдет , т.к нужно ее вызвать
// Для того , чтобы она сработала , нужно ее вызвать
// func();
// Вызов функции

// Если вызвать ее несколько раз - alert выйдет несколько раз
// func()
// func()
// func()

// Попробуем задать параметр
// Задали ф-ю , которая получает параметр 
// В теле ф-я выводит полученый параметр
// function names(name) {
//     alert("Hello " + name)
// }
// // Вызываем ф-ю , и отправляем в нее параметр в виде слова
// names("Andrey");
// // Можно вызвать несколько раз , и отправить разные данные 
// names("User")
// names("Player")

// Также можем отправить насколько значений
// function nums(num1, num2) {
//     alert(num1 + num2)
// }

// nums(5, 15)

// Можно использовать переменные 
// let n1 = 52
// let n2 = 41
// function nums(num1, num2) {
//     alert(num1 + num2)
// }
// nums(n1, n2)


// Метод return() - функция будет возвращать какое-либо значение

// function saveText(text) {
//     return text
// }

// saveText("User")
// Никакого вывода не будет , для того , чтобы вывести ответ из ф-ии

// document.write(`${saveText("User")}`)
// Можно так
// let str = saveText("text")
// document.write(`<p>${str}</p>`)

// Создадим ф-ю для подсчета чисел
// function calc(num1, num2, num3) {
//     return num1 * num2 * num3
// }

// document.write(`${calc(2,3,5)}`)


// Задачи на ф-ии
// Задача 1: Куб числа
// function cube(num) {
//     return num * num * num
// }

// document.write(`${cube(3)}`)

// Задача 2 : Сумма двух чисел
// function sum(num1, num2) {
//     return num1 + num2
// }

// alert(sum(50, 90))

// Задача 3 : отнимает от 1го 2е и делит на 3е
// function del(num1, num2, num3) {
//     return (num1 - num2) / num3
// }

// alert(del(15, 5, 2))


// Что такое switch case 


// Нужно использовать swich case 
// задача 4 
// function showDay(num) {
//     switch (num) {
//         case 1:
//             alert("Пн")
//             break
//         case 2:
//             alert("Вт")
//             break
//         case 3:
//             alert("Ср")
//             break
//         case 4:
//             alert("Чт")
//             break
//         case 5:
//             alert("Пт")
//             break
//         case 6:
//             alert("Сб")
//             break
//         case 7:
//             alert("Вс")
//             break
//         default:
//             alert("...")
//             break
//     }
// }

// showDay(2)

// Урок 3 1.13

// Тернарный оператор
// Проверяется условие ,после "?" есть ответы - первое число если True 
// после ":" второе если False 
// 
// Задается условие - 10 > 7 , после ? ответы - если условие true -
// num будет равен 8 , в ином случае num = 2 
// let num = (10 > 7) ? 8 : 2;
// console.log(num)

// Зададим переменные со значениями и сравним их 
// let a = 5
// let b = 9
// let fun = (a > b) ? a : b;
// После проверки условия в переменную присвоится зн. из переменной b
// т.к a>b - false , 
// console.log(fun)

// Так же можно сразу указать ответы
// let a = 5;
// let b = 9;
// let fun = (a > b) ? alert("More") : alert("Lower");
// Это условие можно не присваивать переменной 
// (a > b) ? alert("More"): alert("Lower");

// Это нужно для проверки каких-либо данных 
`<h1>{(json.id)? json.name : 'error'}</h1>`
// Если с json приходят данные (id) - в теге выводится имя пользователя
// иначе просто выходит ответ 'error'

// Задача 5(не отмечена) :
// Создать ф-ю , которая выводит максимум из 3х чисел
// function max(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(max(5, 8, 10))
// 2й способ - можно создать буфферную переменную , и сраавнивать 
// значения с пмощью нее
// function max(num1, num2, num3) {
//     let num = 0;
//     if (num < num1) {
//         num = num1;
//     }
//     if (num < num2) {
//         num = num2
//     }
//     if (num < num3) {
//         num = num3
//     }
//     return num;
// }
// console.log(max(5, 28, 10))

// Задача 5 (6)
// Сумма всех эл-ов массива
// function sumArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     alert(sum)
// }

// sumArr([2, 3, 5, 6, 9, 1])

// Задача 7
// Поменять местами два числа
// function change(a, b) {
//     alert("a: " + a + " b: " + b)
//     let buff = 0;
//     buff = a;
//     a = b;
//     b = buff;
//     alert("a: " + a + " b: " + b)
// }

// change(5, 9)
// Остальные задачи не сфотал

// Задача 8
// Напишите программу для проверки четности или нечетности вписанного числа
// function chet(a) {
//     if (a % 2 == 0) {
//         alert("Четное")
//     } else {
//         alert("Нечетное")
//     }
// }

// chet(4)

// Задача 9
// Напишите ф-ю для нахождения наибольшего числа из массива
// function max(arr) {
//     let buff_max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (buff_max < arr[i]) {
//             buff_max = arr[i]
//         }
//     }
//     alert(buff_max)
// }

// max([3, 9, 7, 4, 0, 11, 2, 5, 7])


// Задача  10
// Найти факториал числа (4! = 1*2*3*4)
// function fact(num) {
//     let buff = 1
//     for (let i = 1; i <= num; i++) {
//         buff *= i
//     }
//     alert(buff)
// }

// fact(4)

// В файл less4_func2
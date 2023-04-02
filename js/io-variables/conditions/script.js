// --------------сравнительные операторы-----------
// >,<,<=,>=,==,!=,===,!==

// ------Условные операторы 

// if - если 


// цикл сработает если условие выдаст True 
// if(condition){
//    action
// }

// Пример
// if (20 > 1) {
//     document.write('<p>Первый if 20>1</p>')
// }

// Сработает ли этот цикл ?
// if (20 > 20) { // не выполнится
//     document.write('<p>Первый if 20>1</p>')
// }
// else - иначе
// else {
//     document.write('<p>Первый else</p>')
// }

// Решает учащийся
// Проверим - четное ли число
// let num = +prompt("enter number: ")
// if (num % 2 == 0) {
//     document.write("Четное")
// } else {
//     document.write("Нечетное")
// }

// Задача для учащегося
// Найти наибольшее число 
// Создать две переменные , ввести в них значения ,
//  с помощью цикла найти наибольшее число

// let a=+prompt("n1")
// let b=+prompt("n2")
// if(a>b){
//     document.write(`<p>${a}</p>`)
// }else{
//     document.write(`<p>${b}</p>`)
// }

// Поработаем с == и ===
if (10 == "10") { // Сработает ?
    document.write("=")
}
// 10=="10" - true
// Когда используются 2 = , сравниваются менно значения , игнорируются типы

if (10 === "10") { // Сработает ?
    document.write("=")
}
// 10 === "10" - false - int === str 
// Если сравниваем с помощью === - сравниваются не только значения , 
//  но и типы

// != , !==
// Поменяем местами выводы - четное , нечетное 
// let num = 4
// if (num % 2 != 0) {
//     document.write("Нечетное")
// } else {
//     document.write("Четное")
// }

// Логические операторы
// && - и (and), || - или (or)

// Пример - задача "Успех жизни"
// Цель
// let aim = true;
// // Мотивация
// let motivation = true;
// Если есть и мотивация и цель - выйдет ответ ,
//  если что-либо поменять - ответа не будет  
// if (aim && motivation) {
//     document.write("<h2>You Success </h2>")
// }else {
//     document.write("<h2>You fail</h2>")
// }

// Как сработает or(или)
// Цель
// let aim = true;
// // Мотивация
// let motivation = false;
// // Упорство
// let perseverance = true
// if (aim && perseverance || motivation) {
//     document.write("<h2>You Success </h2>")
// } else {
//     document.write("<h2>You fail</h2>")
// }

// ------------Ветка условий
// Спроси какая ветка условий может быть ?
// else if - иначе если 

// Пример
// Тестирующая система 
// let ans = 'a' // ansver

// if (ans === 'a') {
//     document.write(`<p>${ans} incorrect!</p>`)
// } else if (ans === 'b') {
//     document.write(`<p>${ans} incorrect!</p>`)
// } else if (ans === 'c') {
//     document.write(`<p>${ans} incorrect!</p>`)
// } else if (ans === 'd') {
//     document.write(`<p>'${ans}' Correct!!!</p>`)
// } else if (ans === 'e') {
//     document.write(`<p>${ans} incorrect!</p>`)
// } else {
//     document.write("<p> Error!</p>")
// }


// Задача : Максимум из 3х чисел
// Пусть попробует учащийся
// let num1 = 16
// let num2 = 14
// let num3 = 15
// if (num1 > num2 && num1 > num3) {
//     document.write(`<p>Max ${num1}</p>`)
// } else if (num2 > num1 && num2 > num3) {
//     document.write(`<p>Max ${num2}</p>`)
// } else if (num3 > num1 && num3 > num2) {
//     document.write(`<p>Max ${num3}</p>`)
// } else {
//     document.write("...")
// }

// 2й способ
// Монжо создать буфферную переменную , и составить три цикла
// let max = 0
// if (num1 > max) {
//     max = num1
// }
// if (num2 > max) {
//     max = num2
// }
// if (num3 > max) {
//     max = num3
// }
// document.write(`Max = ${max}`)

// Перенесем этот цикл в ветку условий 
// let max = 0
// if (num1 > max) {
//     max = num1
// }
// else if (num2 > max) {
//     max = num2
// }
// else if (num3 > max) {
//     max = num3
// }
// document.write(`Max = ${max}`)
// Какое число выйдет ?

// Задача : Проверка пользователя
// Ввести имя пользователя , если равен BilimWay , выводится - 
// hello BilimWay , в ином случае выходит ошибка

// let ans_name = "Way"
// let login = prompt("Login: ")
// let password = prompt("Password: ")
// if (login == ans_name && password == ans_name) {
//     document.write(`<p> hello ${login}! Your password is - ${password}</p>`)
// } else if (login == ans_name && password != ans_name) {
//     document.write(`Invalid password ${password}`)
// } else if (login != ans_name && password == ans_name) {
//     document.write(`Invalid login ${login}`)
// } else {
//     document.write("<p> Error!</p>")
// }

// Урок 3 папка Loops
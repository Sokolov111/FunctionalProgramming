// while (условие){
// тело
// }
// Цикл while работает пока введенное условие выдает true

// Пример : счетчик
// let count = 0
//     // 99<100 true
//     // 100 <100 false
// while (count < 100) {
//     document.write(`<p>${count}</p>`)
//         // Если не указать count++ , будет работать бесконечно
//     count++
//     // можно написать еще count +=1 или count = count+1
// }

// Есть инкримент ++ (+1), так же есть дикримент --(-1) ( если нужно сделать цикл от 100 до 0)


// Пример : авторизация
// let inpLogin = prompt("Login: ")
// let inputPass = prompt("Password: ")
//     // Этот цикл будт работать до тех пор , пока не впишем правильно логин и пароль

// while (inpLogin != "Bilim" || inputPass != "Bilim") {
//     // Выводит ввод еще раз
//     inpLogin = prompt("Login incorrect")
//     inputPass = prompt("Pass incorrect")
// }
// // Если ввели правильно , выходит приветствие 
// document.write("Welcome")

// Задача для ученика
// Ввести несколько значений , цикл должен остановиться ,
// когда будут использованы 3 попытки
// let inpLogin = prompt("Login: ")
// let inputPass = prompt("Password: ")
// let count = 0
// while (count <= 3) {
// if (inpLogin != "Bilim" || inputPass != "Bilim") {
//     inpLogin = prompt("Login incorrect")
//     inputPass = prompt("Pass incorrect")
//     count += 1
// }


// }
// document.write("Welcome!")
// 2й способ
// while (inpLogin != "Bilim" || inputPass != "Bilim") {
//     inpLogin = prompt("Login incorrect")
//     inputPass = prompt("Pass incorrect")
//     count += 1
//     if (count >= 3) {
//         // break - останавливает цикл
//         break
//     }
// }
// if (count < 3) {
//     document.write("Welcome")
// } else {
//     document.write("Все попытки использованы")
// }

// Пример : Создадим картинку , и выведем ее на сайте
// let img_count = 1
// while (img_count <= 3) {
//     // Выводим картинку на сайт
//     document.write(`<img src="i.jfif">`)
//     img_count += 1
// }

// Можно при помощи цикла использовать теги , и работать с ними ,
// выводить их нужное кол-во раз

// Как можно отыильтровать данные ?
// как сделать чтобы вывелись только четные значения 
// let count =0;
// while(count<10){
//     if(count%2==0){
//         document.write(count)
//     }
//     count++
// }

// Задача : найти сумму четных значений 
// Пусть сделает ученик
// let count =0;
// let sum=0
// while(count<10){
//     if(count%2==0){
// sum+=count
//     }
//     count++
// }
// document.write(`${sum}`)

// Цикл for
// for(начало; условие;действие(шаги)){
// тело
// }

// for(let i=12;i<32;i++){
//     document.write(`<p>For , ${i}</p>`)
// }

// Цикл выполнения 
// 1)i=12
// 2) 12<32 true
// 3) document.write()
// 4) i++
// ...

// Цикл do{} while()
// Этот цикл используется редко

// do{
//     тело
// }while(условие)

// Этот цикл сработает хотябы раз
// do {
//     document.write("true")
// } while (10 > 100)

// Цикл выполнился один раз , потом прошла проверка
// 3й посмотрел > к4
// дз к 3 уроку 1:49

// Задачи на циклы
// задача 1 : сделать калькулятор - указать 2 пеерменные
// в цикле выбираетсяя оперция + - * / , пока не введется -1
let n1 = 21
let n2 = 12
let sign = prompt("Команда:")
while (sign != -1) {
    if (sign === "+") {
        alert(`${n1}+${n2}: ${n1 + n2}`)
    } else if (sign === "-") {
        alert(`${n1}-${n2}: ${n1-n2}`)
    } else if (sign === "*") {
        alert(`${n1}*${n2}: ${n1*n2}`)
    } else if (sign === "/") {
        alert(`${n1}/${n2}: ${n1/n2}`)
    } else if (sign === "%") {
        alert(`${n1}%${n2}: ${n1%n2}`)
    }
    sign = prompt("Команда:")
}

// Создал папку arrays , урок 4
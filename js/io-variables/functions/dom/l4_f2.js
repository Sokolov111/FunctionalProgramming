// Переменные могут быть локальными и глобальными
// Попробуем создать локальную и глобальную переменную
// Это глобальная переменная , т.к можем использовать ее везде
// let text = "hello"
// alert(text)
//     // Внитри фун. локальная переменная , т.к можем использовать только 
//     // внутри ф-ии
// function func() {
//     let num = 5
//         // После 12й стр 
//         // Но здесь она доступна
//     alert(num)
// }
// func()
//     // Не можем использовать переменную вне ф-ии
// alert(num)


// Покажи как пример - если создать переменные вот так
// let text = "hello"

// function func() {
//     let text = 5
//     alert(text)

// }
// func()
// alert(text);
// Что выйдет ?
// Выйдет 5 и hello
// Сначала выводим локальную , потом глобальную

// А если убрать let у text - что выйдет ?
// let text = "hello"
// function func() {
//     text = 5
//     alert(text)
// }
// func()
// alert(text);
// Выйдет 2р - 5 , потому что в ф-ии перезаписываем зн-е
// А если убрать вызов ф-ии , что выйдет ? hello


// function square(num) {
//     alert(num)
// }

// square(5);
// // Что если ничего не отправить в ф-ю ?
// // Можно задать зн-е по умолчанию -
// function square(num = 5) {
//     alert(num)
// }
// square();
// - По умолчани. будет выводиться 5
// Покажи с несколькими значениями

// js dom ---------------------
// Начнем работать с html с помощью js dom
// Покажи в html
function text() {
    alert("Bilim_W")
}

// id = "text"
function func() {
    // С помощью этого метода берем тег через id
    let elem = document.getElementById('text');
    // Выведем что содержится в ф-ии
    console.log(elem);
    // Выводим именно id тега
    console.log(elem.id);
    // таким образом можем обрашаться к содержимому тега - type , value
    // id , class
    // Расскажи про инпуты на 43 стр
}

// Работа с input
// Создали ф-ю , которая вызываетсяя при нажатии на кнопку 
// Обращаемся к тегу по id 
// Далее выводим в консоль нужные значения из тега
function cont() {
    let inp = document.getElementById('content')
    console.log(inp.value)
}

// Обратно в html (72)
// Поменяем CSS с помощью JS
// function content_style() {
//     let elem = document.getElementById("style");
//     // Обращаемся к тегу , вызываем метод style , color 
//     // , и меняем цвет текста на зеленый
//     elem.style.color = "green";
//     // Поменять задний фон :
//     elem.style.backgroundColor = 'orange';
//     // Поменять размер текста:
//     elem.style.fontSize = '20px';
//     // Поменять текст в теге
//     // elem.innerHTML = "Bilim_way";
//     // Можно немного укоротить код :
//     // Не создавать тег elem 
//     // document.getElementById("style").innerHTML="heading"
//     // Но вариант с созданием переменной более правильный 
//     // Как поменять тег ?
//     // elem.outerHTML = '<a href="#">Bilim_Way</a>';
//     // поменяли тег h1 на тег a

//     // Если есть несколько тегов ,
//     //  и у них заданы классы , как их поменять ?
//     // Создай теги <p></p> в html (75-78) 
//     // Создадим переменную с ссылкой на класс
//     let tag_p = document.getElementsByClassName('paragraph')
//     console.log(tag_p);
//     // Для того чтобы поменять эти теги , нужно использовать цикл
//     // Если седлать так , сработает не правильно
//     // tag_p.style.color = 'red'
//     for (let i = 0; i < tag_p.length; i++) {
//         tag_p[i].style.color = 'red'
//     }
//     // Задали цикл , и в цикле поменяли цвет тега p
//     // Еще один способ получить тег с id
//     let elements = document.querySelector('#style');
//     // Нужно поставить # т.к обращаемся к id
//     elements.innerHTML = "gray";
//     // Если задать нескольким тегам id , и поменять стиль , 
//     // поменяется только у первого тега

//     // Если нужно получить классы:
//     let doc = document.querySelectorAll('.paragraph')
//         // В запросе указали точку , т.к запрашиваем класс
//     for (let i = 0; i < doc.length; i++) {
//         doc[i].style.backgroundColor = 'rgb(0,0,0)'
//     }
//     // С помощью цикла поменяли задний фон у тегов p

//     // Посмотрим еще немного методов :
//     // setAttribute - добавляет в аттрибут (оттрибут - класс , id , и.т.д)
//     elem.setAttribute('class', 'hello');
//     // Добавили в тег h1 класс , в теге есть только id 
//     // Можем добавить разные аттрибуты (class,id,type,value,...)

//     // removeAttribute - удаляет аттрибут 
//     elem.removeAttribute('id');
//     // Удаляет аттрибут id

//     // getAttribute - проверяет , что хранит аттрибут 
//     // Выдает либо true либо false
//     alert(elem.getAttribute("class"))

//     // Работа с ключевым словом "this"
//     // Закомментируй все выше 
//     // Создай тег input на 80стр
//     // После создай ф-ю show()
// }

// В принятом зн пока не указывай ничего
function show(elem) {
    // let elem = document.getElementByID('...')
    alert(elem.value);
    // Если нам нужно вывести значения разных input , 
    // как нам это сделать ?
    // Нужно осздать еще несколько тегов , и указать им разные 
    // id и разные вызовы ф-ии
    // show1 , show2 и btn1 , btn2 (покажи)

    // Но чтобы этого не делать , можем использовать метод this
    // Убери id у тегов , оставь во всех ф-ях один вызов show 
    // И укажи в каждом вызове show(this)
    // -- Убери переменную elem
    // Укажи в ф-ии эл elem, который принимается 
    // Теперь при нажатии на разные кнопки ,
    //  выходит value именно вызванной кнопки
    // Посмотрим что мы получаем -
    // console.log(elem)
}


// Св-во javaScript classList
// Позволяет добавлять и удалять классы элемента , 
// и проверять наличие опред класса
//--- Создадим такой же класс content_style
function content_style() {
    let elem = document.getElementById('style');
    // // add - позволяет добавить класс в тег
    // elem.classList.add('asd');
    // // Добавь пару классов в тег
    // // remove - удалить класс тега
    // elem.classList.remove('zxc');
    // // elem.classList.length - сколько классов содержится
    // console.log(elem.classList.length);
    // toggle - если класса нет - добавит , если есть - удалит
    // В теге h1 есть классы one , two
    elem.classList.toggle('three');
    // contains - если есть такой класс - true , нету - false 
    elem.classList.contains('three');
    // Если нужно поменять все теги
    // let elem = document.getElementsByTagName('h1')
    // Если нужно заменить все , так же используем цикл
    // Поменяет все h1

}


// Сделаем модальное окно 
// При нажатии открывается окно
// Переходи в html на 92

// Модальное окно 
let modal = document.querySelector('.modal')

function openModal() {
    // Переход в html
    // После того как написал все в html и css 
    // создай переменную modal
    modal.classList.add('active');
    // При нажатии на кнопку будет добавляться класс active
    // Но сначал его нужно создать 
    // Напиши в css active
}


function close_modal() {
    modal.classList.remove('active')
}

// 4 js dom начало досмотрел 
// Дальше слайдер , ассинхронные ф-ии , может анимация

/*--------------------------------Змінні-------------------------------------
let userName = 'Марк';
console.log(userName);
//--------------- типи змінних--------------
/*
let - змінна
const - константа
var- теж змінна (на часі -не використовується в новому коді. може зустрічатися в старому)
let  може змінювати значення під час роботи з програмою
 /*
let userName = 'Марк';
console.log(userName);

userName = 'Егор'
console.log(userName);
const-  не может менять значение

const yearOfBirth = 1990;
 */
/*function sum (){
    var name = 'Yuriy'
    console.log(name);
}
sum();
*/
/*
{
    let userName = "Bob"
    console.log (userName);

    var someNumber = 10;
    console.log(someNumber)
}
//console.log (userName);
console.log(someNumber)
*/

//let userName= 'Mark'; // строка(текст) одно слово, фраза, предложение,абзац//

/*
let age = 30; // число

console.log(30);

let isMarried = true;// логичне значення true/false

//-------------------------динамична типизація-------------------------
let someVarible = 'Some value'; // ceйчас someVarible типа String
someVariable = 50; // сейчас someVariable типа number
someVariable = true; // soVariable становиться типа BooLean


//-----------------значение null: ничего, пусто, значение не известно--------

let age = 32;
age = null; */

/* значение undefined: oзначає що значення ще НЕ БУЛО ПРИСВОЄНЕ. Якщо змінна зазначена, але їй не присвоєно ніякого значення
let userName;
console.log(userName);*/

/* Оператор tupeof -для визначення Що ЦЕ:цифра, правда\брехня, інш. ДЛЯ ПЕРЕВІРКИ
const  someName =true;
console.log(typeof someName);*/

/*bigInt
console.log(90071992547409919007199254n+778876666n);- для великих чисел */

//Symbol-унікальне значення яке надає можливість додавати унікальну якість до обьекту з впевненостю що він не перезапише ніяку іншу властивість

/* -----------------------оператори Дорівнювання та умов--------------------
>більше <менше >= більше або дорівнює <=менш або дорівнює
== не суворе порівняння
=== суворе порівняння
!= не сувора нерівність
!== сувора нерівність


console.log(10 > 5);// true
console.log(20 > 80);//false

let result = 10 == 5;// false
console.log(result);

console.log('5' ==5);//true
console.log('5'===5);//false
console.log('10' = 10);// некорректная операция присвоения*/

/* if (умова) {
 код який буде виконано якщо умова вірна
} else
{ код який буде виконано якщо умова НЕ вірна
}
/*

const time = 20;
if (time < 12) {
    console.log('Good morning');
    /*} else {
    console.log('Good day');
    }

} else if (time >=12&& time<18) {
    console.log('Good day');
} else {
    console.log('Good evening');
}
*/


/*---------------------------ЛОГІЧНІ ОПЕРАТОРИ----------------------------
&& логічне
|| логічне, АБО (or)
!true- логічне НЕ
 */
 /*-----------------------------Тернарний оператор-------------------------
if (10<12) {
    console.log('умова вірна');
} else {
    console.log('Умова НЕ вірна')
}

//--------(умова) ? (умова вірна): (умова не вірна);-----------------
20<12 ? console.log('умова вірна') : console.log('умова НЕ вірна');

let greeting;
let time = 10;
if ( time < 12) {
    greeting = 'good morning';
} else {
    greeting = 'good day'
}
console.log(greeting);
let time = 20;
greeting = time < 12 ? 'good morning' : 'good day';
console.log(greeting);*/

/* ------------конкатенация строк и шаблонні строки--------------------

let greeting = 'hay, Mark!';
let howAreYou = ' how are you?';
let sayHi = greeting + howAreYou;
console.log(sayHi);          //hay, Mark! how are you? */

/* -----------конкатенація 'строка' + 'строка'-------------
const userName = 'Maks';
console.log('hay, ' + userName + '! how are you?');
 //---------- шаблонні строки та інтерполяція------------------
console.log(`hay, ${userName}! how are yuo?`);*/

/* -----------------------------------------Функціі-----------------------
//console.log('Hi, dear user');
//dry- не повторюй себе
function sayHi() {
    console.log('Hi, respected user');
}
sayHi();

//function declaration
function sayHi() {
    console.log('HI');

console.log(name);
let name= 'Bob';/*
// function expression

const sayHi = function (){

    console.log('привет');
}

sayHi(); */

// ------------------------параметри та аргументи для функціі---------------
/*
const userName = 'mark';
console.log(`Hi, ${userName}! how are yuo?`);

function sayHi(name){

    console.log(`Hi, ${name}! how are you?`);
}

sayHi('Yuriy');  //Hi, Yuriy! how are yuo?
sayHi('Pavlo'); //Hi, Pavlo! how are you?
sayHi('maks'); //Hi, maks! how are you? */

/*return*/

/*------------------------------Функція як аргумент-------------------------

function summ(a, b) {
    return a + b;
}
const result = summ(summ(15, 15), summ(20,20));
console.log(result);*/

/*
function summ (a, b) {
    return a + b;
}


function diff (a, b) {
    return a - b;
}


function doSomething(func){
    let x = 10;
    let y = 15;
    let result = func(x, y);
    console.log (result);
}

doSomething(summ); //   25
doSomething(diff); //   -5     */

/*------------------------- Самовикликаюча функція IIFE-------------------

(function () {
    console.log ('Hi, dear user!');
}) ();



(function (a, b) {
    console.log(a+b );
}) (10, 15);            //25



 let res = (function (a, b) {
    return a + b;
}) (10, 15);

console.log(res);      //25                 */


/*----------------------------------- Стрілочні функції---------------------

function sayhi (name) {
   console.log(`Hi, ${name}! How are you?`);
}
sayhi('Mark');
const sayHi2=(name) => {
    console.log(`Hi, ${name}! How are you?`);
}

const sayHi2=(name) => console.log(`Hi, ${name}! How are you?`);


sayHi2('Mark');

function  summ(a, b) {
   const result = a + b;
}
const summ = (a, b) => {
   return a + b;
};

const summ = (a, b)=> a + b;
const res = summ(10 ,30);
console.log(res);           //40 */


/* -------------------------------Массиви-----------------------------------

const auto1 = 'Audi';
const auto2 = 'BMW';
const auto3 = 'Mazda';
const auto4 = 'Toyota';

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

console.log(autoBrands);                //[[Prototype]] Array(0)
console.log(autoBrands[0]);   //Audi    0- індекс. звертаємось по індексу у масіві ['Audi', 'BMW', 'Mazda', 'Toyota'] елемента (0,1,2,3 та тд) який потрібно вивести у консоль
console.log(autoBrands.length);  //4   (4 елемента у масиві. допомагає дізнатися скільки елементів у масиві) */

/* -----------------------методи масивів:----------------------------------
arr.push(items) - додати елемент в кінці масива
arr.pop() - видалити елемент з кінця масива
arr.shift()- видалити елемент з початку масива
arr.unshift(...items) додати елемент в початок масива
arr.splice([start]) -- почни видалення з n-індексу для  n-елементу , [deleCount, --- видалити 1 елемент   newelements])
 */
/*-----------------------додати елемент у масив:----------------------------
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
autoBrands.push('Nissan');
console.log(autoBrands);   //(5) ['Audi', 'BMW', 'Mazda', 'Toyota', 'Nissan']

/*------------------------вилучити елемент з масиву-----------------------
autoBrands.splice(2, 1);
console.log(autoBrands); //['Audi', 'BMW', 'Toyota', 'Nissan']
autoBrands.splice(2, 2);
console.log(autoBrands);   //['Audi', 'BMW', 'Nissan']   */

/* -----------------------------------Цикли---------------------------
// i (змінна)- лічильник циклу, i=0 -звичайне значення лічильника, умова при якій цикл буде робити,   i++ збідьшую цикл на 1 (ітератор)


console.log('Start');
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('Finish');

Start
main.js:302 0
main.js:302 1
main.js:302 2
main.js:302 3
main.js:302 4
main.js:302 5
main.js:302 6
main.js:302 7
main.js:302 8
main.js:302 9
main.js:305 Finish


console.log('Start');
for (let i = 0; i < 10; i = i + 2) {
        console.log(i);
    }
console.log('Finish');


Start
main.js:321 0
main.js:321 2
main.js:321 4
main.js:321 6
main.js:321 8
main.js:323 Finish
  */

/*------------------------Обход массива циклом for---------------

console.log('Start');

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('Finish');*/
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
/*console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);
console.log(autoBrands[3]);
console.log(autoBrands[4]);

for (i = 0; i < autoBrands.length; i++ ) {
   console.log (autoBrands[i]);
}     */

/* ----------обхід масива циклом for (of)----------------

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
for (let item of autoBrands) {
    console.log(item);
}
// Audi
// BMW
// Mazda
// Toyota  */

/*------------------------------обхід масива циклом for each()--------------

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach(function (item){
    console.log(item);
})
//Audi
// main.js:375 BMW
// main.js:375 Mazda
// main.js:375 Toyota

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach(function (item, index) {
    console.log(`${item} => ${index}`);
})

//             Audi => 0
// main.js:384 BMW => 1
// main.js:384 Mazda => 2
// main.js:384 Toyota => 3


const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

autoBrands.forEach(printBrand)
function printBrand (brand, i) {
    console.log(`${brand} = > ${i}`);
}

// main.js:397 Audi = > 0
// main.js:397 BMW = > 1
// main.js:397 Mazda = > 2
// main.js:397 Toyota = > 3

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));

//             Audi => 0
// main.js:406 BMW => 1
// main.js:406 Mazda => 2
// main.js:406 Toyota => 3    */


//---------------------------Обьекти----------------------------
/*
let userName = 'Mark';
let age = 30;
let isMarried = false;

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    profession: 'designer'
}

console.log(person);
console.log(person.userName);
console.log(person['age']);

let propertyName = 'profession';
console.log(person[propertyName]);

//{userName: 'Mark', age: 30, isMarried: false, profession: 'designer'}age: 30isMarried: falseprofession: "designer"userName: "Mark"[[Prototype]]: Object
// main.js:428 Mark
// main.js:429 30
// main.js:432 designer


let userName = 'Mark';
let age = 30;
let isMarried = false;

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
}

console.log(person);
console.log(person.userName);

person.profession = 'JS developer';
console.log(person);
//{{userName: 'Mark', age: 30, isMarried: false, profession: 'JS developer'}
delete person.age;
console.log(person);
//{userName: 'Mark', isMarried: false, profession: 'JS developer'}
// isMarried
// :
// false
// profession
// :
// "JS developer"
// userName
// :
// "Mark"
// [[Prototype]]
// :
// Object */

/*----------------------------Методи в обьектах:-----------------------
const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(`Hi, ${name}!`);
    }
};

/*person.sayHi = function (name) {
    console.log(`Hi, ${name}!`);
}
person.sayHi('Yuriy') */

/* ------------------------КЛЮЧОВЕ СЛОВО this-----------------------------

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(this);
        console.log(`Hi, ${name}! My name is ${this.userName}.`);
    },
};
person.sayHi('Yuriy')   //Hi, Yuriy! My name is Mark. */

/*----------------ОБЬЕКТИ ОБХІД ЦИКЛОМ for in (не плутати з for in)----------

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    sayHi: function (yourName) {

        console.log(`Hi, ${yourName}! My name is ${this.userName}.`);
    },
};

for (let key in person) {
    console.log(key, ':', person[key]);
}     */



   /*   НЮАНС const та зміна обьекта та масива

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
};
/* помилка! перенаправлення ссилки на новий обьект
person = {
    userName: 'Nik',
};   */

//---------------------КЛАСИ. КОНСТРУКТОРИ ОБЬЕКТІВ------------------------
// опишемо класс як креслення для усіх майбутніх обьектів person які будуть створюватись на його основі
/*class Person {
    constructor(userName, age,isMarried) {
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }
    sayHi(name) {
        console.log(`Hi, ${name}! My name is ${this.userName}.`)
    }
}

const person1 = new Person('Mark', 30, false);
const person2 = new Person('Pavlo', 28, true);

console.log(person1);
console.log(person2);

person1.sayHi('Yuriy');  //Hi, Yuriy! My name is Mark.
person2.sayHi('Yuriy');  //Hi, Yuriy! My name is Pavlo.    */



//-----------------ВИБІР ОДНОГО ЕЛЕМЕНТА DOM ПО СЕЛЕКТОРУ-----------------

/* document.querySelector('selector');

//document.querySelector('h2').classList.add('red');
const heading2 = document.querySelector('h2');
heading2.classList.add('red');

document.querySelector('.heading-3').classList.add('green')     */

/*---------------------ВИБІР КОЛЕКЦІІ ЕЛЕМЕНТІВ------------------------

const headings = document.querySelectorAll('h2');

for (let item of headings) {
    console.log(item);
    item.classList.add('red-text')
}


  const paragraphs = document.querySelectorAll('p');
 //   for (let p of paragraphs) {
 //    p.classList.add('green-text');
// }

 paragraphs.forEach(function (item) {
  item.classList.add('green-text');
})

// ТАКОЖ Є НАСТУПНІ МЕТОДИ:
document.getElementsByclassName('link'); // вибір колекціі елементів по CSS класу
document.getElementsBytagName('h2'); // вибір колекціі елементів по Тегу
document.getElementsById('header'); // вибір одного елемента по ID      */

/*------------------------------- РОБОТА З CSS КЛАСОМ---------------------

const heading = document.querySelector('h2');
console.log(heading);
heading.classList.add('red-text');
heading.classList.remove('red-text');

const heading = document.querySelector('h2');

heading.classList.contains('green'); b

//---------------------------РОБОТА З АТРИБУТАМИ------------------------

//const img = document.querySelector('#logo');
//img.getAttribute('src'); //- пишеться у консолі

//---------або-------------

const img = document.querySelector('#logo');
const srcValue = img.getAttribute('src');
console.log(srcValue);

img.setAttribute('src', './img/php.png');
img.setAttribute('width', '200');
img.src = './img/js.png';


const button = document.querySelector('#button');
button.setAttribute('value', 'send')
button.value = "text for button";

 //---------------------РОБОТА З ПРОСЛУХОВУВАННЯМ ПОДІЙ-----------------

const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'Delet';

//button.addEventListener('click', function (){
   // console.log('Click!');
//    img.remove();
 //   })

button.onclick = function () {
    console.log('Click!');
    img.remove();
}


//----------------------ПРОСЛУХАННЯМ ПОДІЙ 2. Форма-------------------

const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

/*   inputText.addEventListener('input', function (){
//console.log('Input!');
console.log(inputText.value);
textBlock.innerText = inputText.value;
})

inputText.addEventListener('input', inputHandler);
  //  console.log(inputText.value);
  //  textBlock.innerText = inputText.value;
//}
//);

function inputHandler() {
    console.log(inputText.value);
    textBlock.innerText = inputText.value;
}
//----------------ПРОСЛУХОВУВАННЯ ПОДІЙ. ОБЬЕКТ event-------------------

const list = document.querySelector('#list');
list.addEventListener('click', function (event) {
   // console.log(this);
    console.log(event);
    //console.log(event.target);
})


//-----------------------------------РОБОТА З ЕЛЕМЕНТАМИ:----------------
//-------------СТВОРЕНЯ КОНТЕЙНЕРУ--------------
const container = document.querySelector('#elementsContainer');

//-----------------СТВОРЕННЯ ЗАГОЛОВКА---------------------

const newHeader = document.createElement('h1');
newHeader.innerText = 'New header '
container.append(newHeader);


/* --------------КОПІЮВАННЯ ШАПКИ-----------------

const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true)
container.append(headerCopy);


//-------------Вставка размітки через строки------------

//const htmlExample = '<h2> Ще одне заглавіє</h2>';
//container.insertAdjacentHTML('beforeend', htmlExample);

// -----ВСТАВКА РОЗМІТКИ ЧЕРЕЗ ШАБЛОННІ СТРОКИ-----------

const title = 'Header text';
const htmlExample = `<h2>${title}</h2>`;



//-------------------todo--------------------------------

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function  formHandler(event) {
    event.preventDefault();

    // отримуємо назву задачі з input
    const taskText = todoInput.value;
    //console.log('taskText');

    // створюємо тег li через розмітку
   // const li = `<li>${taskText}</li>`;
    //console.log(li);

    // додаємо розмітку на сторінку
    //todoList.insertAdjacentHTML('beforeend', li);

    // створюємо тег li з поміччу створення елементу
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    console.log(newTask);

    //створюємо кнопку видалити
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Видалити';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);
//  console.log(newTask);

    // додаємо подію по кліку
    //deleteBtn.addEventListener('click', function () {
      //  this.closest('li').remove();
// АБО:
    // deleteBtn.addEventListener('click', (e) => e.target.closest('li').remove());
//АБО:
    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
        });


//додаємо елемент на сторінку
    todoList.append(newTask);

// очищуємо поле вводу
    todoInput.value = '';

    //фокус на поле вводу
    todoInput.focus();
}

//function deleteTask



// --------SetInterval  - дає можливість запускати код через інтервал часу----
const timerIntervalID = setInterval(function() {
    console.log('Fired!');
}, 1000)

//clearInterval(timerIntervalID)




//---------- setTimeOut виконує будь яку функцію або код через проміжок часу

const timerID = setTimeout(function () {
    console.log('setTimeout Fired!');
    }, 2000);

clearInterval(timerID);



//------------------------ SetInterval + setTimeOut---------------------

const timerID = setInterval(function () {
    console.log('setInterval Fired!');
    }, 1000)

setTimeout(function (){
clearInterval(timerID);
    }, 10000)
*/

/* ----------------------ЯК ЗРОБИТИ  СЕКУНДОМІР---------------------

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

//старт кнопка
const btnStart = document.querySelector('#start');
    btnStart.onclick = function () {
        console.log('btnStart');
       timerID = setInterval(function(){
         counter++;
        console.log(counter);
   counterElement.innerText = counter;
    }, 1000)
        console.log('timerID', timerID)
    }

//стоп кнопка
const btnStop = document.querySelector('#stop');
      btnStop.onclick = function (){
          console.log('btnStop');
      clearInterval(timerID);
}

// СБРОС
const btnReset = document.querySelector('#reset');
   btnReset.onclick = function () {
       counter = 0;
       counterElement.innerText = counter;
       clearInterval(timerID);
   }
*/

/* ------------------------------CALLBACK HELL---------------------------

setTimeout(function () {
    console.log('step1');
    setTimeout(function (){
        console.log('step2');
        setTimeout(function (){
            console.log('step3');
        }, 1000);
    }, 1500);
    }, 2000)
*/

// ------------практичне заняття 1: створюємо callback hell------------------
/*
function cheсkRooms(success,failed){
     setTimeout(function(){
         console.log('Перевіряємо номера в готелі...');
         const availableRooms = true;

         if (availableRooms) {
             let message = 'Номера є';
            success(message);
         } else {
             let message = 'Номерів немає';
             failed(message)
         }
     }, 1000);
}
function checkTickets(message, success, failed){
    setTimeout(function (){
        console.log('----function checkTickets----');
        console.log('відповідь на попередньому кроці:', message);
        console.log('Перевірка авіабілетів...');
        //код який відправляє на перевірку авіабілетів у авіакомпанії
        const availableTickets = true;
        if (availableTickets) {
            let message = 'Білети є';
            success(message);
        } else {
            let message = 'Білетів немає';
            failed(message)
        }
    }, 500)
}
function cancelVacation(message) {
    console.log('-----cancelVacation--------');
    console.log('відповідь на попередньому кроці:', message);
    console.log('Відпустка відміняється!');
}

function sabmitVacation(message) {
    console.log('-----sambitlVacation--------');
    console.log('Відповідь на попередньому кроці:', message);
    console.log('Їдемо у відпустку!');
}

cheсkRooms
(function(messageFromCheckRooms){
checkTickets(
    messageFromCheckRooms,
    function (messageFromCheckTickets){
    sambitVacation(messageFromCheckTickets)
},
    function (messageFromCheckTickets){
        cancelVacation(messageFromCheckTickets)
    })
    }, function (messageFromCheckRooms){
    cancelVacation(messageFromCheckRooms)
});
*/

//-----практичне заняття 2---Cтворюємо проміси - ассинхронне програмування-------------------
/*
const myPromise = new Promise(function(resolve, reject){
    console.log('Promise created');
    setTimeout(function(){
        // запит на сервер
        const response = true;
        if (response) {
            let message = "SUCCESS"
        resolve(message);
    } else {
            let message = "FAILED"
            reject(message);
        }
    },1500)
})
myPromise.then(function(data){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log('Then 1');
            const response = false;
            if (response) {
                resolve('Data from then 1');
            } else {
                reject('Data from then 1')
            }
            console.log(data);
            resolve();
        }, 1000)
    })
}).then(function(data){
    setTimeout(() => {
        console.log('Then 2');
        console.log(data);
    }, 500)
}).catch(function(data){
    console.log('Catch');
    console.log(data);
})
*/

//------практичне заняття 3------Ланцюжок примисів. Декілька промисів з setTimeout----------------
/*

const chekRooms = new Promise(function (resolve, reject){
    setTimeout(function(){
console.log('Перевіряємо номера в готелі...');
let availableRooms = true;
console.log(availableRooms);
if (availableRooms){
    resolve('Номера є!');
} else {
    reject('Номерів немає.');
}

    },1500)
})

chekRooms.then(function(data){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log('----then1----');
            console.log ('відповідь на попередньому кроці:', data);
            console.log('Перевіряємо авіа білети...');
            const availableTickets = true;

            if (availableTickets) {
                let message = 'Білети є';
                resolve(message);
            } else {
                let message = 'Білетів немає';
                reject(message);
            }
        },1000)
    });

}).then(function(data){
    console.log('----then2----');
    console.log ('відповідь на попередньому кроці:', data);
    console.log('Їдемо у відпустку!');

}).catch(function (data){
    console.log('----catch----');
    console.log('відповідь на попередньому кроці:', data);
    console.log('Відпустка відміняється:(');
})

*/
 /* ------Ланцюжок примисів. Окремі функціі---------------

chekRooms()
    .then(checkTickets)
    .then(success)
    .catch(failed);

function chekRooms (){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('Перевіряємо номера в готелі...');
            let availableRooms = true;
            console.log(availableRooms);
            if (availableRooms){
                resolve('Номера є!');
            } else {
                reject('Номерів немає.');
            }

        },1500)
    })
}
function checkTickets(data){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log('----then1----');
            console.log ('відповідь на попередньому кроці:', data);
            console.log('Перевіряємо авіа білети...');
            const availableTickets = true;

            if (availableTickets) {
                let message = 'Білети є';
                resolve(message);
            } else {
                let message = 'Білетів немає';
                reject(message);
            }
        },1000)
    })
}

function success(data){
    console.log('----success----');
    console.log('відповідь на попередньому кроці:', data);
    console.log('Їдемо у відпустку!');
}
function failed(data) {
    console.log('----failed----');
    console.log('відповідь на попередньому кроці:', data);
    console.log('Відпустка відміняється:(');
}

  */

//------------Async function. Асинхронні функції. споживання проміса--------------
/*
function promiseFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const result = false;
            if (result) {
                resolve('DONE!');
            } else {
                reject('FAIL!')
            }
        },500);
    });
}

async function startPromise() {
    try {
        const result = await promiseFunction();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

startPromise()

 */

// --------------практичне заняття 4--------серія промісів------
/*
function chekRooms (){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('Перевіряємо номера в готелі...');
            // ----- код який відправе запит до готелю---------
            let availableRooms = true;
            //console.log(availableRooms);
            if (availableRooms){
                resolve('Номера є!');
            } else {
                reject('Номерів немає.');
            }

        },1500);
    });
}
function checkTickets(data){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log('----checkTickets----');
            console.log ('відповідь на попередньому кроці:', data);
            console.log('Перевіряємо авіа білети...');
            // код який відправляє запит у авіакампанію
            const availableTickets = true;

            if (availableTickets) {
                let message = 'Білети є';
                resolve(message);
            } else {
                let message = 'Білетів немає';
                reject(message);
            }
        },1000);
    });
}

function sabmitVacation(data) {
    console.log('-----sabmitlVacation--------');
    console.log('Відповідь на попередньому кроці:', data);
    console.log('Їдемо у відпустку!');
}
function cancelVacation(data) {
    console.log('-----cancelVacation--------');
    console.log('відповідь на попередньому кроці:', data);
    console.log('Відпустка відміняється!');
}

async function checkVacation(){

try {
    const roomsResult = await chekRooms();
    const ticketsResult = await checkTickets(roomsResult);
    sabmitVacation(ticketsResult)
} catch (err) {
    cancelVacation(err)
}

}
checkVacation();
 */

//---------- практичне заняття 5------Приклад fetch з промісамі отримання данних по API
/*
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json.js')
    .then(function(data) {
        return data.json()
    }).then(function (data){
        console.log(data);

    })
*/

//----отримання інформації з сервера


async function getCurrencies (){
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json.js'
    const response = await fetch(url)
    const data = await response.json();

const usdRate = data[24].rate.toFixed(2);
const eurRate = data[31].rate.toFixed(2);

    // -- відобразимо дані на сторінці----

const usdElement = document.querySelector('#usd');
const eurElement = document.querySelector('#eur');

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
}
getCurrencies();
































































// import { add } from './math_functions.js';
// 'use strict'; 
// Data types
var string = 'string';
var string2 =  "string";
var string3 = 'this is fun y\'all';
//var string3 = "this is fun y'all";
var string4 = "Bryce said coding is \"cool!\"";
//var string4 = 'Bryce said coding is "cool!"';

// integers
var int = 1;
var int2 = 1.0;
var int3 = 1.345;

// boolean
var bool = false;
var bool1 = true;

var bool2 = !false;
var array1 = [];
// console.log('array length: ', array1.length);

var bool3 = !array1.length;
// console.log('bool3:', bool3);

// falsy page 167
var highScore = false;
var highScore2 = 0;
var highScore3 = '';
var highScore4 = 10/'score'; //NaN
var highScore5; // undefined / NULL

var null1 = null;
// console.log('not: ', !(1 === 1));

// var let const
var foo = 'bar';
let baz = 'foo';
// const bar = 'baz';
// x = 'baz';

// console.log(x);

const arrayConst = [1,2];
arrayConst.push(3,4);
// console.log(arrayConst);
arrayConst.pop();
// console.log(arrayConst);

const objConst = {
    name: 'Bryce'
}
objConst.last = 'Mullican';
// console.log(objConst);

{
    let foo2 = 'bar';
    var bar2 = 'foo' + foo2;
}
// console.log(bar2);

var result = 0;
let num1 = 6;
{
    let num1 = 2;
    let num2 = 4;
    result = num1 + num2;
}

// console.log(result);
var bryce;
// console.log(bryce);

// array
var array = [1,2,3];
// console.log(array);
// console.log('array[1]: ',array[1]); //?
// console.log(array.length);

// console.log('first:',array[0]);
// console.log('last:',array[array.length - 1]);

var count = array.push(4,5);
// console.log('count',count, array);

var pop = array.pop();
// console.log('pop:',pop, array);

// obj

var obj = {
    key: 'value',
    name: 'Bryce',
    email: 'bryce.mullican@nunya.com'
    // keyVar: doesn't exist!!!
}

// console.log(obj['key']);
// console.log(obj.key);

var keyVar = 'key';
// console.log('key as a variable:', obj[keyVar]);

// console.log(obj.keyVar); // obj.'key'

var obj1 = {
    sum: sum,
    cost: 1.99,
    tax: 1.22,
    total: function (num1, num2) {
        return num1 + num2;
    }
}
var resultSum = obj1.sum(obj1.cost, obj1.tax);
// console.log(resultSum);

var array2 = [1, 2, sum, function (num1, num2) {
    return num1 + num2;
}]; // 1, 2 , NaN
var result2 = array2[2];
// console.log(result2);

var result3 = array2[3];
// console.log(result3(2,3));

// conditionals
// var condition = 'true';
var condition = 5;
if (condition == true) { // true
    // do stuff
    console.log('true');
    console.log(true);
}
// ==, <, >, >=, <=, || (or), && (and)
if (condition > 4 && condition < 10) { // true  - (5-9)
    // console.log('true yo!');
}
// <=
if ( 'ant' < 'ape') {
    // console.log("'ant' < 'ape'",'true');
}

var condition2 = 'brown';

if (
       condition2 == 'red'
    || condition2 == 'blue'
    || condition2 == 'green'
    || condition2 == 'brown'
    ) {
    // console.log('True');
}
var condition3 = false;
if (condition3) {
    //do stuff
    // console.log('The condition was true');
} else {
    // do other stuff
    // console.log('The condition was false');
}

var condition4 = 'hello';
if (condition4 > 10) {
    console.log('Greater than 10');
} else if (condition4 > 5) {
    console.log('Greater than 5');
} else if (condition4 >= 0) {
    console.log('Greater than 0');
}

// loops
// FOR
// I NEED THIS TO RUN A SPECIFIC NUMBER OF TIMES
// BUT I CAN LEAVE WHENEVER I'M READY TO

// WHILE
// I AM WAITING ON A SPECIFIC BEHAVIOR || CONDITION

// FOREACH
// I NEED TO PROCESS EACH PIECE OF DATA
// && I CAN NEVER LEAVE

let pwdTemp = '!helloWorld';
let char = ['!', '@', '#', '$', '%', '&']  
for (let i = 0; i < pwdTemp.length; i++) {
    for (let j = 0; j < char.length; j++) {
        if (char[j] == pwdTemp[i]) {
            console.log(pwdTemp[i]);
            
            console.log('char pass');
            // return true;
            break;
        }
    }
}

var text = "";
for (var i = 0; i < 5; i++) {
  if (i == 3) {
    // continue;
    // break;
  }
  // follows 
  text = text + i;
}

console.log(text);
// show let scope in while loop
{
    let counter = 0;
    while (counter < 10) { // is true undefined < 10
        // do stuff
        console.log('while:', i);
        counter++;
    }
}

// functions 
// show Using the arguments object
function doStuff() {
    console.log(arguments[1], arguments.length);
    // arguments is array LIKE meaning it does not get prototypal inheritance from the ARRAY
}
doStuff(1,2,3,4);

function argsSum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(argsSum(1,2,3,4));

function sum(num1, num2) {
    return num1 + num2;
}

function checkAge() {
    let today = new Date();
    let birthdate = document.getElementById('date').value.split('-');
    
    let year = today.getFullYear() - Number(birthdate[0]);
    let month = (today.getMonth() + 1) - Number(birthdate[1]);
    let day = today.getDate() - Number(birthdate[2]);
    let pass = false;


    if(year > 18) {
        pass = true;
        console.log('Year is good!');
    } else if (year == 18) {
        console.log('Year is good! Let\'s check month!');

        if (month >= 0) {
            console.log('Month is good! Let\'s check day!');
            if (month == 0) {
                if (day < 0) {
                    pass = false;
                    console.log('Almost your birthday!');
                } else {
                    pass = true;
                    console.log('Day is good! Congrats!');
                }
            } else {
                pass = true;
            }
        }
    }

    console.log(pass ? 'Old Enough!' : 'Too Young!');
}

var pwd = document.getElementById('pwd1');
pwd.addEventListener('keyup', checkPwd);

var showpass = document.getElementById('showpass');
showpass.addEventListener('click', function () {
	var passField = document.getElementById('pwd1');
    passField.type = passField.type == 'password' ? 'text' : 'password';
});

function checkInfo() {
    let username = document.getElementById('username').value;
    let pwd1 = document.getElementById('pwd1').value;
    let pwd2 = document.getElementById('pwd2').value;
    let message = document.querySelector('.message');

    if(username == '' || pwd1 == '' || pwd2 == '') {
        message.innerText = 'Can\'t submit empty fields!';
        return;
    }

    if (!(username.length >= 6)) { // 6
        message.innerText = 'Username must be at least 6 characters long!';
        return;
    }

    if (username == pwd1) {
        message.innerText = 'Username and Password can\'t match!';
        return;
    }

    if (pwd1 != pwd2) {
        message.innerText = 'Passwords must match!';
        return;
    }

    if (checkPwd(pwd1)) {
        message.classList.add('pass');
        message.innerText = 'Good to go';
        setTimeout(() => {
            location = "https://google.com";
        }, 1000);
    } else {
        message.innerText = 'Somethings wrong with the password. Please check password criteria below.';
    }
}

function checkPwd(pwd) {
    pwd = event.target.value ? event.target.value : pwd;
    debugger;
    let rules = {
        // Password must have at least 8 characters, but no more than 20.
        length: checkLength(pwd),
        // Must contain at least one special charcter(!, @, #, $, %, &).
        char: checkChar(pwd),
        // Must contain at least one uppercase letter.
        upper: checkUpperLower(pwd),
        // Must contain at least one lowercase letter.
        lower: checkUpperLower(pwd, false),
        // Must contain at least one number.
        number: checkNumber(pwd),
        // Can't contain spaces.
        space: checkSpace(pwd)
    }
    // let tests = document.querySelectorAll('.test');

    return  rules.length 
            && rules.char
            && rules.upper 
            && rules.lower 
            && rules.number
            && rules.space;
}

// Password must have at least 8 characters, but no more than 20.
function checkLength(pwd) {
    let test = document.querySelector('.test-length');
    
    if (pwd.length >= 8 && pwd.length <= 20) { // 8-20
        console.log('length pass');
        test.classList.add('pass');
        return true;
    }

    test.classList.remove('pass');
    return false;
}

// Must contain at least one special charcter(!, @, #, $, %, &).
function checkChar(pwd) {
    let test = document.querySelector('.test-char');
    let char = ['!', '@', '#', '$', '%', '&']
    
    // for (let i = 0; i < pwd.length; i++) {
    //     for (let j = 0; j < char.length; j++) {
    //         if (char[j] == pwd[i]) {
    //             console.log('char pass');
    //             test.classList.add('pass');
    //             return true;
    //         }
    //     }
    // }

    for (let i = 0; i < char.length; i++) {
        if (pwd.length > 0 && pwd.includes(char[i])) {
            console.log('char pass');
            test.classList.add('pass');
            return true;
        }
    }

    test.classList.remove('pass');
    return false;
}
// Must contain at least one uppercase letter.
// Must contain at least one lowercase letter.
function checkUpperLower(pwd, upper = true) {
    let selector = '.test-upper';
    if (!upper) {
        selector = '.test-lower';
    }
    let test = document.querySelector(selector);
    
    let char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    for (let i = 0; i < pwd.length; i++) {
        for (let j = 0; j < char.length; j++) {
            let letter = char[j];
            if (upper) {
                letter = letter.toUpperCase();
            }
            if (letter == pwd[i]) {
                console.log('upper/lower pass');
                test.classList.add('pass');
                return true;
            }
        }
    }

    test.classList.remove('pass');
    return false;
}

// Must contain at least one number.
function checkNumber(pwd) {
    let test = document.querySelector('.test-number');
    let char = [0,1,2,3,4,5,6,7,8,9];
    
    for (let i = 0; i < pwd.length; i++) {
        for (let j = 0; j < char.length; j++) {
            //https://stackoverflow.com/questions/33705381/is-a-string-of-whitespace-truthy-or-falsy-in-javascript
            // The MV of StringNumericLiteral ::: StrWhiteSpace is 0.
            // " " == 0
            // Number(" ") == 0
            if (char[j] === Number(pwd[i])) {
                console.log('number pass');
                test.classList.add('pass');
                return true;
            }
        }
    }

    test.classList.remove('pass');
    return false;
}
// Can't contain spaces.
function checkSpace(pwd) {
    if (pwd.key) {
        return;
    }

    let test = document.querySelector('.test-space');
    
    if (!pwd.length) {
        test.classList.remove('pass');
        return false;
    }

    for (let i = 0; i < pwd.length; i++) {
        if (pwd[i] == ' ') {
            test.classList.remove('pass');
            return false;
        }
    }
    
    console.log('space pass');
    test.classList.add('pass');
    return true;
}

function add(num1, num2) {
    return num1 + num2;
}

var result = add(15,10);
// process more info || output to DOM
console.log(result);

var hello = function hello() {
    console.log('This message?');
    return true;
}

var foo = hello;
var bar = foo;
console['log'](bar());

console.log(add(10,10));


// New material
// dom
// var itemOne = document.getElementById('one');
// itemOne.classList.add('foo');
// itemOne.style.color = 'red';
// itemOne.innerText = 'hello';
// var temp2 = itemOne.innerText;
// console.log(temp2);
var foo3 = document.querySelector('li.foo');
console.log(foo3);

var foo4 = document.getElementsByClassName('foo');
console.log(foo4);
// foo4.foreach(function(el){
//     console.log(el);
// });

var foo5 = document.getElementsByTagName('li');
console.log(foo5);
console.log(foo5.item(1));

var foo6 = document.querySelectorAll('.foo');
console.log(foo6);
console.log(foo6.item(1));

console.log(foo3.parentNode);
console.log(foo3.previousSibling);
console.log(foo3.nextSibling);

var output = document.getElementById('output');
for (let i = 0; i < 5; i++) {
    let el = document.createElement('li');
    el.innerText = `This is element: ${i}`;
    output.appendChild(el);
}

var buttons = document.querySelectorAll('.button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
}

function buttonClick(event) {
    let button = event.target;
    if (button.getAttribute('data-char') == 'x') {
        console.log('times');
    }
    if (button.getAttribute('data-char') == '/') {
        console.log('divide');
    }
}

// foo6.foreach(function(el){
//     console.log(el);
// });

// events
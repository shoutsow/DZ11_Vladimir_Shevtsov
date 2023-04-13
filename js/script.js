document.write(`<p>` + '1)' + `&emsp;`);
function mindiv(a, b, c) {
    let res = (a - b) / c;
    return res;
}
document.write('Результат работы функции "mindiv" ((a - b) / c):' 
+ `<br>` + `<p class="res">` + mindiv(10, 5, 2) + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '2)' + `&emsp;`);
function squareandcube(a) {
    let square = a ** 2;
    let cube = square * a;
    document.write('Результат работы функции "squareandcube" (a ** 2 & a ** 3):' 
+ `<br>` + `<p class="res">` + square + `&ensp;` + cube + `</p>`);
}
squareandcube(5);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '3)' + `&emsp;`);
function min(a, b) {
    if (a < b) {
        return a;
    } else if (a == b) {
        return 'числа равны';
    } else {
        return b;
    }
}
function max(a, b) {
    if (a > b) {
        return a;
    } else if (a == b) {
        return 'числа равны';
    } else {
        return b;
    }
}
document.write(`<p>` + 'Результат работы функции "min" (определение и возврат меньшего из пары):' + `</p>` 
+ `<br>` + `<p class="res">` + min(2, 22) + `</p>` + `<br>`); 
document.write(`<p>` + 'Результат работы функции "max" (определение и возврат большего из пары):' + `</p>` 
+ `<br>` + `<p class="res">` + max(2, 22) + `</p>`); 
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '4)' + `&emsp;`);
function arrayreturn() {
    let arr = [];
    let s = +prompt('Введите начало диапазона целочисленного массива (целое число)', '10');
    let e = +prompt('Введите конец диапазона целочисленного массива (целое число)', '30');
    for (let i = s; i <= e; i++) {
        arr.push(i);
    }    
    return arr
}
function arraywrite() {
    document.write('Результат работы функции "arrayreturn" + "arraywrite" (возврат + вывод числового массива):' 
    + `<br>` + `<p class="res">` + arrayreturn() + `</p>`);
}
arraywrite();
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '5)' + `&emsp;`);
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
document.write('Результат работы функции "isEven" (определение чётного числа):' 
+ `<br>` + `<p class="res">` + isEven(8) + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '6)' + `&emsp;`);
function evenarray() {
    let arr = [];
    let evenarr = [];
    let i = 0;
    while(true) {
        arr.push (prompt('Вводите целые числа, пока не надоест. Затем оставьте поле пустым', 22));
        if (!(arr[i]).trim()) {
            arr.pop();
            break;
        }
        else if (isFinite(+arr[i]) !== true) {
            alert('Будьте внимательней, это НЕ число!');
            arr.pop();
            continue;   
        }
        i++;
    }
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i]) == true) {
            evenarr.push (arr[i]);
        }
    }
    return evenarr;
}
document.write('Результат работы функции "evenarray" (только чётные из чисел введённого массива):' 
+ `<br>` + `<p class="res">` + evenarray() + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '7)' + `&emsp;`);
document.write('Результат работы функции "pyramidka" смотреть в консоли');
function pyramidka(strnum, symb) {
    if (+strnum == NaN) {
        return;
    }
    for(let i = 1; i < strnum; i++) {
      let str = '';
      for(let j = 0; j < i; j++) {
        str += symb == undefined || symb.trim() == '' ? i : symb;
      }
      console.log(str + '\n');
    }
}
pyramidka(prompt('Введите число строк, из которых будет построена пирамидка', '9'),
prompt('Введите символ, если хотите'));
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '8)' + `&emsp;` + 'Равнобедренный треугольник из звездочек + перевёрнутый:' + `<br>`);
function trezv() {
    let nstr = +prompt('Введите количество рядов треугольника' 
    + '(до 45, чтобы не появилось горизонтальной прокрутки)', '15');
    let str = '*';
    document.write(str + `<br>`);
    for (let i = 1; i < nstr; i++) {
        str += '**';
        document.write(str + `<br>`);
    }
    function trezvrev() {
        document.write(`<br>` + str + `<br>`);
        for (let i = 1; i < nstr; i++) {
            str = str.slice(0, -2);
            document.write(str + `<br>`);
        } 
    }
    trezvrev();
}
trezv();
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '9)' + `&emsp;`);
function fibo() {
    let farr = [];
    let farr1st = 0;
    let farr2nd = 1;
    farr.push(farr1st, farr2nd);
    for (let i = 2; i <= 1000; i++) {
            farr.push(farr[i - 1] + farr[i - 2]);
    }
    return farr;
}
document.write('Результат работы функции "fibo" (возвращает массив заполненный числами Фибоначи от 0 до 1000)' 
+ `&ensp;` + 'смотреть в консоли, т.к. непонятно, как его вывести на страницу без горизонтальной прокрутки.' + `<br>`);
console.log(fibo());
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '10)' + `&emsp;`);
function sumtill1(num) {
    let sum = 0;
    let arr = String(num).split('');
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    if (sum > 9) {
        return sumtill1(sum);
    } else {
        return sum;
    }
}
let num = 228;
document.write('Результат работы функции "sumtill1" (Складывание цифр пока сумма сама не станет одной цифрой):' 
+ `<p class="res">` + sumtill1(num) + `</p>` + `<br>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '11)' + `&emsp;`);
document.write('Результат работы функции "showarr" (вывод элементов массива, используя рекурсию и не используя цикл):' 
+ `<br>`);
let arr = [58, 33, 15, 4, 356, 2, 798, 9, 112, 10];
function showarr(arr, i) {
    if (i == arr.length) {
        return;
    }
    document.write(`<p class="res">` + arr[i]  + `</p>`);
    showarr(arr, i + 1);
}
showarr(arr, 0);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '12)' + `&emsp;`);
document.write('Результат работы функции "starframe" смотреть в консоли');
function starframe(length) {
    let frame = '';
    for (let i = 0; i < length; i++) {
        frame += '*';
    }
    console.log(frame);
}
let str = [];
str.push('Домашняя работа "Функции"');
let grn = prompt('Введите номер группы', 'BE109');
str.push('Выполнил студент гр. ' + grn);
let lsname = prompt('Введите фамилию', 'Шевцов');
let fstname = prompt('Введите имя', 'Владимир');
let scndname = prompt('Введите отчество', 'Яковлевич');
let fullname = lsname + ' ' + fstname + ' ' + scndname;
str.push(fullname);
let frameln = 0;
for (let i = 0; i < str.length; i++) {
    if (frameln < str[i].length) {
        frameln = str[i].length;
    }
}
frameln += 2;
starframe(frameln);
for (let i = 0; i < str.length; i++) {
    let resstr = '*';
    for (let j = 0; j < frameln; j++) {
        if (str[i][j] === undefined) {
            if (j === frameln - 2){
                resstr += '*';
            } 
            else {
                resstr += ' ';
            }
        } 
        else {
            resstr += str[i][j];
        }
    }
    console.log(resstr);
}
starframe(frameln);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p>` + '13)' + `&emsp;`);
document.write('Пока не осилил');
document.write(`</p>` + `<br>` + `<hr>`);
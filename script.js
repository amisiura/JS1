
/*
// 1

var student = "Alex";
console.log(student);
student="Misiura";
console.log(student);

//2
*/
var yourName = prompt("Введите свое имя");
alert(`Добро пожаловать ${yourName}!`);

//3
var page=confirm("Вы и правда хотите загрузить эту страницу?");

//4
var r = '9' + 0; //90
var r = 9 + '0';//90
var r = 4 + 9; //13
var r = null + 7; //null
var r = '6' + null; //6null

//5
console.log(+‘9’ + 9);


//6
‘4’ == 4 || ‘4’ === 4 // первое сравнивает только по значению, второе еще и по типу данных. true - false

//7
2/3 + 1 + 1/3 == 2; // false. JS
//Всё дело в том, что в стандарте IEEE 754 на число выделяется ровно 8 байт(=64 бита), не больше и не меньше.


//8
var obj = {},
    r = 0;

obj.prop = 9;
r = obj.prop;
delete obj.prop;

console.log(obj.prop, r);  /// будет 0, так как мы сначала добавляем свойство со значением 9, а потом удаляем его, а после удаления остается прежнее значение.


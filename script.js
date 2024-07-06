//easy task
// 1
// let number = prompt("Введите число: ");
// if (number % 2 === 0){
//     console.log("Это четное число")
// } else{
//     console.log("Это нечетное число")
// }

// 2
// let num1 =  prompt("Введите первое число: ");
// let num2 = prompt("Введите второе число: ")
// if (num1 < num2){
//     console.log("Наибольшее число второе ", num2)
// } else if (num1 > num2){
//     console.log("Наибольшее число первое ", num1)
// } else{
//     console.log("Они равны")
// }

// 3
// let visokos;
// let year = prompt("Напишите год: ");
// visokos = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? "Это високосный год" : "Это не високосный год";
// console.log(visokos)

// 4
// let variable = typeof("Di");
// if (variable == "string"){
//     console.log("Переменная является строкой")
// } else if (variable == "number"){
//     console.log("Переменная является числом")
// } else{
//     console.log("Переменная не является строкой или числом")
// }

// 5
// let hour = prompt("Введите число от 6 и больше : ");
// if ((hour >= 6) && (hour < 12)){
//     console.log("Доброе утро!")
// } else if ((hour >= 12) && (hour < 18)){
//     console.log("Добрый день!")
// } else{
//     console.log("Доброй ночи!")
// }

// 6
// let num1 = prompt("Первое число: ");
// let num2 = prompt("Второе число: ");
// let num3 = prompt("Третье число: ");
// if ((num1 > num2) && (num1 > num3)){
//     console.log(num1)
// } else if ((num2 > num1) && (num2 > num3)){
//     console.log(num2)
// } else{
//     console.log(num3)
// }

// 7
// const login = "di";
// const password = "1234";
// let user_login = prompt("Введите логин: ");
// let user_password = prompt("Введите пароль: ");
// if ((user_login == login) && (user_password == password)){
//     console.log("Доступ разрешен")
// } else{
//     console.log("Доступ запрещен")
// }

// 8
// let month = prompt("Введите число от 1 до 12: ")
// if (month == 1){
//     console.log("Январь")
// } else if(month == 2){
//     console.log("Февраль")
// } else if(month == 3){
//     console.log("Март")
// } else if(month == 4){
//     console.log("Апрель")
// } else if(month == 5){
//     console.log("Май")
// } else if(month == 6){
//     console.log("Июнь")
// } else if(month == 7){
//     console.log("Июль")
// } else if(month == 8){
//     console.log("Август")
// } else if(month == 9){
//     console.log("Сентябрь")
// } else if(month == 10){
//     console.log("Октябрь")
// } else if(month == 11){
//     console.log("Ноябрь")
// } else if(month == 12){
//     console.log("Декабрь")
// } else{
//     console.log("Вы ввели некорректное значение")
// }

// 9
// let age = prompt("Напишите ваш возраст: ");
// if (age <= 12){
//     console.log("Детский возраст")
// } else if ((age > 12) && (age < 18)){
//     console.log("Подростковый возраст")
// } else{
//     console.log("Пожилой возраст")
// }

// 10
// let month = prompt("Введите месяц от 1 до 12: ");
// if (((month > 0) && (month <= 2)) || (month == 12)){
//     console.log("Зима")
// } else if ((month > 2) && (month <= 5)){
//     console.log("Весна")
// } else if ((month > 5) && (month <= 8)){
//     console.log("Лето")
// } else if ((month > 8) && (month <= 11)){
//     console.log("Осень")
// } else{
//     console.log("Некорректный месяц")
// }

//medium task
// 1
// let person = prompt("Сколько гостей пришло?");
// if (person == 1){
//     console.log("0")
// } else if (person % 2 == 0){
//     console.log(person / 2)
// } else{
//     console.log(person)
// }

// 2
// let apples = prompt("Сколько яблок у вас есть?");
// if (apples % 3 == 0){
//     console.log("Да, яблоки можно разделить между тремя детьми")
// } else{
//     console.log("Нет, разделить яблоки между тремя детьми невозможно")
// }

// 3
// let a = Number(prompt("Длина первой стороны: "));
// let b = Number(prompt("Длина первой стороны: "));
// let c = Number(prompt("Длина первой стороны: "));
// if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
//     console.log("Такой треугольник существует")
// } else{
//     console.log("Такой треугольник не существует")
// }

// 4
// let a = Number(prompt("Длина первой стороны: "));
// let b = Number(prompt("Длина первой стороны: "));
// let c = Number(prompt("Длина первой стороны: "));
// if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
//     if ((a == b) && (b == c) && (a == c)){
//         console.log("Равносторонний треугольник")
//     } else if ((a == b) || (b == c) || (a == c)){
//         console.log("Равнобедренный треугольник")
//     } else {
//         console.log("Разносторонний треугольник")
//     }
// } else{
//     console.log("Несуществующий треугольник")
// }

// 5
// let weight = Number(prompt("Напишите вес товара: "));
// let delivery_country = prompt("Напишите страну доставки: ");
// if (weight <= 1) {
//     alert("Стоимость доставка составляет 10 доллоров")
// } else if (((weight > 1) && (weight <= 5)) && (delivery_country == "США")){
//     alert("Стоимость доставки составляет 20 долларов")
// } else if (((weight > 1) && (weight <= 5)) && (delivery_country == "Другая страна")){
//     alert("Стоимость доставки составляет 30 долларов")
// } else if (weight > 5){
//     alert("Стоимость доставки составляет 50 долларов")
// }
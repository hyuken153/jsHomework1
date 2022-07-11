/*
Đầu vào: Số có 2 chữ số

Xử lý:
B1: gọi biến hàng chục ten, biến hàng đơn vị unit
B2: gọi biến tổng sum
B3: lấy số hàng chục: ten%10
B4: Lấy số hàng đơn vị: unit/10
B5: công thức tổng: sum = ten + unit

Đầu ra: giá trị sum
*/

var number = 69;
console.log("Random number = " + number);
var unit = null;
console.log("unit of number =" + unit);
var ten = null;
console.log("tens of number =" + ten);
ten = Math.floor(number / 10) ;
unit = number % 10;
var sum = null;
sum = ten + unit;
console.log("Sumary Value = " + sum);
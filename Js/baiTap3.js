/*
Đầu Vào: Số USD

Xử lý:
B1: gọi biến số tiền USD, đơn vị VND, đơn vị USD  
B2: gọi biến giá trị 1 USD = 23500 VND
B3: gọi biến tổng số tiền quy đổi total
B4: công thức total = USD * 1USD

Đầu ra: Xuất giá trị tổng total VND
*/

var vietnamCurrentcy = "VND";
var usdCurrentcy = "USD"
const ONE_USD = 23500;
console.log("One USD = " + ONE_USD,vietnamCurrentcy);
var usdConversion = 5;
console.log("USD amount: " + usdConversion,usdCurrentcy);
var totalExchanged = null;
totalExchanged = ONE_USD * usdConversion;
console.log("Total Exchanged Value: " + totalExchanged,vietnamCurrentcy);
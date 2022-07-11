/*
Đầu vào: chiều dài, chiều rộng

Xử lý:
B1: Gọi biến chiều dài length, chiều rộng width
B2: GỌi biến diện tích area, biến chu vi perimeter
B3: công thức diện tích HCN: area = length * width
B4: công thức chu vi HCN: perimeter = (length + width) * 2

Đầu ra: xuất giá trị diện tích, chu vi HCN
*/

var length = 10;
console.log("Length of a rectangle = " + length);
var width = 20;
console.log("Width of a rectangle = " + width);
var area = null;
var perimeter = null;
area = length * width;
perimeter = (length + width) * 2;
console.log("Area of a rectangle = " + area);
console.log("Perimeter of a rectangle = " + perimeter);

/* 
Đầu vào: Số ngày làm, lương mỗi ngày

Xử lý : 
 B1: tạo biến số ngày làm workingDay và lương mỗi ngày DAILY_SALARY 
 B2: tạo biến lương tổng grossSalary
 B3: sử dụng công thức grossSalary = workingDay * DAiLY_SALARY

 Đầu ra: giá trị lương tổng
 */ 
const DAILY_SALARY = 100000;
console.log("Daily Salary = " + DAILY_SALARY);
var workingDay = 10;
console.log("Working Days: " + workingDay);
var grossSalary = null;
grossSalary = workingDay * DAILY_SALARY;
console.log("Gross Salary: " + grossSalary);
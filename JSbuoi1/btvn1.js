function calculateRectangle(length, width) {
  let perimeter = (length + width) * 2;
  let area = length * width;
  console.log("Chu vi hình chữ nhật là : " + perimeter);
  console.log("Diện tích hình chữ nhật là : " + area);
}

calculateRectangle(5, 4);

function calculateCircle(radius) {
  let perimeter = 2 * 3.14 * radius;
  let area = radius * radius * 3.14;
  console.log("Chu vi hình tròn là : " + perimeter);
  console.log("Diện tích hình tròn là : " + area);
}
calculateCircle(3);

function simpleEquation(a, b) {
  let result = -b / a;
  console.log("Phương trình có một nghiệm x =" + result);
}
simpleEquation(4, 5);

function unitConversion(number) {
  let mmConvert = number * 10;
  let mConvert = number / 100;
  let kmConvert = number / 100000;
  console.log(number + "cm = " + mmConvert + "mm");
  console.log(number + "cm = " + mConvert + "m");
  console.log(number + "cm = " + kmConvert + "km");
}
unitConversion(20);

function heatUnitConversion(number) {
  let fConvert = number * 1.8 + 32;
  let kConvert = number + 273.5;
  console.log(number + "độ C = " + fConvert + " độF");
  console.log(number + "độ C = " + kConvert + " độK");
}
heatUnitConversion(17);

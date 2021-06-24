var num = 10;
function addFive(num) { 
return num+5;
}
var result = addFive(num);
console.log(result);

///opposite function
var num1 = 5;
function getOpposite(num) {
    return num*(-1)
}
var result2 = getOpposite(num1)
console.log(result2);

//to secs
var min = 5;
function toSeconds(min) 
{
return min*60;
}
var secs = toSeconds(min);
console.log(secs);

var mystr = "5";
function toInteger(mystr) {
    return +mystr
}
var myint = toInteger(mystr);
console.log(myint);

var myint = 0;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint);


var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(data);

function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7)
console.log(peri);

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value
    num2 = document.getElementById("secondNumber").value
    document.getElementById('result').innerHTML = num1 * num2
}
function divideBy() {
    num1 = document.getElementById("firstNumber").value
    num2 = document.getElementById("secondNumber").value
    document.getElementById('result').innerHTML = num1 / num2;
}

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);

console.log(document.url)

var var_name = 'abcdefg';
var n = 120;
this[var_name] = n;
console.log(this[var_name])

filename = "shreyas.html"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());
var line = "--------------------------------------------"

// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
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

console.log(line)

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit
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

console.log(line)

// Write a JavaScript program to get the website URL (loading page)
console.log(document.url)

console.log(line)

// Write a JavaScript exercise to create a variable using a user-defined name
var var_name = 'abcdefg';
var n = 120;
this[var_name] = n;
console.log(this[var_name])

console.log(line)

// Write a JavaScript exercise to get the extension of a filename
filename = "shreyas.html"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());

console.log(line)

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
function difference(n) {
  if (n <= 13)
    return 13 - n;
  else 
  return (n - 13) * 2
}
console.log(difference(45))
console.log(difference(12))

console.log(line)

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum
function sumTriple(x, y) {
  if (x == y)
  return 3 * (x + y);
  else
  return (x + y);
}
console.log(sumTriple(3, 3)); 
console.log(sumTriple(3, 5)); 

console.log(line) 

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
function testFifty(x, y) {
  return (x == 50 || y == 50 || (x + y == 50))
}
console.log(testFifty(34, 25));
console.log(testFifty(50, 25));
console.log(testFifty(25, 50));
console.log(testFifty(25, 22));
console.log(testFifty(25, 25));

console.log(line)

// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function testHundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
         ( Math.abs(400 - x) <= 20));
}
console.log(testHundred(20))
console.log(testHundred(40))
console.log(testHundred(356))
console.log(testHundred(557))

console.log(line)

// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
function pos_neg(x, y) {
  if (x < 0 && y > 0 || x > 0 && y < 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(pos_neg(2, 4))
console.log(pos_neg(2, -6))
console.log(pos_neg(0, 4))
console.log(pos_neg(5, 4))

console.log(line)

// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string
function stringCheck(str1) {
  if (str1 == null || str1 == undefined || str1.substring(0, 2) === 'Py') {
    return str1;
  }
  else {
    return "Py"+str1;
  }
}
console.log(stringCheck("thon"))
console.log(stringCheck("Python"))

console.log(line)

// Write a JavaScript program to remove a character at the specified position of a given string and return the new string

function removeChar(str, char_pos) {
  part1 = str.substring(0, char_pos)
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}

console.log(removeChar("python", 0))
console.log(removeChar("python", 1))
console.log(removeChar("python", 2))
console.log(removeChar("python", 3))
console.log(removeChar("python", 4))
console.log(removeChar("python", 5))

console.log(line);

//  Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
function firstLast(str1) {
  if (str1.length <= 1) {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return(str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(firstLast('a'))
console.log(firstLast('ab'))
console.log(firstLast('abc'))
console.log(firstLast('abcd'))

console.log(line)

//Check whether a given positive number is a multiple of 3 or a multiple of 7
function test3_7(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(test3_7(21))
console.log(test3_7(5))
console.log(test3_7(42))

console.log(line)

// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
function fronBack3(str) {
  if (str.length >= 3) {
    str_len = 3;

    back = str.substring(str.length - 3);
    return back + str + back
  }
  else {
    return false;
  }
}
console.log(fronBack3('abc'));
console.log(fronBack3('ab'));
console.log(fronBack3('abcd'));

console.log(line)

//Write a JavaScript program to check whether a string starts with 'Java' and false otherwise
function checkJavaStart(str) {
  if (str.length < 4) {
    return false;
  }
  front = str.substring(0, 4)
  if (front == "Java") {
    return true;
  }
  else {
    return false;
  }
}
console.log(checkJavaStart('Java'))
console.log(checkJavaStart('JavaSript'))
console.log(checkJavaStart('Shreyas'))

console.log(line);

//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function checkNumbers(x, y) {
  if (x >= 52 && x <= 99 || y >= 52 && y <= 99) {
    return true;
  }
  else {
    return false;
  }
}
console.log(checkNumbers(12, 101))
console.log(checkNumbers(52, 80))
console.log(checkNumbers(15, 99))

console.log(line)

//Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function check3Numbers(x, y, z) {
  if (x >= 52 && x <= 99 || y >= 52 && y <= 99 || z >= 52 && z <= 99) {
    return true;
  }
  else {
    return false;
  }
}
console.log(check3Numbers(50, 90, 99))
console.log(check3Numbers(5, 9, 199))
console.log(check3Numbers(65, 89, 199))

console.log(line)

//Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one
function checkScript(str) {
  if (str.length < 6) {
    return str;
  }
  let result_str = str;
  if (str.substring(10, 4) == "Script") {
    result_str = str.substring(0, 4) + str.substring(10, str.length); 
  }
  return result_str;
}
console.log(checkScript("JavaScript"));
console.log(checkScript("CoffeeScript"));

console.log(line)

//Write a JavaScript program to find the largest of three given integers.
function maxOfThree(x, y, z) {
  max_val = 0;
  if (x > y) {
    max_val = x
  } else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z
  }
  return max_val
}
console.log(maxOfThree(1, 0, 1));
console.log(maxOfThree(0,-10,-20));
console.log(maxOfThree(1000,510,440));

console.log(line)

//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values
function near100(x, y) {
  if (x != y) {
    x1 = Math.abs(x - 100)
    y1 = Math.abs(y - 100)

    if (x1 < y1) {
      return x;
    }
   if (y1 < x1) {
        return y;
      }
      return 0;
  }
   else {
    return false;
  }
}
console.log(near100(90, 89));
console.log(near100(-90, -89));
console.log(near100(90, 90));

console.log(line)

//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function num_range(x, y) {
  if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
     (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
      return true;
     } else {
      return false;
     }
}
console.log(num_range(44, 56));
console.log(num_range(70, 95));
console.log(num_range(50, 89));

console.log(line) 

//Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function max_townums_range(x, y){	
if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
if(x === y){
return "Numbers are the same";
}else if (x > y){
return x;
}else{
return y;
}
}else{
return "Numbers don't fit in range";
}
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));

console.log(line)

//Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
function check_char(str1, char) {
  ctr = 0;
  for (let i = 0; i < str1.length; i++ ) {
    if ((str1.charAt(i) == char) && (i >= 1 && i <= 3)) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) return true;
  return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));

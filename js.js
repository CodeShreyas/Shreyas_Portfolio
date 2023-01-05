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

console.log(line)

// Write a JavaScript program to check whether the last digit of the three given positive integers is same.
function last_digit(x, y, z) {
  if ((x > 0) && y > 0 && z > 0) {
    return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
  } else {
    return false;
  }
}
console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));

console.log(line)

// Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case
function upper_lower(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);
  return front_part + back_part
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));

console.log(line)

//Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade where total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise
function exam_status(totmarks, is_exam) {
  if (is_exam) {
    return totmarks >= 90;
  }
  return (totmarks >= 89 && totmarks <= 100);
}
console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));

console.log(line);

// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function sortaSum(x, y) {
  const sum_nums = x + y
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sortaSum(30,20));
console.log(sortaSum(90,80));

console.log(line)

//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8
function check8(x, y) {
  if (x == 8 || y == 8) {
    return true;
  } else if ((x + y )== 8 || Math.abs(x - y) == 8) {
    return true;
  } else {
    return false
  }
}
console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18));

console.log(line)

//Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40
function three_numbers(x, y, z) {
  if (x == y && y == z) {
    return 30;
  } else if (x == y || y == z || x == z) {
      return 40;
  } else {
    return 20;
  }
}
console.log(three_numbers(8, 8, 8));
console.log(three_numbers(8, 8, 18));
console.log(three_numbers(8, 7, 18));

console.log(line);

// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode
function number_order(x, y, z) {
  if (y > x && z > y) {
    return "strict mode";
  } else if (z > y){
    return "soft mode";
    } else {
      return "undefined";
    }
}
console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));

console.log(line);

//Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit
function same_last_digit(p, q, r) {
  return (p % 10 === q % 10)  ||
         (p % 10 === r % 10)  ||
         (q % 10 === r % 10)
}
console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(20,22,45));

console.log(line)

//Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others
function lessby20_others(x, y, z) {
  return (x >= 20 && (x < y || x < z)) ||
         (y >= 20 && (y < x || y < z)) ||
         (z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));

console.log(line)

// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15
function test15(x, y) {
  if (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15) {
    return true;
  } else {
    return false;
    }
}
console.log(test15(15, 9));
console.log(test15(25, 15));
console.log(test15(7, 8));
console.log(test15(25, 10));
console.log(test15(5, 9));
console.log(test15(7, 9));
console.log(test15(9, 25));

console.log(line)

// Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11
function valCheck (a, b) {
  if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
  return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
  }
else
  return false;
  }
  console.log(valCheck(14, 21));
  console.log(valCheck(14, 20));
  console.log(valCheck(16, 20));

  console.log(line)

  // Write a JavaScript program to check whether a given number is presents in the range 40..10000
  function checkNumbers(x) {
    if (x >= 40 && x <= 10000) {
      return "Inputted number is in the range! :)"
    }  else {
        return "Inputted number is not in the range, :("
       }
  }
  console.log(checkNumbers(0))
  console.log(checkNumbers(69))

  console.log(line)

  // Write a JavaScript program to reverse a given string
  function string_reverse(str) {
    return str.split("").reverse().join("")
  }
  console.log(string_reverse("w3resource"));
  console.log(string_reverse("www"));
  console.log(string_reverse("JavaScript"));

  console.log(line)

  //Write a JavaScript program to replace every character in a given string with the character following it in the alphabet
  function LetterChanges(text) {
    var s = text.split("")
    for (var i = 0; i < s.length; i++) {
      switch(s[i]) {
        case "":
        break;
        case "z":
        s[i] = "a"
        break;
        case "Z":
        s[i] = "A"
        break;
        default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
      }

      switch(s[i]) {
        case "a": case "e": case "i": case "o": case "u" :
        s[i] = s[i].toUpperCase();
      }
    }
    return s.join('')
  }
  console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));
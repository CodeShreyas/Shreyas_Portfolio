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

console.log(line)

// Write a JavaScript program to capitalize the first letter of each word of a given string.
function capital_letter(str) {
  str = str.split(" ")
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ")
}
console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

console.log(line)

// Write a JavaScript program to convert a given number to hours and minutes
function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    
    return hours + ":" + minutes; 
}
console.log(time_convert(69));
console.log(time_convert(911));
console.log(time_convert(100));

console.log(line) 

// Write a JavaScript program to convert the letters of a given string in alphabetical order
function alphabet_Soup(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_Soup("Python"));
console.log(alphabet_Soup("Exercises"));

console.log(line)

//  Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string
function ab_Check(str) {
  return (/a...b/).test(str) || (/b...a/).test(str)
}
console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));

console.log(line)

//Write a JavaScript program to count the number of vowels in a given string
function vowel_Count(str) {
  return str.replace(/[^aeiou]/g, "").length
}
console.log(vowel_Count("Python"));
console.log(vowel_Count("codeShreyas.github.io/Shreyas_Portfolio"));

console.log(line)

//  Write a JavaScript program to check whether a given string contains equal number of p's and t'sb
function equal_pt(str) {
   var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));

console.log(line)

//JavaScript program to divide two positive numbers and return the result as string with properly formatted commas
n1 = 80;
n2 = 6;
  
var div = Math.round(n1 / n2).toString(),
        result_array = div.split("");

    if (div >= 1000)
       {
        for (var i = div.length - 3; i > 0; i -= 3) 
        {
            result_array.splice(i, 0, ",");
        }
          result_array;
    }
console.log(result_array);

console.log(line)

//Write a JavaScript program to create a new string of specified copies (positive number) of a given string
function string_copies(str, n) {
  if (n < 0) {
    return false;
  } else {
      return str.repeat(n)
    }
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));

console.log(line)

//Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above
function newstring(str) {
  if (str.length >= 3) {
    result_str = str.substring(str.length - 3)
    return result_str + result_str + result_str + result_str
  } else {
    return false
    }
}
console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));

console.log(line)

// Write a JavaScript program to extract the first half of a string of even length
function first_half(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2)
  }
  return str
}
console.log(first_half("Python"));  
console.log(first_half("JavaScript")); 
console.log(first_half("PHP"));

console.log(line)

// Write a JavaScript program to create a new string without the first and last character of a given string
function without_first_end(str) {
  return str.substring(1, str.length - 1)
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'));

console.log(line)

//  Write a JavaScript program to concatenate two strings except their first character
function concatenate(str1, str2) {
  str1 = str1.substring(1, str1.length)
  str2 = str2.substring(1, str2.length)
  return str1 + str2
}
console.log(concatenate("PHP","JS"));
console.log(concatenate("A","B"));
console.log(concatenate("AA","BB"));

console.log(line)

// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three
function right_three(str) {
  if(str.length > 1) {
    return str.slice(-3) + str.slice(0, -3)
  }
  return str
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));

console.log(line)

//  Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three
function middle_three(str) {
  if(str.length % 2!= 0) {
    mid = (str.length + 1)/2
    return str.slice(mid -2, mid + 1)
  }
  return str
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));

console.log(line)

// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string
function str_con_cat(str1, str2) {
  const m = Math.min(str1.length, str2.length)
  return str1.substring(str1.length - m) + str2 .substring(str2.length - m)
}
console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));

console.log(line)

// Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6
function end_script(str) {
  if (str.substring(str.length - 6, str.length) == "Script") {
    return true
  } else {
    return false
    }
}
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));

console.log(line)

// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank
function city_name(str) {
  if (str.length >= 3 && ((str.substring(0, 3) == "Los") || (str.substring(0, 3) == "New"))) {
    return str;
  } else {
    return ''
    }
}
console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));

console.log(line)

//  Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied
function nop(str) {
  let start_pos = 0;
  let end_pos = str.length;

  if (str.length > 0 && str.charAt(0) == 'P') 
    { 
      start_pos = 1; 
    }

  if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
  {
    end_pos--;
  }

  return str.substring(start_pos, end_pos);
}

console.log(nop("PythonP"));
console.log(nop("Python"));
console.log(nop("JavaScript"));

console.log(line)

// Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n
function two_string(str, n) {
  first_part = str.substring(0, n)
  last_part = str.substring(str.length - n)
  return first_part + last_part
}
console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));

console.log(line)

// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3
function sum_three(nums) {
  return nums[0] + nums[1] + nums[2]
}
console.log(sum_three([10, 32, 20]));  
console.log(sum_three([5, 7, 9])); 
console.log(sum_three([0, 8, -11]));

console.log(line)

// Write a JavaScript program to rotate the elements left of a given array of integers of length 3
function rotate_elements_left(array) {
  return [array[1], array[2], array[0]]
}
console.log(rotate_elements_left([3, 4, 5]));  
console.log(rotate_elements_left([0, -1, 2]));  
console.log(rotate_elements_left([7, 6, 5])); 

console.log(line)

// Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1
function first_last_1(nums) {
  var end_pos = nums.length - 1
  return nums[0] == 1 || nums[end_pos] == 1
}
console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));

console.log(line)

// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3
function first_last_same(nums) {
  var end = nums.length -1
  if (nums.length >= 1) {
    return nums[0] == nums[end]
  } else {
    return false
    }
}
console.log(first_last_same([10, 20, 30])); 
console.log(first_last_same([10, 20, 30, 10])); 
console.log(first_last_same([20, 20, 20]));

console.log(line)

// Write a JavaScript program to reverse the elements of a given array of integers length 3
function reverse3(array) {
  return array.map((element, idx, arr) => arr[(arr.length - 1) - idx])
}
console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));

console.log(line)

// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array
function all_max(nums) {
  var max_val = nums[0] > nums[2] ? nums[0] : nums[2]
  nums[0] = max_val
  nums[1] = max_val
  nums[2] = max_val
  return nums
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));

console.log(line)

// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3
function middle_elements(a, b) {
  var new_array = []
  new_array.push(a[1], b[1])

  return new_array
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); 

console.log(line)

// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1
function started(nums) {
  var array1 = []
  array1.push(nums[0], nums[nums.length - 1])

  return array1
}
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78])); 

console.log(line)

// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3
function contains13(nums) {
  if(nums.indexOf(1) != 1 || nums.indexOf(3) != -1) {
    return true
  } else {
    return false
  }
}
console.log(contains13([1, 5]));  
console.log(contains13([2, 3]));  
console.log(contains13([7, 5])); 

console.log(line)

// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
function is13(nums) {
  if(nums.indexOf(1) === -1 && nums.indexOf(3) === -1) {
    return true
  } else {
    return false
  }
}
console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1])); 

console.log(line)

//  Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2
function twice3040(array1) {
  let a = array1[0]
  let b = array1[1]
  return (a === 30 && b === 30) || (a === 40 && b === 40)
}
console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));

console.log(line)

// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1
function swap(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]
  return array
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 

console.log(line)

// Write a JavaScript program to add two digits of a given positive integer of length two
function add_two_digits(n) {
  return n % 10 + Math.floor(n / 10)
}
console.log(add_two_digits(25))
console.log(add_two_digits(50))

console.log(line)

// Write a JavaScript to add two positive integers without carry.
function add_two_int_without_carrying(n1, n2) {
    var result = 0,
        x = 1
      while (n1 > 0 && n2 > 0) {
          result += x * ((n1 + n2) % 10)
          n1 = Math.floor(n1 / 10);
          n2 = Math.floor(n2 / 10);
          x*= 10;
      }
      return result
}
console.log(add_two_int_without_carrying(222, 911))
console.log(add_two_int_without_carrying(200, 900))

console.log(line)

// Write a JavaScript to find the longest string from a given array of strings
function longest_string(str_array) {
  var max = str_array[0].length
  str_array.map(v => max = Math.max(max, v.length))
  result = str_array.filter(v => v.length == max)
  return result
}
console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa']))

console.log(line)

// Write a JavaScript to replace each character of a given string by the next one in the English alphabet



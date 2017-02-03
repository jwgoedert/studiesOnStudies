//***Capitalize: Take an array and project a new array containing strings with the first Letter Capitalized
//function using 'forEach' to return an array of words with just the first letter capitalized in each element.

var arrOfWords = ['car', 'poop', 'banana'];

var capped = arrOfWords.forEach(function(el,i,arrOfWords){
  newArr.push(arrOfWords[i][0].toUpperCase() + arrOfWords[i].slice(1));
});
console.log(capped);

//Function using 'reduce' to achieve the same result

var words = ['car', 'poop', 'banana'];
var caps = words.reduce ((memo, val) => 
  memo.concat(val[0].toUpperCase() + val.slice(1)),[]);
console.log(caps);

//***Count Occurences: take a number and a target and returns the amount of times that target occurs.

var num = 234523452363423;
var countString = (strNum, target) => 
strNum.toString().split('').filter((val) => +val === target).length;
console.log(countString(num, 5));


//***Count Parrens: "steps"-for each "(" add one for each ")" subtract one, and don't go below zero
let parens = "((())))(((";

let countParenWrong = (parenths) =>
  parenths
    .split('')
    .reduce((count, item, i)=>{
      if(item === '(') count++;
      if(item === ')') count--;
      if(count <= 0) count = 0;
      return count;
    }, 0);
    
//***Digits to Stringed Numbers: Take a phrase like "The 1 dog eats 3 chickens" and return "The one dog easts three chickens"
let str = "I have 5 dogs and 6 ponies";
//console.log(str.split(''));
str = str.split('');
let numToText = (phrase) =>{
  phrase.reduce((newStr, item)=>{
             console.log(newStr);
 if (item = '1') newStr.concat('one');
 if (item = '2') newStr.concat('two');
 if (item = '3') newStr.concat('three');
 if (item = '4') newStr.concat('four');
 if (item = '5') newStr.concat('five');
 if (item = '6') newStr.concat('six');
 if (item = '7') newStr.concat('seven');
 if (item = '8') newStr.concat('eight');
 if (item = '9') newStr.concat('nine');
 if (item = '10') newStr.concat('ten');
 if (item = '0') newStr.concat('zero');
 return newStr.concat(item);                   
 return newStr;
}, [] );
  return;
}
console.log(numToText(str));

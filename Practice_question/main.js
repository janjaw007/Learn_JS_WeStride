"use strict";

/*
 
// EXE 1 Longest Word
let exe = "I think about you all the time.";
let exe1 = "I'll stand by you no matter what.";
let exe2 = "I was made for loving you.";

const splitWord = function (sentence) {
  //split word to array
  let arrSplit = sentence.split(" ");
  //remove "." from last word
  let lastWord = arrSplit[arrSplit.length - 1];
  arrSplit[arrSplit.length - 1] = lastWord.substring(0, lastWord.length - 1);

  //got splitword array
  const result = arrSplit;
  const lengthWord = [];
  //fill length of each word to array
  for (let i = 0; i < result.length; i++) {
    lengthWord[i] = result[i].length;
  }
  //find max lengthWord and stored in answer
  const answer = lengthWord.indexOf(Math.max(...lengthWord));
  //use answer to select word form result array
  console.log(result[answer]);
};

splitWord(exe2);

//EXE2 Factorial

//คำนวณการ * จากมากไปน้อย
const mutipleArr = function (arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }
  return result;
};

const factorial = function (number) {
  //เรียงตัวเลขจาก มากไปน้อย ใส่ใน array
  let arrayNumber = [];
  let divider = number;
  for (let i = 0; i < number; i++) {
    arrayNumber[i] = divider;
    divider = divider - 1;
  }
  //เรียงตัวเลขจากน้อยไปมาก
  let stringANS = `${arrayNumber[number - 1]}`;

  for (let i = number - 2; i >= 0; i--) {
    stringANS = stringANS + `*${arrayNumber[i]}`;
  }

  console.log(`${stringANS} = ${mutipleArr(arrayNumber)}`);
};

factorial(8);

//EXE 3 Rotate Array

let arrExe = [4, 5, 6, 7];

const rotateArray = function (arr, loop) {
  for (let i = 0; i < loop; i++) {
    //เอาตัวสุดท้ายเพิ่มเข้าตัวหน้าสุด
    arr.unshift(arr[arr.length - 1]);
    //เอาตัวสุดท้ายออก
    arr.pop(arr[arr.length - 1]);
  }
  console.log(arr);
  // return arr;
};

rotateArray(arrExe, 3);
// console.log(arrExe);


//EXE 4 Missing Number

let arrExe = [1, 2, 4, 5, 6, 10, 12, 15];

const missningNumber = function (arr) {
  //หาค่ามากสุดใน Array
  let maxArr = Math.max(...arr);

  //นำค่ามากสุดลบ 1 และ เช็คเงื่อนไขว่า คำตอบมีใน arrays ไหม
  let checkNumber = maxArr - 1;
  let arrAns = [];
  for (let i = 2; i <= maxArr; i++) {
    //ลูปเช็คและนำค่าที่ได้เพิ่มใน arr ใหม่
    if (!arrExe.includes(checkNumber)) arrAns.unshift(checkNumber);
    checkNumber = maxArr - i;
  }
  console.log(arrAns);
};

missningNumber(arrExe);

//EXE 5 Remove Duplicates

let arrExe = [2, 2, 1, 2, 2, 4, 4];

const removeDuplicates = function (arr) {
  let uniqueArr = [...new Set(arr)];

  console.log(uniqueArr);
};

removeDuplicates(arrExe);


//EXE 6 maxCharacters

const maxCharacters = function (string) {
  const stringObj = {};
  let maxValue = 0;
  let maxChar = "";

  for (let char of string) {
    stringObj[char] = stringObj[char] + 1 || 1;
  }

  for (let char in stringObj) {
    if (stringObj[char] > maxValue) {
      maxChar = char;
      maxValue = stringObj[char];
    }
  }
  // console.log(stringObj);
  const ansObjs = {};
  ansObjs.name = maxChar;
  ansObjs.currentmax = maxValue;
  console.log(ansObjs);
};

maxCharacters("test");
*/

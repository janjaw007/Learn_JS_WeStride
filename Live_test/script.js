"use strict";
// console.log("hello world");

/*
const remove = function (str) {
  //เลือก ตัวอักษรตัวสุดท้าย
  // const str = "Hi!!!";
  // console.log(str[str.length - 1]);
  //สร้างเงื่อนไข ถ้า ตัวอักษรตัวสุดท้าย === !
  if (str[str.length - 1] === "!") {
    //ถ้าจริง ให้ลบ ตัว ! ออก
    //เลือกตัวอักษรตัวแรกถึง ตัวก่อนตัวสุดท้าย
    console.log(str.substring(0, str.length - 1));
  } else {
    //ถ้าไม่จริง ให้แสดง str
    console.log(str);
  }
};

remove("!Hi!");

รับ input
const requireMoney = 35;
const recivedMoney = 508;
เงินทอน
const exchanger = function (requireMoney, recivedMoney) {
  const exchangedMoney = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

หาเงินที่ต้องทอน
  let outputMoeny = recivedMoney - requireMoney;
  let bankCount = [];
  let bankName = [];
  let ans = [];
  //ลูปจากหลังมาหน้า
  for (let i = exchangedMoney.length - 1; i >= 0; i--) {
    if (outputMoeny / exchangedMoney[i] >= 1) {
      //หาจำนวนแบงค์ที่ต้องทอน
      bankCount.push(Math.trunc(outputMoeny / exchangedMoney[i]));
      //หาชื่อแบ้งค์ที่ต้องทอน
      bankName.push(exchangedMoney[i]);
      //ลดเงินออกเมื่อทอนไปแล้ว
      outputMoeny =
        outputMoeny - bankCount[bankCount.length - 1] * exchangedMoney[i];
    }
  }

  //ควร รวมลูป
  for (let i = 0; i < bankCount.length; i++) {
    // >= 20
    ans[i] = `${bankName[i] < 20 ? "แบงค์" : "เหรียญ"} ${bankName[i]} ${
      bankName[i] < 20 ? "" : "บาท"
    } จำนวน ${bankCount[i]} ${bankName[i] < 20 ? "ใบ" : "เหรียญ"},`;
  }
  console.log("เงินทอน:", recivedMoney - requireMoney);
  console.log("ทอนด้วย:", ...ans);
};
exchanger(352, 1000);

//EX 8
const numArray = [3, 2, 4];
const targetNum = 6;

console.log(numArray.indexOf(2));

function numTarget(num, target) {
  for (let i = 0; i < num.length; i++) {
    for (let j = 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        console.log(
          `target=${target}`,
          num.indexOf(num[i]),
          num.indexOf(num[j])
        );
      }
    }
  }
}
numTarget(numArray, targetNum);


//EX Q1

function issBoiling(temp) {
  const unitTemp = temp.charAt(temp.length - 1);
  const numTemp = parseInt(temp);
  console.log(unitTemp);
  console.log(numTemp);

  console.log(
    ((unitTemp === "F" && numTemp === 212) ||
      (unitTemp === "C" && numTemp === 100)) &&
      true
  );
}
issBoiling("0C");


//EX Q2
const sentence = "How to ace BC Calculus in 5 Easy Steps";
function preventDistractions(str) {
  const notSafeWord = ["meme", "tiktok", "anime", "football"];
  let included;
  for (let i = 0; i < notSafeWord.length; i++) {
    if (str.includes(notSafeWord[i])) {
      included = "No!";

      break;
    }
  }
  if (!included) {
    console.log("Safe Watching");
  } else {
    console.log(included);
  }
}
// console.log(!wordCheck ? "NO!" : "Safe watching!");
preventDistractions(sentence);


//EX Q3

let word = "51NG4P0RE";

function keyboardMistakes(str) {
  let arr = ["4", "5", "0", "1"];
  let wordNew = ["A", "S", "O", "I"];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < wordNew.length; j++)
      if (str[i].includes([arr[j]])) {
        str = str.split("");
        str[i] = wordNew[j];
        str = str.join("");
      }
  }
  console.log(str);
}

keyboardMistakes(word);
*/

window.onload = function () {
  let elements = document.getElementsByClassName("tool__button");
  let input = document.getElementById("input");

  /*
  let ans = "";
  let test = "123356";
  //ทำให้ปุ่มเลขขึ้นใน result class หรือ input id
  //เลือก element ปุ่มเลข
  let number = document.querySelectorAll(".number");

  for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
      //นำค่าที่โชว์ บวกกันแบบ string และ ใส่จุดได้แค่ 1 จุด
      if (!ans.includes(".") || number[i].textContent !== ".") {
        ans = ans + number[i].textContent;
        input.textContent = ans;
      }
    });
  }
  
  //ทำปุ่น clear (C)
  let clearBtn = document.querySelector("#clearBtn");
  clearBtn.addEventListener("click", function () {
    if (input.textContent !== "") {
      ans = "";
      holdNum = 1;
      input.textContent = ans;
    }
  });

  //ทำปุ่ม Del
  let delBtn = document.querySelector("#delBtn");
  delBtn.addEventListener("click", function () {
    if (input.textContent !== "") {
      ans = ans.substring(0, ans.length - 1);
      input.textContent = ans;
    }
  });
  //ทำปุ่ม x mutiple button
  let holdNum = 1;
  let mutipleBtn = document.querySelector("#mutiple");
  mutipleBtn.addEventListener("click", function () {
    holdNum = holdNum * Number(input.textContent);
    ans = "";
    console.log(holdNum);
  });

  //ทำปุ่มเท่ากับ = eqaulBtn
  // let eqaulBtn = document.querySelector("#eqaulBtn");
  // eqaulBtn.addEventListener("click", function () {
  //   input.textContent = holdNum;
  // });

  // console.log(test.substring(0, test.length - 1));
*/

  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].innerHTML === "=") {
      //when button equal "=" add function calculate()
      elements[i].addEventListener("click", calculate());
    } else {
      //when click button than add function addToCurrentValue()
      elements[i].addEventListener("click", addToCurrentValue(i));
    }
  }

  function addToCurrentValue(i) {
    return function () {
      if (elements[i].innerHTML === "÷") {
        input.innerHTML += "/";
      } else if (elements[i].innerHTML === "x") {
        input.innerHTML += "*";
      } else if (elements[i].innerHTML === "C") {
        // clear input
        input.innerHTML = "";
        console.log("helloworld");
      } else if (elements[i].innerHTML === "Del") {
        // delete last character in input
        input.innerHTML = input.innerHTML.substring(
          0,
          input.innerHTML.length - 1
        );
      } else {
        input.innerHTML += elements[i].innerHTML;
      }
    };
  }

  function calculate() {
    return function () {
      console.log("eqaul pressed");
      input.innerHTML = eval(input.innerHTML).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4,
      });
    };
  }
};

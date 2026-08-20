"use strict";

const letters = "abcdefghijklmnopqrstuvwxyz";
const upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "~`!@#$%^&*()[]{}:;<>,.?/|+-_=";

function RandomString(stringSet, numbersStringSet) {
  let result = "";
  for (let i = 0; i < numbersStringSet; i++) {
    const rand = Math.random();
    const randomIndex = Math.trunc(rand * (stringSet.length - 1));
    result += stringSet[randomIndex];
  }
  return result;
}

let nickName = "";
let userId = "";
let pasword = "";

const rand = document.querySelector("#rand-code");
const soLuongKT = document.querySelector("#rrr");
const nutLoad = document.querySelector("#nut-load");

nutLoad.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedCheckBox = document.querySelectorAll(
    'input[name="loai-chu"]:checked',
  );
  const arrSelectValue = Array.from(selectedCheckBox).map((x) => x.value);
  const soLuong = soLuongKT.value;

  if (soLuong > 120 || soLuong < 0) {
    alert("random code không quá 120 ký tự !! 😥");
  } else {
    let chuoichung = "";
    arrSelectValue.forEach((x) => {
      if (x == "luachon1") chuoichung += letters;
      if (x == "luachon2") chuoichung += upercaseLetters;
      if (x == "luachon3") chuoichung += numbers;
      if (x == "luachon4") chuoichung += specialChars;
    });
    const random =
      soLuong != "" && chuoichung != ""
        ? RandomString(chuoichung, soLuong)
        : "";
    soLuongKT.value = soLuong;
    // rand.textContent = random;
    rand.value = random;

  }
});

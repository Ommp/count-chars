//document.getElementById("calculate_button").addEventListener("click", countCharacters);
document.getElementById("textcontainer").addEventListener("input", countCharacters);


let text = "";

let hiragana = 0;
let kanji = 0;
let katakana = 0;


const REGEX_HIRAGANA = /[\u3041-\u3096]/;

//using the one below and the current REGEX_KATAKANA causes it to detect some duplicates like ー
//const REGEX_HIRAGANA = /(?!\p{Punctuation})[\p{Script_Extensions=Hiragana}]/u;


const REGEX_KANJI = /(?!\p{Punctuation})[\p{Script_Extensions=Han}]/u;
const REGEX_KATAKANA = /(?!\p{Punctuation})[\p{Script_Extensions=Katakana}]/u;
//const REGEX_KANJI = /[\u3400-\u4DB5-\u4E00-\u9FCB-\uF900-\uFA6A]/;
//const REGEX_KATAKANA = /[\u30A0-\u30FF-\uFF5F-\uFF9F]/;
//const REGEX_KATAKANA = /[\u30A0-\u30FF]/;

function countCharacters() {
  text = document.getElementById("text").value;
  hiragana = countHiragana();
  kanji = countKanji();
  katakana = countKatakana();

  updateRows();
}

function countHiragana() {
  let count = 0;
  for (let char in text) {
    if (text[char].match(REGEX_HIRAGANA)) {
      count++;
    }
  }  
  return count;
}


function countKanji() {
  let count = 0;
  for (let char in text) {
    if (text[char].match(REGEX_KANJI)) {
      count++;
    }
  }
  return count;
}

function countKatakana() {
  let count = 0;
  for (let char in text) {
    if (text[char].match(REGEX_KATAKANA)) {
      count++;
    }
  }  
  return count;
}

function updateRows() {
  document.getElementById("hiragana").innerHTML = hiragana;
  document.getElementById("kanji").innerHTML = kanji;
  document.getElementById("katakana").innerHTML = katakana;
}
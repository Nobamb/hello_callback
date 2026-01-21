// 함수 4개 import
import plus from "./func/plus.js";
import minus from "./func/minus.js";
import multiple from "./func/multiple.js";
import divide from "./func/divide.js";



// 진짜 비동기 형태의 callback 함수


// 나누기 곱하기 더하기 빼기 순
// 13 - (((6 / 2) * 3) +5)
const result = minus(13,plus(5,multiple(3,divide(6,2))))

// 출력
console.log(result)
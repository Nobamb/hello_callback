// 더하기 빼기 곱하기 나누기 함수 import
import plus from "./func/plus.js";
import minus from "./func/minus.js";
import multiple from "./func/multiple.js";
import divide from "./func/divide.js";

// 콜백함수 비동기 처리
// 4가지 함수들 파라미터로 넣고
// 하나의 초기값, 4개의 변화시킬 값=> 5개의 값
// 총 9개의 파라미터
// 너무 많으니까 초기값 빼고 각각 배열로 만들기
const parallel = (allFunc, initData, allData) => {
  // 참 거짓 판별
  // 기본값 false
  let funcBoolean = false;

  // 만약에 배열이면
  if (typeof allFunc === "object") {
    // allfunc를 나눔
    allFunc.forEach((element) => {
      // 만약에 모두 함수일 때
      if (typeof element === "function") {
        // 테스트
        funcBoolean = true;
      }
    });
  }
  // 만약에 배열이 아니면
  // allFunc가 함수인지 확인
  else {
    // 만약에 allFunc가 함수라면
    if (typeof allFunc === "function") {
      // 테스트
      funcBoolean = true;
    }
  }

  // 만약 모두 함수면
  if (funcBoolean) {
    console.log("모두 함수입니다.");
    return;
  }
  //  모두 함수가 아니라면
  else {
    console.log("모두 함수가 아닙니다.");
    return;
  }
};

// parallel 함수 실행 테스트(함수를 잘 읽는지)
// 단일 함수
const test1 = parallel(plus, 1, 1);
// 여러 함수
const test2 = parallel([plus, minus], 1, 1);
// 단일 값
const test3 = parallel(1, 1, 1);
// 여러 함수,값
const test4 = parallel([plus, 1], 1, 1);

// test1~4 출력
console.log(test1);
console.log(test2);

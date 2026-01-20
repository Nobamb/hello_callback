// 두 변수에 대해 더하는 함수를 생성한다.
const plus = (a,b) => {

    return a + b

}

// 두 변수에 대해 빼는 함수를 생성한다.
const minus = (a,b) => {

    return a - b

}

// 두 변수에 대해 곱하는 함수를 생성한다.
const multiple = (a,b)=> {

    return a * b

}

// 두 변수에 대해 나누는 함수를 생성한다.
const divide = (a,b)=>{

    return a / b

}


// 콜백함수를 만들어서 테스트를 해본다.
// 함수명은 callbackTest
// 파라미터는 각각 first, second, third, fourth, value1, value2
// 파라미터는 총 6개
// callbackTest 함수에 4가지의 함수 add, minus, multiple, divide를 넣는다.
// first, second, third, fourth에
// 그리고 2개의 변수를 넣는다. 
// value1, value2
// 만약에 first, second, third, fourth 모두 함수일 때 그대로 실행
// 하나라도 함수가 아니면 오류 발생


const callbackTest = (first, second, third, fourth, value1, value2) => {

    // 만약에 first, second, third, fourth 모두 function이면
    if(typeof(first) === "function" && typeof(second) === "function"&& typeof(third) === "function"&& typeof(fourth) === "function"){
        // 테스트
        // console.log("모두 함수입니다")

        // first 먼저 실행
        const first = first(value1, value2)

        // second 다음에 실행

        const second = second(value1, value2)

        // third 다음에 실행

        const third = third(value1, value2)


        // fourth 마지막 실행
        const fourth = fourth(value1, value2)


        // 출력
        console.log(`첫번째 함수 값 ${first}`)
        console.log(`두번째 함수 값 ${second}`)
        console.log(`세번째 함수 값 ${third}`)
        console.log(`네번째 함수 값 ${fourth}`)


    }



}


// 임의로 함수 실행
callbackTest(plus, minus, multiple, divide,1,2)
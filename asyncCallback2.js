// 진정한 콜백 지옥
// plus minus multiple divide import

import plus from "./func/plus.js";
import minus from "./func/minus.js";
import multiple from "./func/multiple.js";
import divide from "./func/divide.js";

// 콜백 지옥 테스트
// 값 더하기
plus(2,3,(result1)=>{

    // 값 빼기
    minus(result1,2,(result2)=>{

        // 값 곱하기
        multiple(result2, 6, (result3)=>{

            // 값 나누기
            divide(result3, 3, (result4)=>{
                // 출력
                console.log(result4)

            })

        })

    })

})
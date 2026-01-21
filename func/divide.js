// divide 함수 생성
const divide = (value1, value2, func) => {

    // 값 지정
    const result = value1 / value2

    // 콜백함수 실행
    func(result)

}

// export
export default divide
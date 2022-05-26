// 반복문과 조건문 활용

for (let number = 1; number <= 10; number++) {
    if (number % 3 === 0) {
        console.log(`${number}는 3으로 나눠서 떨어지는 숫자입니다.`)
    }
}

/** 퀴즈
 * 1부터 20까지 숫자중 홀수인 경우는 "숫자 은 홀수입니다."를
 * 짝수인 경우는 "숫자... 은 짝수입니다."를 출력하는 프로그램을
 * 작성해봅시다.
 */

for(let number1 = 1; number1 <= 20; number1++) {
    if(number1 % 2 === 0) {
        console.log(`숫자 ${number1}은 짝수입니다.`)
    } else {
        console.log(`숫자 ${number1}은 홀수 입니다.`)
    }
}
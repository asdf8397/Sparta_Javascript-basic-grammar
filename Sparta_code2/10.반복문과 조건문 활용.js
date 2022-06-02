/* 10.반복문과 조건문의 활용 */

/* 0~10까지의 숫자 중에서 3의 배수로 떨어지는 숫자를
반복문으로 추출하기 */


/* 잘못된 코드 이렇게 짜면 결과 안나옴 다시 짜봅시다. */
for (let number = 1; number <= 10; number++) {
    if(number / 3 === 1) {
        if(number / 6 === 1) {
            if(number / 9 === 1) {
                console.log(`${number}은 나머지가 0으로 떨어지는 숫자들입니다.`)
            }
        }
    }
};

for (let num = 1; num <= 10; num++) { // for문 반복 선언할때 무조건 let을 붙여야 한다.
    if (num % 3 === 0) {
        console.log(`${num}는 나머지가 0으로 떨어지는 숫자들 입니다.`)
    }
}

for (let num1 = 1; num1 <= 10; num1++) {
    if (num1 % 5 === 0) {
        console.log(`${num1}은 나머지가 0으로 떨어지는 5의 배수입니다.`)
    } else {
        console.log(`${num1}은 5의 배수가 아닌 나머지 숫자들입니다.`)
    }
}

/** 퀴즈
 * 1부터 20까지 숫자 중 홀수인 경우는 "숫자"은 홀수입니다.
 * 짝수인 경우의 "숫자.... 는 짝수입니다."를 출력하는 프로그램을
 * 작성해봅시다.
 */

for(let Ascending = 1; Ascending < 21; Ascending++) {
    if(Ascending % 2 === 0) {
        console.log(`1부터 20까지의 숫자 중에서 ${Ascending}는 짝수입니다.`)
    } else {
        console.log(`1부터 20까지의 숫자 중에서 ${Ascending}는 홀수입니다.`)
    }
}

console.log("")
console.log("")
console.log("")
console.log("")



/** 퀴즈
 * 1부터 20까지 숫자 중 홀수인 경우는 "숫자"은 홀수입니다.
 * 짝수인 경우의 "숫자.... 는 짝수입니다."를 출력하는 프로그램을
 * 작성해봅시다.
 */

/* 출력방법(2가지) */

// 출력 1번째 방법 for문

for (let counter = 1; counter < 21; counter++) {
    if (counter % 2 === 0) {
        console.log(`숫자 ${counter}는 짝수입니다.`)
    } else {
        (`숫자 ${counter}는 홀수 입니다.`)
    }
}

console.log("")
console.log("")

let counter2 = 1;
while(counter2 < 21) {
    if (counter2 % 2 ===0) {
        console.log(`숫자 ${counter2}는 짝수입니다.`)
    } else {
        console.log(`숫자 ${counter2}는 홀수입니다.`)
    }
    counter2++
}
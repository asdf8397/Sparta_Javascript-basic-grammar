// 함수(1)
const priceA = 1000;
const priceB = 2000;

// 두 상품의 가격의 합과 평균을 구해서 출력해야 하는 코드 작성
const sum = priceA + priceB;
const average = sum/2;
console.log(`두 상품의 가격의 합계는 ${sum}원 입니다.`);
console.log(`두 상품의 가격의 평균은 ${average}원 입니다.`);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const priceC = 3000
const priceD = 4000
// 이번에는 두 상품가격의 평균을 구해서 출력해야 한다면? 위와 동일한 코드를 또 작성....

const sum2 = priceC + priceD;
console.log(`두 상품의 가격의 합계는 ${sum2}원 입니다.`);
const average2 = sum2 / 2;
console.log(`두 상품의 가격의 평균은 ${average2}원 입니다.`);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 함수의 선언과 호출
/*
함수의 선언 변수를 선언하고 해당 변수에 값을 할당했던 것처럼
, 함수도 선언을 하고 해당 함수가 실행할 코드의 집합을 만들어서
저장해줍니다
*/

/** 함수 예시
 * function 함수명 (매개변수들) {
 * 이 함수에서 실행할 코드들 return 변환값
 * }
 */

function calCulator_Average(price1, price2) {
    const sum3 = price1 + price2
    console.log(`두 상품의 가격 총합은 ${sum3}입니다.`)
    const average3 = sum3 / 2
    
}
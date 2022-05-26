// 연산자

// 비교연산자
console.log(1 < 2); // true
console.log(1 <= 2); // true 
console.log(1 > 2); // false
console.log(1 >= 2); // false

// 논리연산자
// ||(or), &&(and), !(not)
// ||(or) a 또는 b가 true이면 true이고
// &&(and) a 그리고 b 둘다 true이어야지 true이고
// !(not) a가 true이면 !a이면 false, !b이면 false
let isOnSale = true;
let isDiscountItem = true;

console.log(isOnSale); // output: true
console.log(isDiscountItem); // output: true

console.log(isOnSale || isDiscountItem); // output: true
console.log(isOnSale && isDiscountItem); // output: true

isOnSale = false;
console.log(isOnSale && isDiscountItem); // output: false
console.log(isOnSale || isDiscountItem); // output: true

isDiscountItem = false;
console.log(isOnSale && isDiscountItem); // output: false
console.log(isOnSale || isDiscountItem); // output: false

console.log(!isDiscountItem); // output: true
console.log(!isOnSale); // output: true


/* 일치연산자 */
// 두 값이 일치하는지 비교해요
// 결과는 true, false로 출력
console.log(1=== 1); // output: true
console.log(1 === 2); // output: false 
console.log("Javascript" === "Javascript") // true 대소문자 따짐
console.log("Javascript" === "javascript") // false 대소문자 따짐

// == 과 ===의 차이 확인해보기 (정확히 쓸때는 ===을 써야함)
// 엄격한 일치 연산자를 사용해야함
console.log(1 === "1"); // output: false
console.log(1 == "1"); // output: true4

/** 퀴즈
 * 상품 가격을 나타내는 2개의 변수를 선언하고 각각의 변수에 원하는 가격값을 할당해보아요
 * 두 상품을 더한 가격 역시 총가격을 나타내는 변수에 할당해봅니다. 
 * 마지막으로 총 가격의 20% 할인된 가격을 구해서 
 * "총 몇원에 물건을 구입합니다"라는 문자열을 출력합니다.
 * 
 * 정답
 * const shoesPrice = 200000
 * const capPrice = 100000
 * const totalPrice = shoesPrice + capPrice
 * 
 * console.log(`총 구입가격은 {$totalPrice * 0.8}원에 물건을 구입합니다. `)
 * 
 */
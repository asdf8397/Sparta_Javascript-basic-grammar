/* 연산자(2) */

/* 비교연산자(두 값을 비교해서 true false로 도출) */
// 직접 연산(true, false 도출)
console.log(100 < 200); // true
console.log(200 > 100); // true
console.log(100 > 200); // false
console.log(200 < 100); // false
console.log(100 <= 100); // true
console.log(100 >= 100); // true
console.log(200 >= 100); // true
console.log(200 <= 100); // false


// 간접 연산(true, false 도출)
const compare1 = 100;
let compare2 = 200;
console.log(compare1 < compare2); // true
console.log(compare1 > compare2); // false
console.log(compare1 <= compare2); // true
console.log(compare1 >= compare2); // false
// console.log(compare1 = compare1); // true
// console.log(compare2 = compare2); // true
console.log(compare1 <= compare1); // true
console.log(compare2 >= compare2); // true


/* 논리연산자[||(or), &&(and), !(not)으로 true, false를 도출] */

let logical_operator = true;
let logical_operator2 = true;
let logical_operator_false = !logical_operator2;

console.log(logical_operator) // true
console.log(logical_operator2) // true
console.log(logical_operator_false) // false


/* 논리연산자 기초 */

// 논리연산자_or(||)
console.log(true || true) // true
console.log(true || false); // true
console.log(false || false); // false

// 논리연산자 and(&&)
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

// 논리연산자 not(!)
console.log(!true) // false
console.log(!false) // true

let ac_price = 1000;
let ad_price = 2000;

let final_price1 = ac_price < ad_price; // true
let final_price2 = ac_price > ad_price; // false

console.log(final_price1 || final_price2); // true
console.log(final_price1 && final_price2); // false
console.log(!final_price1); // false
console.log(!final_price2); // true
console.log(!final_price1 || final_price2); // false
console.log(final_price1 && !final_price2); // true

/* 일치연산자 */
// 일치연산자 직접 == 또는 ===으로 따짐

// 직접연산 출력 _ 일치연산자
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log("javascript" === "javascript"); // true
console.log("javascript" === "javascrip"); // false

/** 메모
  * 일치연산자는 number 그리고 string도 일치 불일치에 따라서 true false의 값 출력가능
  */


// 간접 연산출력 _ 일치연산자
let same1 = 100;
let same2 = 200;

let write1 = "JAVASCRIPT";
let write2 = "JAVASCRIPT_world";

console.log(same1 === same1); // true
console.log(same1 === same2); // false
console.log(write1 === write1); // true
console.log(write1 === write2); // false

/** 퀴즈
 * 상품 가격을 나타내는 2개의 변수를 선언하고 각각의 변수에 원하는
 * 가격의 값을 할당해보세요.
 * 두 상품을 더한 가격 역시 총 가격을 나타내는 변수에 할당해봅니다.
 * 마지막으로 총 가격의 20% 할인된 가격을 구해서 "총 몇원에 물건을
 * 구입합니다."라는 문자열을 출력합니다.
 */

let product_price1 = 10000;
let product_price2 = 20000;
let product_sum_price = product_price1 + product_price2;
let product_Sale_price = product_sum_price * 0.8;
console.log(product_Sale_price);

// 출력방법은 다양하지만 간단히 출력하자면
console.log(`총 구입가격은 ${product_price1 + product_price2}원이고 20% 할인된 가격 ${product_price1 + product_price2 * 0.8}원에 구입합니다.`); 
// 계산이 제대로 안될 수도 있음 참고해서 출력할것
console.log(`총 구입가격은 ${product_sum_price}원이고 20% 할인된 가격 ${product_Sale_price}원에 구입합니다.`);
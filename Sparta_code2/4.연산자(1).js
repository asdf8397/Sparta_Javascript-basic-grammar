/* 4.연산자 */
// string은 string끼리 연산된다.
// number은 number끼리 연산된다.
// number과 string을 연산해야할 경우 string처럼 연산된다.


/* string연산 */

// 직접연산
console.log("안녕" + "하세욘");

// 간접연산
let Hi = "안녕";
let Hello = "하세요";
console.log(Hi + Hello); // 안녕하세요


/* number연산 */

// 직접연산
console.log(1+10); // 11
console.log(11+11); // 22

// 간접연산
let num_calculation = 100;
let number_calculation = 200;
console.log(num_calculation + number_calculation); // 300


/* string + number 연산 */

// 직접 연산
console.log(11 + "11"); // 1111
console.log(100 + "안녕하세요"); // 100안녕하세요

// 간접 연산
let num = 100;
let string = "백";
console.log(num + string); // 100백


/* string + number의 연산으로 간단한 문장만들기 */

// 직접입력 + 연산
console.log("이 신발의 가격은 " + 20000 + "원입니다.")
// 이 신발의 가격은 20000원입니다.

// 간접입력 + 연산 + 변수선언 적용
const shosePrice = 100000;
console.log("이 신발의 가격은 " + shosePrice + "원 입니다.")
// 이 신발의 가격은 100000원 입니다.
console.log(`이 신발의 가격은 ${shosePrice} 원입니다.`)
// 이 신발의 가격은 100000 원입니다.

const change_shose_price = 200000;
const this_shose = "이 신발의 가격은 ";
const is_a_dollar = "원 입니다.";

console.log(this_shose + change_shose_price + is_a_dollar);
// 이 신발의 가격은 200000원 입니다.
console.log(`${this_shose + change_shose_price + is_a_dollar}`);
// 이 신발의 가격은 200000원 입니다.
console.log(`${this_shose}${change_shose_price}${is_a_dollar}`);
// 이 신발의 가격은 200000원 입니다.


/* 산술연산자 */

// 직접연산
console.log(1+1); // 2
console.log(2-1); // 1
console.log(2*2); // 4
console.log(3/3); // 1
console.log(3%2); // 1
console.log(3%3); // 0

// 간접연산
const number1 = 1;
const number2 = 2;
const number3 = 3;
const number4 = 4;
const number5 = 5;

console.log(number1 + number2); // 3
console.log(number1 - number2); // 1
console.log(number3 * number4); // 12
console.log(number4 / number4); // 1
console.log(number4 % number5); // 1
console.log(number5 % number5); // 0


/* 증감연산자 */
// 증감연산자 사용방법 2가지
let increase = 1; // 증감 연산자를 해줄때 처음 지정한 값은 무조건 let const 만약 처음 let을 지정했다면 그 다음은 const
const count_num_up = ++increase;
console.log(increase); // count_num = 2 // ++increase해주면 increase앞에 ++이 붙어 있기때문에 원본도 1+된다고 지정한 것
console.log(count_num_up); // count_num_up = 2

let increase2 = 2; // 증감연산자를 해줄때 처음 지정한 값은 무조건 let 또는 const 만약 처음 let을 지정했다면 그 다음은 const
const count_num2_up = increase2++ // increase2++해주면 increase 뒤에 붙는 변수부터 +1했는 상태로 지정 됨
console.log(increase2); // count_num2 = 2
console.log(count_num2_up); // count_num2_up = 3


/* 대입연산자 */
// 간단 예시 대입연산자
let ex_a = 1;
console.log(ex_a += 1); // 2

let ex_b = 2;
const ex_c = 3;
console.log(ex_b += ex_c); // 5

const shirtsPrice = 100000;
const pantsPrice = 80000;
let totalPrice = 0;

totalPrice += shirtsPrice;
console.log(totalPrice); // 100000
// 100000, 할당되어있는 상태

totalPrice += pantsPrice;
console.log(totalPrice); // 180000
// 180000, 할당되어있는 상태

totalPrice -= shirtsPrice;
console.log(totalPrice); // 80000
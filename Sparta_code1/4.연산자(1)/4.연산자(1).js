console.log("my" + "car");
console.log("1" + 2); // 문자열 이어붙이기에서는 문자와 숫자는 구분된다. 연산 안됨
console.log(1+2);

const shoesprince = 20000
console.log("이 신발의 가격은 " + shoesprince + " 입니다.")

// template literal - 간결하게 사용가능함
console.log(`이 신발의 가격은 ${shoesprince} 입니다.`) // template literal

// 산술연산자
console.log(2 + 1); // 3
console.log(2 - 1); // 1
console.log(4 / 2); // 2
console.log(2 * 3); // 6
console.log(10 % 3); // 결과값 1
console.log(10 ** 2); // 10의 2승 결과값 100


// 증감연산자
let count = 1;
const preCount = ++count;
console.log(`count: ${count}, preCount: ${preCount}`);
// ++count하게 되면 이전에 설정한 let count = 1에 설정한 값에도 +1이 되기때문에 결과값 출력때 count = 2 preCount = 2가 된다.

let count2 = 1;
const preCount2 = count++;
console.log(`count: ${count2}, preCount2: ${preCount2}`);
/* count2++은 count2가 실행되고 +1을 해주기때문에 let count2에는 적용되지 않음
    하지만 실행된 후 +1이 되기 때문에 preCount2에는 적용이 되고 preCount2를 출력할때는 출력이 됨
*/

/* 대입연산자 */
const shirtsPrice = 100000;
const pantsPrice = 80000;
let totalPrice = 0;

totalPrice += shirtsPrice;
console.log(totalPrice);
// output: 100000
// 처음에 totalprice에 shirtsPrice가 100000이 할당되고 이것이
totalPrice += pantsPrice;
console.log(totalPrice);
// output: 180000
// 이것이 100000이 할당 되어있는 totalPrice에 pantsPrice가 더해져서
// 180000이 되고

totalPrice -= shirtsPrice;
console.log(totalPrice);
// 180000인 상태인 totalPrice에 shirtsPrice를 빼서 80000이 됨.
// output: 80000

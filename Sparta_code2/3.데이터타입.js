/** 데이터타입
 * 기본(원시형)
 * 
 * number, string, boolean, null, undefined
 */


/* number_type(숫자타입) */

// 직접입력
console.log(10);

// 간접입력
let Number_here = 10;
console.log(Number_here);


/* String_type(문자형) */

// 직접입력
console.log("Hello Javascript String");

// 간접입력
let Stirng_here = "Hello Javascript String World";
console.log(Stirng_here);

/* Boolean 데이터 타입형 */ /* true / false */

// 직접입력
console.log(true);
console.log(false);

// 간접입력

let Boolean1 = true;
let Boolean2 = false;

console.log(Boolean1);
console.log(Boolean2);

// 조건형에서 true / false 사용법

// 사용방법 직접사용법
console.log(10 < 20); // output: true
console.log(10 > 20); // output: false

// 사용방법 간접사용법

let Boolean_type_true = 10;
let Boolean_type_false = 20;

console.log(Boolean_type_true < Boolean_type_false); // output: true
console.log(Boolean_type_true > Boolean_type_false); // output: false

// null 데이터타입
// 설명 null은 데이터가 들어갈 공간이 있음에도 비어있을때 null로 사용된다.

// 직접입력
console.log(null);

// 간접입력
let code_space_null = null;
console.log(code_space_null); // output: null


// undefined 데이터타입
// 설명 undefined는 데이터타입이 들어갈 공간이 아예 없음 그래서 비어있을 공간이 아예없음 아무것도 없는 상태

// 직접입력
console.log(undefined); // output: undefined

// 간접입력

let code_space_undefined = undefined;
console.log(code_space_undefined); // output: undefined

/** 퀴즈
 * 내가 원하는 변수들을 자유롭게 선언해보고 데이터를 할당한 뒤
 * 출력해보세요.
 * 
 * number, string, boolean, null, undefined 선언해보자
 */

let number = 10;
console.log(number); // 10

let string = "Startbucks";
console.log(string); // Starbucks

let boolean1 = 100 < 200;
let boolean2 = 100 > 200;
console.log(boolean1); // true
console.log(boolean2); // false

let 선언_null = null;
console.log(선언_null); // null

let 선언_undefined = undefined;
console.log(선언_undefined); // undefined
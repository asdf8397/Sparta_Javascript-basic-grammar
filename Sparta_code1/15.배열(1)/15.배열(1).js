/* 배열(1) */

// 배열선언
// 숫자 1,2,3,4,5로 이루어진 선언하는 방법 2가지

const arr1 = new Array(1,2,3,4,5);
const arr2 = [1,2,3,4,5];

console.log(arr1);
console.log(arr2);

const 배열 = [1,2,3,4,5,5,6,7];
console.log(배열[0]);
console.log(배열[1]);
console.log(배열[2]);
console.log(배열[3]);
console.log(배열[4]);
console.log(배열[5]);
console.log(배열[6]);
console.log(배열[7]);


console.log();
console.log(배열.length);

console.log();
console.log(배열.length -1); // 배열의 길이에서 마지막은 몇번째일까를 찾아낼때 배열에 -1을하면 찾아낼수 있다.

console.log()
const color_length = ["yello", "red", "white", "blue", "green", "gray", "magenta"];

console.log([color_length.length -1]) // color_lengh에서 마지막은 몇번째인가 순서를 나타냄
console.log(color_length[color_length.length -1]); // color_length(색상)[color_length.length -1]을 해주면 마지막 색상을 찾아낼때 사용함
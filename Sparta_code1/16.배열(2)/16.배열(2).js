const list_of_number = [1,2,3,4,5,6,7,8,9,10];

// 리스트에서 내용을 추가할때 숫자, 문자던 맘대로 추가할때 사용하는 것
list_of_number.push("숫자 추가해볼게요");
console.log(list_of_number);
list_of_number.pop(); // 마지막에 추가된 "숫자 추가해볼게요를 삭제함"
console.log(list_of_number.pop); // 배열 전체 삭제

const rainbowColors = ["red","yello","green","blue","indigo","magenta"];

for (let i = 0; i < rainbowColors.length; i++) {
    console.log(rainbowColors[i]) // 색상이 반복문으로 들어간다 숫자가 아니라 string문자열로
};

console.log()
console.log()

let rainbowColors2 = ["red","blue","magenta","yello","green","indigo"];
for (let color of rainbowColors2) { // of는 간단하게 사용할 수 있음
    // color of rainbowColor2를 하면 let rainbowColor2에 지정한 배열안에 값을 color에 순서대로 넣어준다.
    // 프로그램이 순서대로 들어가게 설정되어있음
    console.log(color)
};

/** 퀴즈
 * 10개의 상품 가격 데이터를 갖고 있는 배열을 만듭니다.
 * 반복문을 활용해 상품들의 가격 합계와 평균을 구해보아요.
 */

// 답 // 다시 한번 생각해봐야할것
// of문으로 해결해야함 of문 알고있어야함
const priceList1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum1 = 0;

for (const price1 of priceList1) {
    sum1 += price1
}
const avg1 = sum1 / priceList1.length;
console.log(`합계: ${sum1}, 평균: ${avg1}`)

/* 6. 조건문 */
const shoesPrice = 40000;
if(shoesPrice <= 40000) {
    console.log("지금 제가 본 신발 살게요")
}; // output: 지금 제가 본 신발 살게요

// 메모
/* shoesPrice(40000) = 40000 코드문법을 이렇게 적용해주면 syntex error발생한다.
그래서 같을때 적용해줄 수있는건 <=, =<를 적용해줘야함 */

const Shirts = 100000;
if(Shirts <120000) {
    console.log("셔츠 살게요")
} // output: 셔츠 살게요

const my_Money = 90000;
if(my_Money > Shirts) {
    console.log("면접보려고 하는데 셔츠 있나요?")
} // 출력안됨

if (my_Money < Shirts) {
    console.log("돈이 부족해서 셔츠 살 수 없을거같아요 안녕히 계세요")
}; 

const my_money_make_it = 120000;
if (my_money_make_it > Shirts) {
    console.log("셔츠 하나 주세요 돈있어요! 최고급 셔츠로 주세요.")
}
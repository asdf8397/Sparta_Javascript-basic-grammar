/* 7.조건문(2) */
// 조건문 if-else
// Department Store
const High_class_Gucci_Bag = 5000000;
const Middle_class_Gucci_Bag = 3000000;
const Low_Class_Gucci_Bag = 1000000;
let Money = 2000000;

// 작성방법 2가지
// 첫번째 방법
if(Middle_class_Gucci_Bag <= 2000000) {
    console.log("가방 하나 주세요.")
} else {
    console.log("하하하 한번 둘러보고 다시 올게요. 가방 설명해주셔서 감사합니다.")
}

if(Money >= Middle_class_Gucci_Bag) {
    console.log("구찌 가방 하나 살게요")
} else {
    console.log("구찌 가방 설명 감사해요. 근데 잠시 둘러보고 다시 올게요.")
}

if(High_class_Gucci_Bag <= 1000000) {
    console.log("구찌 가방 하나 주세요.")
} else {
    console.log("가방 설명 감사합니다. 둘러보고 올게요 수고하세요.")
}

if (Money >= High_class_Gucci_Bag) {
    console.log("구찌 가방 하나 주세요.")
} else {
    console.log("다음에 살게요 안녕히 계세요.")
}

if (Low_Class_Gucci_Bag <= 2000000) {
    console.log("오늘은 구찌 가방 살 수 있는 날")
} else {
    console.log("앗... 돈이 부족하네 허... 허허허..")
}

if (Low_Class_Gucci_Bag < Money) {
    console.log("구찌 가방 제일 등급 낮은걸로 주세효.. 요 ..")
} else {
    console.log("분명 돈이 부족하지 않았는데 왜이러지?....... 흠")
}

// 조건문 if-else if

Money = 9000;
const Coffee_avg = 4500;
const Beverage_avg = 6500;
const Dessert_avg = 5500;

let Coffee_Beverage_sum = Coffee_avg + Beverage_avg;
let Beverage_Dessert_sum = Beverage_avg + Dessert_avg;
let Coffee_Dessert_sum = Coffee_avg + Dessert_avg;

console.log(Coffee_Beverage_sum); // 11000
console.log(Beverage_Dessert_sum); // 12000
console.log(Coffee_Dessert_sum); // 10000

if (Money > Coffee_Beverage_sum) {
    console.log("앗 아무것도 구매 못한다.")
} else if (Money > 10000) {
    console.log("Beverage랑 Dessert를 선택하겠어요")
} else if (Money < 10000) {
    console.log("coffee_avg를 선택하겠어요")
}

if (Money > 100000) {
    console.log("커피, 디저트, 베버리지 음료를 다 선택하겠다")
} else if (Money > 10000) {
    console.log("디저트를 선택하겠다.")
} else {
    console.log("어쩔수 없네요. 가격 맞춰서 사먹어야겠습니다.")
}

/** 퀴즈
 * 거리를 의미하는 변수를 선언하고 원하는 숫자 값(단위는 km라고 가정)을 하고
 * 할당합니다. 2km 미만이면 "걸어가자"를 2km에서 5km미만이면 "택시를 타자"를
 * 그외에는 "기차를 타자를 출력해주세요."
 */

/* 퀴즈 */
const distance = 2000;
const distance_2km = 2000;
const distance_5km = 5000;
/* 기차는 값을 구할 필요 없음 5km 이상부터는 그냥 기차를 타자라고 지문에 
나와있기 때문에 */

// 직접 풀었음
if (distance < distance_2km) {
    console.log("걸어가자")
} else if (distance_2km < distance_5km) {
    console.log("택시를 타자")
} else {
    console.log("기차를 타자")
};


// 정답

const distance2 = 2;
if(distance2 < 2) {
    console.log("걸어가자")
} else if(distance2 >= 2 && distance2 < 5) {
    console.log("택시를 타자")
} else {
    console.log("기차를 타자")
}
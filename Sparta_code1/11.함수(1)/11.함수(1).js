// 함수(1)

const priceA = 1000;
const priceB = 2000;
// 두 상품가격의 합과 평균을 구해서 추력해야 하는 코드 작성
const sum1 = priceA + priceB;
console.log(`두 상품의 합계는 ${sum1}입니다.`);
const avg1 = sum1 / 2
console.log(`두 상품의 평균은 ${avg1}입니다.`);

const priceC = 3000;
const priceD = 4000;
// 이번에도 두 상품가격의 평균을 구해서 출력해야 한다면? 위와 동일한 코드를 또 작성...
const sum2 = priceC + priceD;
console.log(`두 상품의 가격은 ${sum2}입니다.`);
const avg2 = sum2 / 2;
console.log(`두 상품의 평균은 ${avg2}입니다.`);

console.log("")
console.log("")

// ---------------------- 불편함을 해결할 수 있다 ----------------------------------

/* 함수의 선언과 호출 */
/* 변수를 선언하고 해당 변수에 값을 할당했던 것처럼 함수도 선언을 하고 해당 함수가
실행할 코드의 집합을 만들어서 저장해줍니다. */

/* 함수의 예시
function 함수명(매개변수들) {
    이함수에서 실행할 코드들 
    return 변환값
}
*/

function calculateAvg(print1, print2) {
    const sum = print1 + print2
    console.log(`두 상품의 가격 총합은 ${sum}입니다.`)
    const avg = sum / 2
    return avg
}

const print1 = 1000;
const print2 = 2000;
const avg = calculateAvg(print1, print2)
console.log(`print1과 print2의 평균은 ${avg}입니다.`)

console.log("")


/* 문제 */
/* 10,000원 20,000원을 하는 물건이 각각 있다 여기의 물건의 값의 합과 평균을 구하시오
function 함수 활용 */

let watermelon = 10000;
let chicken = 20000;

function cost (watermelon, chicken) {
    const sum_cost = watermelon + chicken;
    console.log(`두 상품의 가격의 총합은 ${sum_cost}원 입니다.`)
    const avg_cost = sum_cost / 2
    return avg_cost
}

const avg_cost = cost(watermelon, chicken) // 밖으로 호출해서 변수선언 출력할때 같이 출력
console.log(`두 상품의 가격의 평균 값은 ${avg_cost}원 입니다.`);


console.log("")


function cost2 (watermelon, chicken) {
    const sum_cost2 = watermelon + chicken
    console.log(`두 상품의 가격의 총합은 ${sum_cost2}원 입니다.`)
    return sum_cost2
}

const sum_cost2 = cost2(watermelon, chicken)
const avg_cost2 = sum_cost2 / 2
console.log(`두 상품의 가격의 총 평균은 ${avg_cost2}원 입니다.`)


console.log("")


function cost3 (watermelon, chicken) {
    const sum_cost3 = watermelon + chicken
    console.log(`두 상품의 가격의 총합은 ${sum_cost3}원 입니다.`)
    const avg_cost3 = sum_cost3 / 2
    console.log(`두 상품의 가격의 평균의 값은 ${avg_cost3}원 입니다.`)
}
cost3(watermelon, chicken);

/** 퀴즈
 * 세 개의 물건가격을 매개변수로 전달받아 평균값을 리턴하는 함수를 정의하고
 * ,그 함수를 호출해서 평균값을 출력해보세요.
 */

// Department Store
const luxury1 = 100000;
const luxury2 = 200000;
const luxury3 = 300000;

function Department_Store(luxury1, luxury2, luxury3) {
    const product_Price = luxury1 + luxury2 + luxury3
    console.log(`상품의 총합은 ${product_Price}원 입니다.`)
    const product_Average = product_Price / 3
    console.log(`상품의 총 평균 가격은 ${product_Average}원 입니다.`)
}
Department_Store(luxury1, luxury2, luxury3);

console.log("")
console.log("")

const A_building = 30000000;
const B_building = 30000000;
const C_building = 30000000;

function Apartment_cost(A_building, B_building, C_building) {
    const building_Cost = A_building + B_building + C_building
    console.log(`아파트 빌딩의 총 가격 합은 ${building_Cost}원 입니다.`)
    const building_Average = building_Cost / 3

    return building_Average
}

const building_avg = Apartment_cost(A_building, B_building, C_building);
console.log(`빌딩의 평균 가격은 ${building_avg}원 입니다.`);
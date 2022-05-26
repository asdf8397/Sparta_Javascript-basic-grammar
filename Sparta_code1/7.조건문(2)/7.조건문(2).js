const shoesPrice = 50000;
if (shoesPrice < 40000) {
    console.log("신발을 사겠습니다.")
} else {
    console.log("신발을 사지 않겠습니다. 너무 비싸요")
}

// else if 구문을 활용하면 더 많은 조건을 판단하고 코드를 실행할수 있음

const shoesPrice2 = 50000;
if (shoesPrice2 < 40000) {
    console.log("신발을 사겠습니다.")
} else if (shoesPrice2 <= 50000) {
    console.log("고민을 해볼게요")
} else {
    console.log("너무 비싸요")
};

const shoesPrice3 = 50000;
if (shoesPrice3 < 40000) {
    console.log("신발을 사겠습니다.")
} else if (shoesPrice3 < 50000) {
    console.log("고민을 해볼게요")
} else {
    console.log("너무 비싸요")
};

/** 퀴즈
 * 거리를 의미하는 변수를 선언하고 원하는 숫자값(단위는 km라고 가정)을
 * 할당합니다. 2km 미만이면 "걸어가자"를 2km이고 5km미만이면
 * "택시를 타자"를 그 외에는 "기차를 타자를 출력해봅니다"
 */

const distance = 2;
if(distance < 2) {
    console.log("걸어가자")
} else if(distance >= 2 && distance < 5) {
    console.log("택시를 타자")
} else {
    console.log("기차를 타자")
}
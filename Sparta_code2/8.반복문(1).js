/* 반복문(1) */
// 반복문 종류: while, for

// 20도인 온도를 25도까지 상승시켜라(while문)

let temperature = 20;
while(temperature <= 25) {
    console.log(`현재 온도는 ${temperature}입니다.`)
    temperature++
}; 
/* 꿀팁: 반복문을 할때는 let을 사용할 것 
    const는 한번 선언후 변수와 값이 바뀔수없다
    그래서 while문 for문으로 반복문을 실행시 error 발생
*/

/* 오늘 낮 온도는 34도 입니다. 현재 온도는 17도 입니다. 
기온상승을 나타내주세요 */

let temperature2 = 17;
while (temperature2 <= 34) {
    console.log(`오늘 낮 온도는 34도 입니다. 현재 온도는 ${temperature2}입니다.
        자외선 노출에 주의하세요.` )
        temperature2++
};
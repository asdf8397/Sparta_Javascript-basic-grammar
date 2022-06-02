/* 클래스와 객체 */

class product { // class를 지정하는 이유는 재활용성을 높이기 위해서 class를 이용해서 사용할 것
    constructor(apple_Macbook, Mac_book_price) {
        this.Macbook = apple_Macbook
        this.Macbook_price = Mac_book_price
    }

    printInfo() {
        console.log(`name: ${this.Macbook}, price: ${this.Macbook_price}`)
    }
}

const notebook = new product("Macbook", 20000)

notebook.printInfo();

/* notebook에 지정된 printInfo() 때문에 결과값을 출력할때는 notebook.printInfo를
    통해 출력을 실행하고 Macbook, 20000이 출력된다. */

// class없이 클래스를 만든다
/*
const 변수명 = {
    속성명:데이터
    메소드명: function() {메소드 호출시 실행할 코드들}
}
*/

const computer = {
    computer_type: "Macbook",
    computer_price: 2000000,
    printInfo: function() {
        console.log(`type: ${this.computer_type}, price: ${this.computer_price}`)
    }
}

computer.printInfo();

// const computer_type_change = { 
//     /* computer_type_B, computer_price_B 자체가 class 객체 직접적으로 찍은것 그래서 
//     console.log에서 this.computer_price_B, this.computer_type_B를 해줘야한다. */
//     computer_type_B: "LG Gram",
//     computer_price_B: 1000000,
//     print_Computer: function() {
//         console.log(`Computer type: ${computer_type_B}, Computer price: ${computer_price_B}`)
//     }
// }

// computer_type_change.print_Computer();


/** 퀴즈
 * 여러분만의 의류 쇼핑몰을 만들려고합니다. 옷의 종류는 많지만 기본적으로 색깔, 사이즈, 가격의 속성을
 * 갖고 있네요. 그리고 이 옷들의 세 속성을 바로 확인할 수 있게 출력해주는 메소드가 필요할 것 같습니다.
 * 클래스와 객체를 활용해 작성해보아요.
 * 
 */

class My_Business_Dress {
    constructor(color, size, price) {
        this.Dress_color = color
        this.Dress_size = size
        this.Dress_price = price
    }

    My_dress() {
        console.log(`드레스의 색상: ${this.Dress_color}, 드레스 사이즈: ${this.Dress_size}, 드레스 가격: ${this.Dress_price}`)
    }
}
const My_business = new My_Business_Dress("white", 95, 1000000);
My_business.My_dress();
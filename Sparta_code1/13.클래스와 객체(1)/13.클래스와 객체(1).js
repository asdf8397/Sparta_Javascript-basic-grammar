/* 클래스와 객체 */
// 객체 타입(Object)타입

class Notebook {
    constructor(name, price, company) { // constructor 생성자
        this.name = name
        this.price = price
        this.company = company
    }
}

const notebook = new Notebook("Macbook", 2000, "Apple");
/* MacBook, 2000, Apple을 지정한 것이 this.name, this.price, this.company에 할당되서 들어간다.
    당연 constructor의 name, price, company에도 할당되서 들어가게 된다. */
/* 순서에 맞춰 Notebook에 Macbook 2000 Apple이 들어가게 된다. 이것을 new Notebook으로
    notebook에 들어가게 지정했다고 했을때 호출에선 notebook.name, notebook.price, notebook.company
    를 호출하면 된다. */

// 할당된 값을 호출함
console.log(notebook);
console.log(notebook.name);
console.log(notebook.price);
console.log(notebook.company);

class Apartment {
    constructor(name1, price1, company1) {
        this.case1 = name1
        this.case2 = price1
        this.case3 = company1

        // apartment 변수를 지정한 곳에서 출력할때는 case1 case2 case3에 담았던 것들을 빼서 출력한다.
    }
}
const apartment = new Apartment("gram_Notebook", 1000000, "LG");
console.log(apartment);
console.log(apartment.case1);
console.log(apartment.case2);
console.log(apartment.case3);
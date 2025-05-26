class Car{ //주의사항 : 인수는 파라미터항목에 맞는 수로 사용
    constructor(name, brand, year){
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    age(x){//시간을 불러와야함
        return x - this.year;
    }
}



//현재시간 구하기
const date = new Date();//시간은 참조할뿐 가공할수 없음
let year = date.getFullYear();//변수 year에 현재년도를 대입

const myCar = new Car("자전거", "3000리",2000);
const yourCar = new Car("그냥걸어가","", 2002);

document.getElementById("in").innerHTML =
" 내가 산 차는 " + myCar.age(year) + " 가 지났어요";
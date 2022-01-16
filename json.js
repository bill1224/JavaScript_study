//JSON

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

//원하는 속성 값만 가지고 싶을 경우에는 콜백함수를 이용해서, 세밀하게 통제할 수 있다.
//name값만 전달받고 싶은 경우
// json = JSON.stringify(rabbit, ["name"]);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
});
// console.log(json);

//2. JSON to Object 
//parse(json)
console.clear();
json = JSON.stringify(rabbit);

//birthDate를 new Date() 를 통해서 오브젝트화 하기 위해, 콜백함수를 사용한 것이다. 
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birthDate' ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
//obj.jump(); -> JSON에서는 함수는 포함되어있지 않기 때문에, obj에는 jump()가 없기 때문에 오류가 난다. 

console.log("======================");
console.log(rabbit.birthDate.getDate()); //rabbit의 birthDate는 new Data()로 만들어진 오브젝트이기 때문에, getDate()함수를 사용할 수 있는 것
console.log(obj.birthDate.getDate()); //obj의 birthDate는 JSON형식에서는 그저 String형식으로 변환되어서 가져온 것이기 때문에 getDate()는 사용할 수 없다. 
console.log('hello')
console.log('hello'); // ; 사용 여부는 아직 정해지지 않았다.

// let 키워드는 같은 이름의 변수를 한번만 선언가능 (할당은 여러번 가능하다.)
let x = 1
// let x = 2
x = 3
console.log(x)

// block scope 블록 유효범위
let x = 1

if (x === 1) {
    let x = 2 // 함수 안에서는 변수가 따로 저장
    console.log(x)
}
console.log(x)

let x
const y = 9 // const를 쓸 때는 변수에 데이터를 넣어줘야한다.
// y = 10 // const는 재할당이 불가능하다. const는 변경 가능하지 않은 값이다.

if (y === 9) {
    let y = 20
    console.log(y)
}
console.log(y)

// def varTest():
// true는 소문자로 작성한다.
function varTest() {
    // block scope는 안에서 밖을 참조 가능하다.
    var x = 1
    if (true) {
        var x = 2
        console.log(x) // 2를 참조
    }
    console.log(x) // 2를 참조
}
varTest()
console.log(x) // 2를 참조하지 않는다.

// var : 선언, 할당 => 자유 / 함수 스코프 // 자유도가 높으면 오류 발생 확률이 커진다.
// let : 할당 => 자유 / 선언 => 한번만 / 블록 스코프
// const : 할당, 선언 => 한번만 / 블록스코프

// Camel case, Snake case, Pascal case, Kebab case를 주로 사용한다.
let dog
let variableName // Camel case 사용

let dogs = [] // 배열

function getName() {

}

// event를 작성할 때 on을 붙여주는 것이 일반적이다.
const onClick = () => {}

// true/false에 대한 값을 가질 경우 is를 붙여준다.
let isValid = false

// class는 Pascal case로 작성
class User {
    constructor(value) {
        this.name = value.name
    }
}

// 모두 대문자로 구성되어있으며 _로 연결되어 있다면, 절대 바뀌지 않는 완전한 상수를 말한다.
const API_KEY = "asdff:123980124"

const a = 13
const b = -5
const c = 3.14
const d = 2.9e8
const e = Infinity
const f = -Infinity
const g = NaN

console.log(e)
console.log(typeof e)
console.log(f)
console.log(typeof f)
console.log(g)
console.log(typeof g)
console.log(Math.sqrt(-2)) // NaN (Not a Number) // 허수는 NaN가 출력된다.

const sentence1 = 'hello\n'
const sentence2 = "hello"
const sentence3 = `helloword${sentence2}` // `는 내부의 변수를 쓸 경우 아니면 사용할 일이 거의 없다.
console.log(sentence3+sentence1)

const isValid = true // false

let first_name
console.log(typeof first_name) // undefined: 비어있음

let last_name = null
console.log(typeof last_name) // null: 비어있음

// console.log(null == undefined) // 비어있다는 의미는 같으므로 true값이 나온다.
console.log(null === undefined) // 완벽한 비교를 위해서는 ===을 사용해야 한다.

console.log(null + 1)
console.log(undefined + 1)
// 선언식
function add(num1, num2) {
    return num1 + num2
}
console.log(add(2, 10))

// 표현식
// 함수를 변수에 넣을 수 있음을 보여준다.
const sub = function(num1, num2) {
    return num1 - num2
}
console.log(sub(10, 2))

// 함수 표현식
const ssafy1 = function(name) {
    console.log(`hello ${name}`)
}
ssafy1('change')

// 화살표 함수, arrow function
const ssafy2 = (name) => {
    console.log(`hello ${name}`)
}
ssafy2('changhee')

// 화살표 함수 소괄호 생략, 단 매개변수가 하나일 때
const ssafy3 = name => {
    console.log(`hello ${name}`)
}
ssafy2('mandarine')

// 화살표 함수 중괄호 생략, 표현식이 하나일 때
const ssafy4 = name => `hello ${name}`
console.log(ssafy4('kim'))


// 함수 표현식
let square = function(num) {
    return num ** 2
}

// 화살표 함수
square = (num) => {
    return num ** 2
}

square = num => {
    return num ** 2
}

square = num => num ** 2


// noArgs
let noArgs = _ => 'no args' // _는 인자 없음을 말한다.
let noArgs = () => 'no args'
console.log(noArgs())


// dictionay
const a = {}
console.log(typeof a)

let returnObject = () => {
    return {key: 'value'}
}

let returnObject = () => ({key: 'value'}) // return과 중괄호 생략


// 사용자가 데이터를 넣지 않았을 때 undefined 출력
const hello = (name) => `hello ${name}`
console.log(hello('change'))
console.log(hello())

// 사용자가 데이터를 넣지 않았을 경우 기본값 설정
const hello = (name="noName") => `hello ${name}`
console.log(hello('change'))
console.log(hello())


// 기명함수
const hello = function (name) {
    console.log(name)
}
hello("change")

// 익명함수: 일회용으로 쓰는 데이터나 callback에서 사용한다. 잠깐동안 사용하는 데이터에 사용한다.
(function (name) {
    console.log(name)

})("change")
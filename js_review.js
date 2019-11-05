// function scope
for (var a=0; a<5; a++){
    console.log(a)
}
console.log(a)

function testA(){
    for(var a=0; a<5; a++){
        console.log(a)
    }
    console.log(a)
}
testA()
console.log(a)

var a = 0
function testA(){
    for(a=0; a<5; a++){
        console.log(a)
    }
    console.log(a)
}
testA()
console.log(a)

// block scope
for(let a=0; a<5; a++){
    console.log(a)
}
console.log(a)

let a = 0
for(a=0; a<5; a++){
    console.log(a)
}
console.log(a)

// const는 재할당 불가능
const user = {
    name: 'change',
    phone: 'iphone',
}
// user = {}
user.name = "ochange" // 재할당이 아님
console.log(user)

// 재할당: 데이터를 지우고 새로 뒤집어쓰는 것

// let은 재할당 가능
let user2 = {
    name: 'change',
    phone: 'iphone',
}
user2 = {}
console.log(user2)

// 데이터들의 타입 확인
console.log(typeof '123') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof null) // object: null이라는 object 반환
console.log(typeof undefined) // undefined
console.log(typeof NaN) // number // not a number: javascript에서 숫자로 인식하지 못하는 경우 출력
console.log(typeof {}) // object
console.log(typeof function(){}) // function
console.log(typeof []) // object

// Array method
const myArray = [0,1,2,3,4,5]
console.log(myArray[3]) // 음수 접근은 불가능
console.log(myArray.length)

console.log(myArray.reverse()) // 원본이 변경되는 method
console.log(myArray.push(6)) // 원본이 변경되는 method
console.log(myArray.pop())
console.log(myArray.unshift(-1)) // 배열을 오른쪽으로 밀고, unshift의 값을 맨 앞에 추가해준다.
console.log(myArray.shift()) // 배열을 왼쪽으로 밀고, 맨 앞의 값을 지운다.
console.log(myArray)

console.log(myArray.includes(100)) // false
console.log(myArray.indexOf(100)) // -1
console.log(myArray.join('-'))
console.log(myArray)

// object
const endGame = {
    title: '어벤져스: 엔드게임',
    'my-lovers': [
        {name: '아이언맨', actor: '로다주'},
        {name: '헐크', actor: '마크 러팔로'}
    ]
}
console.log(endGame['title'])
console.log(endGame.title)
console.log(endGame['my-lovers'])
console.log(endGame['my-lovers'][1].actor)

// 함수도 변수가 된다.
const welcome = function(){
    console.log('책방에 오신걸 환영합니다.')
}
// welcome()
const comics = {
    'DC': ['Aquaman', 'SHAZAM'],
    'Marvel': ['Captain Marvel', 'Avengers']
}
const magazines = null
const bookShop = {
    comics, // comics: comics
    magazines, // megazines: megazines
    greeting: welcome
}
bookShop.greeting()

const phone = {
    number: 123456789,
    model: 'iPhone',
    phoneBook: [
        '010-1234-4567',
        789456,
    ],
    call: ()=>{
        console.log('RingRing')
    },
    status: true,
    powerOff: function(){
        // this를 사용하려면 function을 사용해야 한다.
        // arrow function을 사용하면 this의 의미가 변질된다.
        this.status = false // phone.status = false
        // console.log(`전원상태 ${this.status}`)
    },
    powerOn: function(){
        this.status = true
        // console.log(`전원상태 ${this.status}`)
    },
    arrow: ()=>{
        // this: 최상단의 object (chrome에서는 window(browser))
        console.log(this) // {}
    },
    keyword: function(){
        // this: 실행하고 있는 친구의 object 자체
        console.log(this) // phone object
    },
    numberChange(newNumber){
        console.log('번호바꾸기')
        this.number = newNumber
    }
}
phone.powerOff()
console.log(phone.status)
phone.powerOn()
console.log(phone.status)
phone.arrow()
phone.keyword()
// 함수에 인자를 선언하고 불러오는 것
phone.numberChange('010-1234-5678')
console.log(phone.number)


// JSON은 ""를 기준으로 한다.
// JSON.parse
// JSON.stringify

// syntactic sugar(문법적 설탕)
// 편의성을 위해서 생략한다. 문서 참고

// Array Helper Methods
// 문서 참고


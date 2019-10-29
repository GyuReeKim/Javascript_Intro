// alert("hello world!!!") // 팝업창을 표시해준다.

// 여기는 주석입니다.
/*
여기서부터
여기까지는
주석입니다.
*/

document.write('<h1>hello world</h1>') // 문서에 작성하라는 명령어

// h1태그를 가져와!
// document.querySelector('h1')

// 가져온 태그 내부 text를 바꿔줘
// document.querySelector('h1').innerText = "bye"

// 변수 사용
// var name = "change"
// console.log(name)

// var은 잘 사용하지 않을 예정.
// 하지만 다른사람의 코드를 읽기 위해서는 알아둬야 한다.
// var b = 30
// // (var 시작값 ; 특정 조건 ; 증가)
// for (var b = 0 ; b < 10 ; b++) {
//     console.log(b)
// }
// console.log('!!!!!!!!!!!!!!!')
// console.log(b)

// 주로 사용하게 될 코드는 let과 const
// 재할당 가능
let name = 'change' // let은 데이터를 변경 가능하게 해준다.
document.write(name)

name = "changhee"
document.write(name)

// 재할당 불가능
const loca = 'GJ' // const는 수정이 불가능하다.
document.write(loca)

// 오류 발생
// loca = 'Seoul'
// document.write(loca)

const first_name = "change"
const last_name = "oh"

const full_name = last_name + first_name
document.write('<h1>'+full_name+'</h1>')
document.write(`<h1>${full_name}</h1>`) // `${}`는 문자열 사이에 데이터를 넣을 수 있도록 해준다.
console.log(`<h1>${full_name}</h1>`)

const userName = prompt("hello who are you???") // 제출기능이 있는 팝업창을 띄워준다.
let message = `<h1>hello! ${userName}</h1>`
document.write(message) // 사용자가 제출한 문자열을 넣은 message를 출력해준다.

if (userName === 'change') {
  message = `<h1>admin page</h1>`
} else if (userName === 'happy') {
  message = `<h1>happy coding</h1>`
} else{
  message = `<h1>hello! ${userName}</h1>`
}
document.write(message)

const num1 = 0
const num2 = "0"

// 느슨한 같음(값을 비교)
console.log(num1==num2)
// 엄격한 같음(타입을 비교)
console.log(num1===num2)
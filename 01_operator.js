// 사칙연산
let a = 0
// + - * / 모두 가능하다.
a = a + 3
console.log(a)
a += 3
console.log(a)
a++
console.log(a)

// 비교
console.log(2>3)
console.log('가' < '나')
console.log('A' < 'a')

// 비교연산
const a = 1
const b = '1'
console.log(a == b)
console.log(a === b)
console.log(a === Number(b))

// 논리연산
// and
console.log(true && false)
// or
console.log(false || false)
// not
console.log(!false)

// 삼항연산자
// 참일때 실행 if 조건 else 거짓일때 실행
// print("hello") if a > 3 else print("bye")
const result1 = true ? 1 : 2
console.log(result1)
const result2 = false ? 1 : 2
console.log(result2)
const a = 10
const result3 = a > 5 ? "5이상" : "5미만"
console.log(result3)
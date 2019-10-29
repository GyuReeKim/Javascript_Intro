const readline = require('readline') // 외부 라이브러리 불러오기
const userName = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

userName.question('이름을 입력하세요', (answer) => {
    console.log(answer)
    userName.close()
})


// if elif else문
const userName = prompt('who are you?')

let message = ''

if (userName === "change") {
    message = "hi admin"
} else if (userName === "happy") {
    message = "happy coding"
} else {
    message = `hello ${userName}`
}
console.log(message)


// switch문
const userName = prompt('who are you?')

let message = ''

// switch 문은 특정 case에서만 작동한다.
switch(userName) {
    case 'admin': {
        message = 'hi_admin'
        break // default를 실행하지 않고 바로 탈출
    }
    case 'change': {
        message = 'welcome'
        break
    }
    // 모든 case를 돌고 마지막으로 실행해야하는 코드
    default: {
        message = `hi ${userName}`
    }
}
console.log(message)


// while문
let i = 0
while (i < 5) {
    console.log(i)
    i++
}


// for문
/*
for ( 초기화 ; 값 비교 ; 값 증가) {
    실행시킬 코드
}
*/
for (let a = 0 ; a < 5 ; a++) {
    console.log(a)
}

// let of
const numbers = [0, 1, 2, 3, 4, 5]
for (let num of numbers) {
    console.log(num)
}
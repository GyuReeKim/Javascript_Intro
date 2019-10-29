const numbers = [1, 2, 3, 4]

console.log(numbers[0])
console.log(numbers[-1]) // 음수로는 접근이 불가능하다
console.log(numbers.length)

console.log(numbers.reverse()) // reverse는 원본을 변경한다.
console.log(numbers)

numbers.push(5) // 배열의 맨 끝에 값이 추가된다.
console.log(numbers)

numbers.pop() // 배열의 맨 끝의 값이 삭제된다.
console.log(numbers)

numbers.unshift(0) // 배열의 맨 앞에 값이 추가된다.
console.log(numbers)

numbers.shift()
console.log(numbers) // 배열의 맨 앞의 값이 삭제된다.

console.log(numbers.includes(100)) // 100값을 포함하지 않으면 false 
console.log(numbers.indexOf(100)) // 100값의 인덱스가 없으면 -1
console.log(numbers.join()) // 문자열을 하나로 합쳐준다.
console.log(numbers)
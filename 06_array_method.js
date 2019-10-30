// forEach 함수 사용
// forEach는 반환값이 없다. 연산을 하지만 결과는 없다.
let colors = ['red', 'green', 'blue']

for (let color of colors) {
    console.log(color)
}

// callback 함수 
colors.forEach(function(color){
    console.log(color)
})

// currentValue, index, array 출력
colors.forEach(function(color, idx, array){
    console.log(color, idx, array)
})

// arrow function
// function(){} === ()=>{}
colors.forEach((color)=>{
    console.log(color)
})

// 소괄호, 중괄호 생략 가능
colors.forEach(color=>{console.log(color)})
colors.forEach(color => console.log(color))

function handlePosts(){
    const posts = [
        {id: 50, title: "javascript"},
        {id: 100, title: "python"},
        {id: 123, title: "css"}
    ]
    // for문
    for (let i = 0 ; i < posts.length ; i++) {
        console.log(posts[i])
        console.log(posts[i].id)
        console.log(posts[i].title)
    }
    // forEach문
    posts.forEach(function(post){
        console.log(post)
        console.log(post.id)
        console.log(post.title)
    })
    // forEach문 array함수
    // 소괄호 생략 가능
    posts.forEach((post) => {
        console.log(post)
        console.log(post.id)
        console.log(post.title)
    })
}
handlePosts()

// forEach 예제 [200, 350, 750]
// forEach를 사용하여 넓이 구하기
const images = [
    {height: 10, width: 20},
    {height: 14, width: 25},
    {height: 50, width: 15}
]
const areas = []

// forEach문
images.forEach(function(image){
    areas.push(image.height*image.width)
})

// forEach문 array함수
images.forEach(image=>areas.push(image.height*image.width))

console.log(areas)



// map 함수 사용
// map연산은 반환값이 존재한다.
const numbers = [1,2,3,4,5]

// forEach문을 map문으로 바꿔보기
const doubleNumbers = []
numbers.forEach(function(number){
    doubleNumbers.push(number*2)
})
console.log(doubleNumbers)

// map문
const double = numbers.map(function(number){
    return number*2
})
console.log(double)

// map문 간략화하기
const double = numbers.map(number => number*2)
console.log(double)


// map 예제 [200, 350, 750]
// map을 사용하여 넓이 구하기
const images = [
    {height: 10, width: 20},
    {height: 14, width: 25},
    {height: 50, width: 15}
]

// map문
const areas = images.map(function(image){
    return image.height*image.width
})
console.log(areas)

// map문 간략화
const areas = images.map(image => image.height*image.width)
console.log(areas)



// filter 함수 사용
const numbers = [1,2,3,4,5]
const evenNumber = numbers.filter(function(number){
    return number % 2 === 0
})
console.log(evenNumber)

const products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'apple', type: 'fruit'}
]

// filter는 object 자체를 분류하기 때문에 name만 따로 쓰려면 forEach나 map을 사용해야한다.
const fruit = products.filter(function(product){
    return product.type === 'fruit'
})
console.log(fruit)



// reduce 함수 사용
const scores = [100, 80, 88, 92, 95, 70]

// reduce 함수의 특성때문에 초기값을 적지 않는다면 배열의 첫번째 요소를 사용한다.
// reduce문
const total = scores.reduce((total, score)=>{
    return total += score
}, 0)
console.log(total)

// reduce문 간략화
const total = scores.reduce((total, score) => total += score, 0)
console.log(total)



// find 함수 사용
// find는 조건에 해당하는 처음으로 만난 값을 반환하고 함수를 끝낸다.
const users = [
    {name: 'change', location: 'gj'},
    {name: 'justin', location: 'gm'},
    {name: 'tak', location: 'dj'},
    {name: 'junho', location: 'dj'},
    {name: 'neo', location: 'so'}
]

const user = users.find(function(user){
    return user.name === 'neo'
})
console.log(user)

const user = users.find(function(user){
    return user.location === 'dj'
})
console.log(user)
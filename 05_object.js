const me = {
    name: 'change',
    'phone number': '123123123',
    product: {
        phone: 'iphone',
        notebook: 'mac',
    }
}
console.log(me.name) // javascript에서는 .으로 접근한다.
console.log(me['name']) // 가능은 하지만 잘 사용하지 않는다.
console.log(me.product.notebook)


let books = ['javascript', 'python']
let comics = {
    DC: ['Aquaman', 'SuperMan'],
    Marvle: ['Avengers', 'IronMan'],
}

let bookStore = {
    books, // books: books, 와 같다.
    comics //comics: comics 와 같다.
}
console.log(bookStore)


// JSON: 항상 object 형태로 바꿔줘야한다.
const me = {
    name: 'change',
    'phone number': '123123123',
    product: {
        phone: 'iphone',
        notebook: 'mac',
    }
}
console.log(me)
const jsonData = JSON.stringify(me)
console.log(jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)
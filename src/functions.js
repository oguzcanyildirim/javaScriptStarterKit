function addToCart(quantity, productName="Elma") {
    console.log("Sepete Eklendi : ürün: " + productName + " adet " + quantity)
}

addToCart()
addToCart(5, "Limon")
addToCart(10, "Yumurta")
addToCart(1, "Karpuz")

let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    console.log(
        "Sepete Eklendi : ürün: " + productName + 
        " adet " + quantity + 
        " birim fiyat: " + unitPrice)
}

// hard to determine which one is which, making it hard for developer
addToCart2("Elma", 5, 10)
addToCart2("Armut", 3, 12)
addToCart2("Limon", 3, 14)

function addToCart3(product) {
    console.log("Sepete Eklendi : ürün: " + product.productName)
    console.log("Adet " + product.quantity)
    console.log("Birim fiyat: " + product.unitPrice)
}

let product1 = {productName:"Elma", unitPrice:10, quantity:5}
addToCart3(product1)

// objects are passed by reference in js
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName) //logs Karpuz

//numbers are passed by value

let num1 = 3
let num2 = 10
num1 = num2
num2 = 15
console.log("num1: " + num1) // logs 10

//array of objects as param into the function
function addToCart4(products) {
    console.log(products)
}

let currProducts = [
    {productName:"Elma", unitPrice:10, quantity:8},
    {productName:"Armut", unitPrice:15, quantity:1},
    {productName:"Karpuz", unitPrice:4, quantity:2}
]

//sends the ref of the currProducts to the addtocart4 function
addToCart4(currProducts)

//the parameters are sent like an array like structure when this rest notation is used
function add(...numbers) {
    console.log(numbers)
}

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)
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
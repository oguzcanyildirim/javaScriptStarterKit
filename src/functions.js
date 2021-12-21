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
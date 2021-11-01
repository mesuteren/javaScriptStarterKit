function addToCart(quantity,productName="defaultdeger") {
    console.log("Sepete eklendi! " + productName + " adet: "  + quantity)
}

//index html dosyasından başlanacak dosyayı değiştirebilirsin
//nmp run dev çalıştırmak için

//addToCart()
addToCart(10)
//addToCart("peynir")
//addToCart(15)

let sayHello = ()=>{
    console.log("hello")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma",5,10)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}
function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyatı : "+product.unitPrice)
}


addToCart3(product1)
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}

let products=[
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)
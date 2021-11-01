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
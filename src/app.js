//console.log("Merhaba Kodlama.io")

//npm run dev
//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}
//console.log(dolarDun)
const euroDun = 11.2
//euroDun = 11
//console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri =["konut kredisi","emlak konut kredisi","kamu konut kredisi","özel konut kredisi"]
//console.log("<ul>")
for (let i =0;i<konutKredileri.length;i++){
  //  console.log("<li>"+konutKredileri[i]+"</li>")
}
//console.log("</ul>")

//console.log(konutKredileri)

let student ={id:1, name:"Engin"}

function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students2=[student,{id:2, name:"Mesut"},"Çorlu",{city:"Tekirdağ"}]
//console.log(students2)

//rest
//params
//varArgs
let showProducts = function (id,...products){
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

//spread = ayrıştırır
let points = [1,2,3,4,50,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H",..."123")

//Destructuring = araydekileri değişkene atar
let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
    
}

someFunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)


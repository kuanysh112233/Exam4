//1 test///////////////////////////////////////////////////

eshop = {
    name1: "Sulpak",
    phoneNumber: 87074531808,
    products:[
        {
            productName:"iphone PRO",
            category:"Электрогика",
            price:700000,
            stock:30,   
        },
        {
            productName:"Samsung",
            category:"Электрогика",
            price:500000,
            stock:20,   
        },
        {
            productName:"Meizu",
            category:"Электрогика",
            price:300000,
            stock:60,   
        },
        {
            productName:"lenova ",
            category:"Электрогика",
            price:350000,
            stock:40,   
        },
        {
            productName:"Samsung A20",
            category:"Электрогика",
            price:200000,
            stock:90,   
        },
    ],
}
console.log(eshop);

///2 test ///////////////////////////////////////////////////////////////////////////////////
let newNameEshop = prompt("дүкен атауы")
changeShopName(newNameEshop)
function changeShopName(NameEshopName){
    eshop.name1=NameEshopName
}
console.log(eshop);

/// 3 test /////////////////////////////////////////////////////////////////
let newPhoneEshop = +prompt(" нөмір ")
changePhoneNumber(newPhoneEshop)
function changePhoneNumber(NumberPhone){
    eshop.phoneNumber=NumberPhone
}
console.log(eshop)
///3 //////////
function 







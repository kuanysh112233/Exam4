//1 test///////////////////////////////////////////////////

let eshop = {
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
    /////2///////////
    changeShopName: function(){
        let newName = prompt("Жаңа атау")
        this.name1 = newName // Атын -өзгертеді
    },
    /////3////////////////
    changePhoneNumber: function(){
        let newNumber = prompt("Жаңа номер")
        if(newNumber == ""){
            this.phoneNumber = this.phoneNumber
        }
        else{
            this.newNumber
        }
    }
    //////////4////////////
    listProductName function(){
        let productlist = []
        this.products.forEach(function(element){
            productlist.push(element.productName)
        })
        productlist = productlist.join("\n")
        alert(productlist)
    }
}
/////2///////////////
eshop.changeShopName()
console.log(eshop);
////3////////////////
eshop.changePhoneNumber()
console.log(eshop);
///////////4//////////////









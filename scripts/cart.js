

let cart=localStorage.getItem("cart");
if(!cart){
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
}
else{
    cart=JSON.parse(cart);
}
let total1=document.getElementById("total")

let total=cart.reduce(function(acc,curr){
    return ` ${acc+ curr.price}`;
},0);

let container=document.getElementById('cart');

cart.forEach(function (elem){
    let div=document.createElement("div");

    let dish=document.createElement('img')
    dish.src=elem.strMealThumb;

    let dishname=document.createElement('p');
    dishname.textContent=elem.strMeal;

    let price=document.createElement('p')
    price.textContent=price;

    div.append(dish,dishname,price);
    container.append(div);
    
})

function checkout(){
    window.location.href='checkout.html'
}



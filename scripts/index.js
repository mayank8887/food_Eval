let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
function carttt(){
    window.location.href='cart.html'
}


function fetchIndiandishes(url){
      return fetch(url)
    .then (function (res){
        return res.json();
    })
    .then (function (res){
        return res
    })
    .catch(function(err){
        console.log(err)
    });
}

async function Indiandishes(){
    try{
        let foodlist=await fetchIndiandishes(url);
         console.log("foodlist:",foodlist)
         renderfoodItems(foodlist.meals)

    }
    catch(err){
        console.log(err);
    }
}

Indiandishes();

let cart=localStorage.getItem("cart");
if(!cart){
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
    cartcount(cart);
}
else{
    cart=JSON.parse(cart);
    cartcount(cart);
}

function cartcount(cart){
    let cartcount=document.getElementById("count");
    cartcount.textContent="Count: "+cart.length;
}
function renderfoodItems(foodlist){
    let menu= document.getElementById("menu");
    
     

    foodlist.forEach(function (elem){
        
        let foodcard=document.createElement('div');

        let image=document.createElement('img');
        image.src=elem.strMealThumb;

        let name=document.createElement('p');
        name.textContent=elem.strMeal;
        
         function paisa(min,max){
         return (Math.round(Math.random()*(max-min)+min))
         }
         let andhapaisa= paisa(0,500);

        let price=document.createElement('p');
        price.innerText=`₹ ${andhapaisa}`;

        let buttn=document.createElement('button');
        buttn.textContent="Add to cart";
        buttn.onclick=function(event){
           
            addedtoCart(elem);
        }

        foodcard.append(image,name,price,buttn);
        menu.append(foodcard);
    });

        function addedtoCart(elem){
            let cart=JSON.parse(localStorage.getItem("cart"));

            cart.push(elem);

            localStorage.setItem("cart",JSON.stringify(cart));
            cartcount(cart);
        }

       
}
// Grade: 5 / 10


// 1. Define an object called SiteUser.



let website ={};



let addVisit = function ()
{

    let SiteUser = { };
    SiteUser.UserName = document.getElementById('name').value;
    SiteUser.Email =document.getElementById('email').value;
    SiteUser.Password =document.getElementById('password').value;
    SiteUser.Cart =document.getElementById('cart').value;
    SiteUser.Cell =document.getElementById('cell').value;
    SiteUser.Visits =document.getElementById('visits').value;
    SiteUser.Preferences =document.getElementById('preferences').value;
    SiteUser.LastSignIn =document.getElementById('lastsignin').value;

    website.push(SiteUser);
    console.log(SiteUser);
};



let addItemToCartBtn = document.getElementById("shopping");

addItemToCartBtn.addEventListener("click",website.addItemToCart );




// 0/2 pts
// 3. Add a function to the SiteUser object called addVisit.
//      This function should increase the Visits property by 1.
SiteUser.addVisit = function()
{
    SiteUser.Visits++;
}

// 0/3 pts
// 4. Call the addVisit method of the SiteUser object.
SiteUser.addVisit();

// 0/2 ex pt
// B. Add a function to the SiteUser object called addItemToCart.
//      This function should take an argument called item.
//      This function should then add that item to the cart array.
let item = "grocery";

addItemToCart : function (item){
    siteUser.Cart.push(item);
}

siteUser.addItemToCart(item"grocery");
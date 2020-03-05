// 1. Define a constant named favBook that holds the name of your favorite book.
//      Also define a standard variables called favInt that contains your favorite int.


let favBook = "Pride and Prejudice";
let favInt = "27";


console.log( favBook );

console.log( favInt );

//2. Write an if statement that meets the following conditions.
//      If favInt is greater than 42, console log the word BIGGER.
//      If favInt is less than 42, console log the word SMALLER.
//      If favInt is equal to 42, console log the word EQUAL.

int =favInt;


if (favInt >= 42) {
    console.log("BIGGER");
}
else if (favInt < 42) {
    console.log("SMALLER");
}
else {
    console.log("Equal");
}


// 3. Write a for loop that iterates 7 times. Log the name of your book in each iteration.

//for loop

for (var i =0; i <8; i++)
{
    console.log(favBook +":" +i);
}


// -1.5 pt
// 4. Write a while loop that iterates until favInt is less than or equal to -42.
//      Inside the loop, write an if that will send a console error if favInt is 0.
//      The console error should read "ZERO DETECTED!"

var j = 27;
while (j <= 42)
{
    j++;
    console.log("whileloop:",j);
    //else(j=0)
    if (j == 0)
    {
        console.log("ZERO DETECTED!");
    }
}





// 1.5/2 ex pts
// 5. Write  for you favBook that meets the following bookname conditions.
//      "The Matrix" should console log "Excellent Movie!"
//      "Tears Of Steel" should log "I love open source!"
//      "Fight Club" should log "Excellent Movie!"
//      "Citizen Kane" should log "All Time Best Movie!"
//      "Star Wars" should log "He didn't say Luke I am your father!"

const expr = favBook;
switch (expr) {
    case "The Matrix":
        console.log(favBook +"should console log Excellent Movie!");
        break;
    case "Tears of Steel":
        console.log(favBook +"should console log I love open source!");
        break;


}

// 1. Define a function that take two arguments, you can choose the name.
//      The function should them multiply them together and return the result

function getTotalPrice (x, y) {
    var x = price_item;
    var y = qty;


    return x * y;
}



document.write(getTotalPrice(1500,4);


// 2 pts
// 2. Create a button with an id of multiply, with text that says "Multiple 4 and 7"
//      Add an onclick event to this button that calls the function above, passing in 4 and 7.

// IN HTML
<button onclick="getTotalPrice(4, 7);" >Multiply 4 and 7</button>

// let multiply = document.getElementById("multiply");

// multiply.addEventListener( "click", Multiple 4 and 7 )

// 2pt
// 3. Write a function that displays a welcome message to the user in the dev console or anywhere on the page.

function welcomeMsg() {
    console.log("Hello!");
}




// 2.5 / 3 pts
// 4. Create a button with an id of welcome, with text that says "Display Welcome"
//      Add a JS created listener click event to this button that calls the welcome function above.
let welcome = document.getElementById("welcome");

welcome.addEventListener( "click", welcomeMsg )

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


// 1. Use the JS to get my footer into a variable called foot.


function findFooter() {

    var foot = document.getElementById("myFoot");
    cell.innerHTML = "<b>This is a footer</b>";
}


// 3 pts
// 2. Add an event to my footer to fire a method when clicked. Any method name is fine.
function findFooter(){
    foot = document.getElementById("myFoot");
    myHoverBtn.addEventListener("click", changeName);
}

changeName: function()
{
    change("click");
}



// 2 pts
// 3. Store my title element in a variable called myTitle.
//<title>CIS-172-70 20W Dashboard</title>


<a id ="title" title="CIS-172-70 20W Dashboard"></a>

var myTitle = document.getElementById("title");

var  =title { titleText: link.getAttribute("title") };


myTitle.setAttribute("title", title.titleText);

// 3 pts
// 4. Use JS to change my Title and Footer to day "This Class rocks!"

document.getElementsById("title").innerHTML = "This Class rocks!";
document.getElementsById("myFoot").innerHTML = "This Class rocks!";
/**
 * Quiz 2 focuses on functions and events
 *
 * @category    Quiz 2
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.02.13
 * @grade       9.5 / 10
 **/

// 3 pts
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


// 0/1 ex pt
// 5. Create an on hover event for one of the buttons above.
//      This event can fire any function you would like.


/**
 * Quiz 9 focuses on AJAX
 *
 * @category    Quiz 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Boram Lee <blee22@hawkmail.hfcc.edu>
 * @date        2020.04.30
 * @grade       11 / 10
 */


// 4 pts
// 1. Create a JS object called cartData and save 3 properties in it.
//    The properties should be name, price, and quantity; feel free to give them any values.
var carData = {
    "name" : "Lamborghini",
    "price" : 4000,
    "quantity" : 2 ,
};

// 1 pts
// 2. Create a variable called cartDatabaseUrl and set it to the following string.
//              https://example.com/api/v2/cart
var carDatabaseUrl = 'https://example.com/api/v2/cart'; // All you needed was this :)
//quiz9.makeRequest('https://example.com/api/v2/cart', JSON.parse(carDatabaseUrl));


// 3 pts
// 3. Send an ajax POST request to the url in the cartDatabaseUrl variable, and pass along the cartData object
makeRequest: function( url, data )
{
    $.ajax( {method: "POST", url:  carDatabaseUrl, data: carData, complete: quiz9.getResponse} );
},


// 2 pts
// 4. Assume the api responded and the resulting response string is stored in a variable called responseString.
//          Parse the response string into an object and store it in a variable called responseObj.

var responseObj = JSON.parse(this.responseString)

// 2 / 2 pts
// E. Name a http status codes for success and one for error.
Accepted 202

Unauthorized 401 // 500 are for server errors, 400 are for bad requests
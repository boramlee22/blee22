 /**
* Quiz 1 focuses on variables and control structures
*
* @category    Quiz 1
* @author      Chad Banks <crbanks1@hfcc.edu>
* @author      Boram
* @date        2020.01.30
* @link
* @grade       10 / 10
*/


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
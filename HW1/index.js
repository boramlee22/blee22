 /**
* HW 1 focuses on variables and control structures
*
* @category    HW 1
* @author      Chad Banks <crbanks1@hfcc.edu>
* @author      Boram
* @date        2020.01.30
* @link
* @grade       10 / 10
*/

let name = "Boram Lee";
let major = "CIS";
let hobby = "snowboarding";

console.log( name );

console.log( major );

console.log( hobby);


const email = "blee22@hawkmail.hfcc.edu";

function preferred_email()
{
    var email = "blee22@hawkmail.hfcc.edu";
    console.log(email);

}

preferred_email();


const myclass= "CIS-172";


console.log(myclass);

let mySentance =
    "I am using JS in " +myclass+".";
console.log(mySentance);

//for loop
for (var i =0; i <11; i++)
{
    console.log("forloop:",i);
}

//while loop
var j = 10;
while (j <21)
{
    j++;
    console.log("whileloop:",j);
}

//if else

let myname = "boram";
consol.log("Welcome" + myname + major + ".");

if (myname === "Mr.Banks")
{

    console.log("Welcome back Professor!");
}
else
{
    console.log("Welcome" + myname + major + ".");
}



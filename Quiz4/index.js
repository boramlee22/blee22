/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade       9 / 10
 */

// Use my page for all examples below.
// https://cislinux.hfcc.edu/~crbanks1

// 1.5/2 pts
// 1. Use the JS to get my footer into a variable called foot.

     var foot = document.getElementById("myFoot");


// 2.5/3 pts
// 2. Add an event to my footer to fire a method when clicked. Any method name is fine.
    foot = document.getElementById("myFoot");
    foot.addEventListener("click", changeName);
 



// 2/2 pts
// 3. Store my title element in a variable called myTitle.
//<title>CIS-172-70 20W Dashboard</title>



var myTitle = document.getElementById("title");



//myTitle.setAttribute("title", title.titleText);

// 3/3 pts
// 4. Use JS to change my Title and Footer to day "This Class rocks!"

document.getElementsById("title").innerHTML = "This Class rocks!";
document.getElementsById("myFoot").innerHTML = "This Class rocks!";




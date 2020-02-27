/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade
 */

// Use my page for all examples below.
// https://cislinux.hfcc.edu/~crbanks1

// 2 pts
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




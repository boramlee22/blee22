
// Grade: 10 / 10

var PageManager = {

    init : function () {


        var btn1 = document.getElementById("btn1");
        btn1.addEventListener("click",PageManager.changeH1);

        var btn2 = document.getElementById("btn2");
        btn2.addEventListener("click",PageManager.appendDiv);

        var btn3 = document.getElementById("btn3");
        btn3.addEventListener("click",PageManager.conLog);

        var select = document.getElementById("dropdown");
        select.addEventListener("change", PageManager.bgcolor);

        localStorage.setItem("background-color","white")

        var cookies =  cookieManager.getCookies();

        cookieManager.setCookie("Email", "blee22@hfcc.edu", 60);
        cookieManager.setCookie("Name", "Boram");
        cookieManager.setCookie("Class", "CIS-172");
        cookieManager.setCookie("Date", new Date);
        cookieManager.setCookie("Movie", "The Matrix");

        let click = document.getElementById('clicker');
        click.addEventListener('click', PageManager.onClicks);



    },
    changeH1 : function() {
        var text = document.getElementById("text1");
        document.getElementById("h1").innerHTML = text.value;

    },
    appendDiv : function(){
        var divText = document.getElementById("text2");
        document.getElementById("appdiv").innerText = divText.value;
    },
    conLog : function() {

        console.log(PageManager);
    },

    bgcolor : function (event) {
        var storelocal = event.target;
        localStorage.setItem("background-color",storelocal.value);

        var bgcolor = document.body;

        if (event.target.value ==='white'){
            bgcolor.style.backgroundColor = "white";
        }else if  (event.target.value ==='grey'){
            bgcolor.style.backgroundColor = "grey";
        }else if  (event.target.value ==='lavender'){
            bgcolor.style.backgroundColor = "lavender";
        }else if  (event.target.value ==='navy'){
            bgcolor.style.backgroundColor = "navy";
        }else {
            bgcolor.style.backgroundColor = "turquoise";
        }
    },
    onClicks : function() {

        var look = localStorage.getItem('clicker');


        if (!look) {
            localStorage.setItem("clicker", 1);
        }else {
            var i = parseInt(localStorage.getItem("clicker"));
            localStorage.setItem("i", i++);//If the value is set to an integer, then increment it by 1.


        } $('#clicker').on("click", function(){
            $( '#show' ).append('Clicks :'+i).show();
        });

    }







};

window.onload = PageManager.init;



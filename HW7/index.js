
var PageManager;
PageManager = {

    init : function () {

        let myBtn1 = document.getElementById('btn1');
        myBtn1.addEventListener("click", PageManager.changeText);

        PageManager.myBtn2 = document.getElementById('btn2');
        PageManager.myBtn2.addEventListener("click", PageManager.inputDiv);

        PageManager.myBtn3 = document.getElementById('btn3');
        PageManager.myBtn3.addEventListener("click", PageManager.consoleObject );

       // PageManager.changeColor = document.getElementById('bgcolor');
        //PageManager.changeColor.addEventListener( 'change', PageManager.updateColor )

        let backgroundColor = localStorage.getItem('background-color');

        if (!bgcolor)
            localStorage.setItem("background-color", "white");
        $('body').css("background-color", bgcolor);

        $('#bgcolor').value = bgcolor;

        let selectBox = document.getElementById('bgcolor');
        selectBox.addEventListener('change', PageManager.updateColor);


        let ls = document.getElementById('clicker');
        ls.addEventListener('click', PageManager.clicks);


        let cookies = cookieManager.getCookies();

        cookieManager.setCookie("Boram Lee"; cclass: "CIS-172" cemail:"blee22@hawkmail.hfcc.edu", cdate, cmovie:"Matrix");



    },

    changeText : function (event) {
        let textBox = document.getElementById('text1');
        let newText = textBox.value;
        let h1 = document.getElementById('h1');
        h1.innerHTML = newText;
    },

    inputDiv : function (event) {

        var newdiv = $('#appdiv');
        var text = $("#text2").val();

        newdiv.append(text);
    },

    consoleObject: function ()
    {
        console.log(PageManager);
    },

    updateColor: function (event){

        let select = event.target;
        localStorage.setItem("background-color", select.value);


        $('body').css("background-color", select.value);

        /*var select = document.getElementById('bgcolor');

        if (select.value ==='white') {
            select.style.backgroundColor = "white";
        } else if( select.value ==='red' )
        {
            select.style.backgroundColor = "red";
        }else if( select.value ==='black' )
        {
            select.style.backgroundColor = "black";
        }else if( select.value ==='blue' )
        {
            select.style.backgroundColor = "blue";
        }else{

            select.style.backgroundColor = "green";
        }*/
    },



    clicks : function () {
        var look = localStorage.getItem('clicker');
        if (look) === null {
        localStorage.setItem('clicker', 1);
    }  if(key in localStorage){
            var increase = localStorage.getItem("1");
            localStorage.setItem(increse++);
            console.log(attempts);
        }
        $("#showcr").html(look.join('<br>'));
    }










};

window.onload = PageManager.init;
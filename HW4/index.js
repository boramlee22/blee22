var PageManager = {


    init : function(){
        let myBtn1 = document.getElementById('btn1');
        myBtn1.addEventListener("click", PageManager.changeText );

        PageManager.myBtn2 = document.getElementById('btn2');
        PageManager.myBtn2.addEventListener("click", PageManager.inputDiv );
        PageManager.myBtn3 = document.getElementById('btn3');
        PageManager.myBtn3.addEventListener("click", PageManager.consoleObject );
    },

    changeText : function (event)
    {
        let textBox = document.getElementById('text1');
        let newText = textBox.value;
        let h1 = document.getElementById('h1');
        h1.innerHTML = newText;
    },
    inputDiv : function()

    {
        var div = document.getElementById(appdiv);
        var text = document.getElementById('text2');
        div.appendChild('text');
       document.body.appendChild('div');

        //document.getElementById('appDiv').innerHTML += document.getElementById('text2');
    },

    consoleObject: function ()
    {
        console.log(PageManager);
    },

    var select = document.getElementById('dropdown');
    select.addEventListener('change',function(){
        if (select.value ==='white'){
            select.style.backgroundColor = "white";
        }
    }
};
window.onload = PageManager.init;
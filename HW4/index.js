/**
 * Homework 4
 * @grade		8 / 10
 */
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
        var div = document.getElementById('appdiv');
        var text = document.getElementById('text2');
        //div.appendChild('text');
        //document.body.appendChild('div');

        div.innerHTML += document.getElementById('text2').value;
    },

    consoleObject: function ()
    {
        console.log(PageManager);
    }


};
window.onload = PageManager.init;


// Cannot put code inside an object, unless it is inside a method
var select = document.getElementById('dropdown');
select.addEventListener('change',function(){
    var select = document.getElementById('dropdown');
    if (select.value ==='white'){
        select.style.backgroundColor = "white";
    }
});
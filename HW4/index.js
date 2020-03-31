var PageManager = {

    myBtn = null,

    init : function(){
        PageManager.myBtn = document.getElementById('btn1');
        PageManager.myBtn.addEventListener("click", PageManeger.inputText );
        PageManager.myBtn = document.getElementById('btn2');
        PageManager.myBtn.addEventListener("click", PageManeger.inputText );
        PageManager.myBtn = document.getElementById('btn3');
        PageManager.myBtn.addEventListener("click", PageManeger.inputText );
    },


    inputText: function (value)
    {
        document.getElementById('text1').innerHTML = text;
    },


};
window.onload = PageManager.init;
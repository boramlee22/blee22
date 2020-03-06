let submitPost = {

    myDiv: null,
    myHoverBtn: null,

    init: function () {

        let SubmitHandler = {};
        SubmitHandler.myDiv = document.getElementById('text1').value;


        handleNewButton : (function () {
            var txt = document.getElementById('text1').value;
            myHoverBtn.addEventListener("click", input);
        });

        function input(val){
            _('display').value = eval(_('display').value);
        }

    }

};

$.getScript("main.js",function(){
    sendNewPostToApi();
}
);



    window.onload = submitPost.init;



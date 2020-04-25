let submitPost = {

    myDiv: null,
    myHoverBtn: null,

    init: function () {

        let SubmitHandler = {};
        SubmitHandler.myDiv = document.getElementById('text1').value;


        myHoverBtn.addEventListener("click", submitPost.handleNewButton);

    },
    handleNewButton : function () {
        Blueit.sendNewPostToApi();
    }

};

// $.getScript("main.js",function(){
//     sendNewPostToApi();
// });

window.onload = submitPost.init;



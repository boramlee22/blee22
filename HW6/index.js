let PageHandler = {

    pageDiv : null,
    hiddenDiv : null,
    Hidden : true,

    init: function (){

        console.log("Page has loaded!");

        window.jQuery = function() {
            try {
                if (window.jQuery) {
                    console.log("jQuery is loaded.");
                } else {
                    throw "jQuert is not loaded.";
                }
            }catch(error){
                alert(error);
            }
        }
        window.jQuery();

        $( '#myDiv' ).load(PageHandler.pageDiv);


        $( '#JohnCena' ).append('<p>Another Div!</p>').hide();
        $('#showBtn').on( "click", PageHandler.showDiv);



    },
    showDiv : function( event )
    {
        console.log("showDiv is loaded");
        if(PageHandler.Hidden)
        {
            PageHandler.hiddenDiv.show();
            PageHandler.Hidden = false;
        }
        else
        {
            PageHandler.hiddenDiv.hide();
            PageHandler.Hidden = true;
        }
    },


    $('#tojQuery').click(function() {
    window.open('https://api.jquery.com/');
});

};


window.onload = PageHandler.init;
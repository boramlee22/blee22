


let Blueit = {

    siteApiUrl: '',

    upBtn1: null,
    downBtn1: null,

    init: function( )
    {
        Blueit.siteApiUrl = "https://cislinux.hfcc.edu/~crbanks1";

        Blueit.upBtn1 = document.getElementById( 'up1' );
        Blueit.upBtn1.onclick = Blueit.handleUpClick;
        Blueit.downBtn1 = document.getElementsByTagName( 'down1' );
        Blueit.downBtn1.onclick = Blueit.handleDownClick;
    },
    handleUpClick: function( e )
    {
        Blueit.sendVoteToApi( e.target.id, 1 );
    },
    handleDownClick: function( e )
    {
        Blueit.sendVoteToApi( e.target.id, -1 );
    },

    try{
        if(true)
}

            catch(e){
        sendVoteToApi: function (buttonId, Value) {
            // Value can be 1 or negative one
            $.ajax(Blueit.siteApiUrl, {action: "vote", pid: buttonId, val: Value});

            console.error("Error occured ", e);
            throw e;
    },

    sendNewPostToApi: function( dataObj )
    {
        $.ajax( Blueit.siteApiUrl, {action:"post", pid:buttonId, val:Value, data:dataObj} );
    }
};



window.onload = Blueit.init;
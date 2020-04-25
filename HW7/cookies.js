


var cookieManager = {

    setCookie : function(cname, cclass, cvalue, cdate, cmovie )
    {

        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));

    },
    getCookies : function()
    {
        return document.cookie;
    }
};

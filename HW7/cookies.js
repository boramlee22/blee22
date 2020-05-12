
var cookieManager = {

    setCookie : function(cname, cvalue, exdays)
    {

        var d = new Date();//today's date
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        //document.cookie = "username=ProfBanks"; stored in Cookies


    },
    getCookies : function()
    {
        return document.cookie;
    }
};
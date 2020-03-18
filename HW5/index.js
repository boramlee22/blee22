try {
    let ErrorHandler = {

        init: checkDate = function () {
            let checkDateBtn = document.getElementById("date");
            checkDateBtn.addEventListener(type : "click", ErrorHandler.checkDate);
            alert('check');



            date = new Date();
            var curDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
            var curTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            var dateTime = curDate+' '+curTime;

            if (date.getDate ==  today) {
                var txt ="Welcome to class!";
                document.getElementById(Hmessage).innerHTML = '';
                return false;
            }
            else
            {
                document.getElementById(Emessage).innerHTML = <span style=”color:red;”>Sorry, an error occurred!</span>;
            }
        }        $checkDate();





        }


    }
    window.onload = ErrorHandler.init;
}catch (e) {
    condole.error(e);
}





function checkdate(e, obj, errMsgSel){
    var sendDate =obj.value;

    sendDate = (new Date()).fromString(sendDate);
    if (sendDate == null) {
       if (e.type == 'blur') {
           obj.value = '';
        }
        return;
    }
    today = new Date();

    if (sendDate < today) {
        alert('The  date can\'t be in the past. Please pick another date.');

       document.getElementById(errMsgSel).innerHTML = 'The  date can\'t be in the past. Please pick another date.';
        return false;
    }
    else
    {
       document.getElementById(errMsgSel).innerHTML = '';
    }
}        $(function () {
});
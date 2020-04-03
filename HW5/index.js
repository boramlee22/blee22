
let ErrorHandler = {
   
    init: function () {

        console.log('Hello');

        let checkDateBtn = document.getElementById('dateTime');
        checkDateBtn.addEventListener("click", ErrorHandler.checkDate);
        checkDateBtn.addEventListener("click", ErrorHandler.checkTime);
        alert('check');

    },

    checkDate: function () {
        try {
            console.log('Clicked');


            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;

            console.log('Today:', dateTime);

            let happyMessage = '"Welcome to class!';
            let errorMessage = '<span style="color:red;">Sorry, an error occurred!</span>';

            if (today.getDate() == ){

            alert(happyMessage)
            }else  (today.getDate() !== ){

            alert ("Enjoy your day off!")
            }


        } catch (e) {
            condole.error(e);
        },

        checkTime: function () {
            try {


                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;



                let happyMessage = '"Welcome to class!';
                let errorMessage = '<span style="color:red;">Sorry, an error occurred!</span>';

                if (today.getMinutes() %2 === 0){

                   document.getElementById('timecheck').innerHTML = (happyMessage);

                }


            } catch (err) {
                document.getElementById('timecheck').innerHTML = err.message;
            }


    };

    window.onload =  ErrorHandler.init;




var hw8 = {

    init : function ()
    {
        var readBtn = document.getElementById('readBtn');
        readBtn.addEventListener('click', hw8.onReadFile);

        var API = document.getElementById('API');
        API.addEventListener('click', hw8.onAPIRequest);


    },

    onReadFile : function (url){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if ( this.readyState === 4 && this.status === 200) {
                document.getElementById("output").innerHTML = this.responseText;
            }else {
                console.log("error");
            }
        };
        xhttp.open("GET", "message.txt", true);
        xhttp.send();
    },
    onAPIRequest: function( response )
    {
        //var APIKEY = "5c366a97e5146bac88cfcbc65707ed79"
        //var APIURL = `https://api.openweathermap.org/data/2.5/weather?q={busan}&appid={APIKEY}`;

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=Livonia&appid=5c366a97e5146bac88cfcbc65707ed79",
            method: 'POST',
            success: (data) => {
                var tempr = String((data.main.temp-273)).substring(0, 3); //Celsius
                var location = data.name;
                $('#output').append('City：' +location +" "+' Temperature：' + tempr + '\n');
            }
        });

    }

};

window.onload = hw8.init;



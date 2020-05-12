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
        var API_KEY ="5c366a97e5146bac88cfcbc65707ed79";

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
        ).then(function(json){
            return response.json();
        })
            .then(function(jason){
                const temperature = json.main.temp;
                const place = json.name;
                document.getElementById("output").innerText= `${temperature} @ ${place}`;
            });




    }


};

window.onload = hw8.init;



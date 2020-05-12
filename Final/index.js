/**
 * CIS-172 Final
 * 
 * This file should allow users to choose and preview a car color.
 * It should also use local storage to remember the car options they selected.
 *
 * @category    Final
 * @author      Boram
 * @date        2020.05.12
 * @grade       
 *
 **/

var pagejs = {

    carcolor : false,
    metric: {"data":"All sorts of metrics are in here."},

    init: function ()
    {
        console.log("Page loaded!");

        // LOCAL STORAGE STUFF
        pagejs.carcolor = localStorage.getItem('car-color');

        if(!pagejs.carcolor)
        {
            localStorage.setItem( "car-color", "white" );
            pagejs.carcolor = 'white';
        }

        // Perform Actual Visible Update
        pagejs.updateDisplay( pagejs.carcolor );

        // COLOR PICKER LISTENER
        let selectBox = document.getElementById('carcolor');
        selectBox.addEventListener('change', pagejs.updateColor);

        // BUY BUTTON LISTENER
        let btn = document.getElementById('buybtn');
        btn.addEventListener('click', pagejs.onButtonClick);
    },
    updateDisplay : function()
    {
        let carimage = document.getElementById('carimage');
        carimage.src = pagejs.carcolor + '.png';

        let selectBox = document.getElementById('carcolor');
        selectBox.value = pagejs.carcolor;
    },
    updateColor : function(event) {
        try {
        // Save The Value
        let sb = event.target;
        pagejs.carcolor = sb.value;

        localStorage.setItem( "car-color", pagejs.carcolor );

        // Perform Actual Visible Update
        pagejs.updateDisplay( pagejs.carcolor );

        //Switch statement to check the color in the pagejs
        switch(pagejs.carcolor) {
            case 'white':
                console.log("White");
                break;
            case 'red':
                console.log("Red");
                break;
            case 'blue':
                console.log("blue");
                break;

            default :
               throw new Error;
        }

    }catch(e){
        console.error( "Error:", e.message );
    }

    },
    onButtonClick: function()
    {
        console.log("BUY BUTTON!");
        //add an AJAX POST request
        $.ajax( {method: "POST", url: 'https://nottesla.com/api/v2/page/metrics', data: pagejs.metric } );


        //a line to save the metrics object
        localStorage.setItem("Name",JSON.stringfy(pagejs.metric) );
    }
};


window.onload = pagejs.init;

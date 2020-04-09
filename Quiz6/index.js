let FormValidator = {

    myCryptoForm : null,
    Valid : false,

    init : function () {
        let email = document.getElementById('email');
        email.addEventListener("blur", FormValidator.validateAndSaveEmail);

        FormValidator.myCryptoForm = document.getElementById('myCryptoForm');
        FormValidator.myCryptoForm.addEventListener("submit", FormValidator.submitForm);

        validateAndSaveEmail : function () {
            let emailInput = document.getElementById('email');

            if (emailInput.value.length < 5) {
                console.error("Email address should have more than 5 characters!");

                return false;
            }
            let characterIndex1 = emailInput.value.indexof("@");
            let characterIndex2 = emailInput.value.indexof(".");

            if (characterIndex1 === -1) {
                console.error("Email should have @ ");
                return flase;
            }

            if (characterIndex2 === -1) {
                console.error("Email should have . ");
                return flase;
            }
            // Are there any other way I can make a if statement with  both of "@" and "."  in one line?
            return true;
        },

        let favoriteCoin = document.getElementById('favoriteCoin');
            favoriteCoin.addEventListener('change', FormValidator.onFavCoinChange);


        onFavCoinChange : function(event){

                if (event.target.value === 'Bitcoin') {
                    console.log("The coin to rule them all!");
                }

                if (event.target.value === 'Ethereum') {
                    console.log("Solidity smart contracts for the win!");
                }

                if (event.target.value === 'XRP') {
                    console.log("Bold move cotton!");
                }

                if (event.target.value === 'Other') {
                    console.log( "You may be making a huge mistake...");
                }


            },

        submitForm : function (event) {

            let Valid = true;

            if (!FormValidator.validateAndSaveEmail())
            {
                Valid = false;
            }

            if (!FormValidator.onFavCoinChange())
            {
                Valid = false;
            }

            if(Vali) {
                FormValidator.myCryptoForm.submit();
            }
        }




    }

};


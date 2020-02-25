// Grade: 10 / 10

let tweetCollection = [];



let tweetBuilder = function(){

    let tweetUsing = { };

    tweetUsing.id       = document.getElementById('id').value;
    tweetUsing.message  = document.getElementById('message').value;
    tweetUsing.likes    = document.getElementById('likes').value;
    tweetUsing.shares   = document.getElementById('shares').value;
    tweetUsing.comments = document.getElementById('comments').value;
    tweetUsing.username = document.getElementById('username').value;
    tweetUsing.date = new Date();

    tweetCollection.push(tweetUsing);
    console.log(tweetUsing);

}

let dump = function(){

    console.log(tweetCollection);


}
let tweetBuilderBtn = document.getElementById("tweetcollection");
tweetBuilderBtn.addEventListener( "click", tweetCollection.tweetBuilder );








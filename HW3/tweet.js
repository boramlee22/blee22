

let tweetCollection = {};

tweetCollection.firstpage = [];

tweetCollection.tweetBuilder = function(){

    let tweetUsing {};

    tweetUsing.id       = document.getElementById('id').value;;
    tweetUsing.message  = document.getElementById('message').value;;
    tweetUsing.likes    = document.getElementById('likes').value;;
    tweetUsing.shares   = document.getElementById('shares').value;;
    tweetUsing.comments = document.getElementById('comments').value;;
    tweetUsing.username = document.getElementById('username').value;;

    tweetCollection.firstpage.push(tweetUsing);
    console.log(tweetUsing);

}
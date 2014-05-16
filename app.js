function generateRandomNumber(cb){
    setTimeout(function(){
        cb(Math.floor(Math.random() * 100));
    }, 500);
}


generateRandomNumber(function(nr){
    console.log('the  number: ', nr);
});
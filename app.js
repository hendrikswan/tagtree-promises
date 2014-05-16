function generateRandomNumber(cb){
    setTimeout(function(){
        cb(Math.floor(Math.random() * 100));
    }, 50);
}


generateRandomNumber(function(nr1){
    generateRandomNumber(function(nr2){
        generateRandomNumber(function(nr3){
            generateRandomNumber(function(nr4){
                generateRandomNumber(function(nr5){
                    generateRandomNumber(function(nr6){
                        generateRandomNumber(function(nr7){
                            console.log(nr7 + nr6 + nr5 + nr4 + nr3 + nr2 + nr1);
                        });
                    });
                });
            });
        });
    });
});
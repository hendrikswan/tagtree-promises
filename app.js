var Q = require('q');

function generateRandomNumber(cb){
    setTimeout(function(){
        cb(null, Math.floor(Math.random() * 100));
    }, 50);
}

var genPromise = Q.denodeify(generateRandomNumber);

genPromise().then(function(nr1){
    genPromise().then(function(nr2){
        genPromise().then(function(nr3){
            console.log(nr1 + nr2 + nr3);
        });
    });
});




// generateRandomNumber(function(nr1){
//     generateRandomNumber(function(nr2){
//         generateRandomNumber(function(nr3){
//             generateRandomNumber(function(nr4){
//                 generateRandomNumber(function(nr5){
//                     generateRandomNumber(function(nr6){
//                         generateRandomNumber(function(nr7){
//                             console.log(nr7 + nr6 + nr5 + nr4 + nr3 + nr2 + nr1);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
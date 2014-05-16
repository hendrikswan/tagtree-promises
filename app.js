var Q = require('q');

function generateRandomNumber(addTo, cb){
    setTimeout(function(){
        cb(null, Math.floor(Math.random() * 100) + addTo);
    }, 50);
}

var genPromise = Q.denodeify(generateRandomNumber);

genPromise(0)
    .then(function(nr){
        return genPromise(nr)
    })
    .then(function(nr){
        return genPromise(nr)
    })
    .then(function(nr){
        return genPromise(nr)
    })
    .then(function(total){
        console.log(total);
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
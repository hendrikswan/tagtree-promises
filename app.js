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


 
$(document).ready(function() {

    //create a function that generates a random number between 19-120
    function getRandomArbitrary(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }

    console.log(getRandomArbitrary(19, 121));
    

})  


//create variables for tracking target number, running total, red, orange, yellow, green, blue and purple stones
    var target = 0;
    var runningTotal = 0;
    var redStone = 0;
    var orangeStone = 0;
    var yellowStone = 0;
    var greenStone = 0;
    var blueStone = 0;
    var purpleStone = 0;

    //set initial values for html paragraph tags
    document.getElementById('target').innerHTML = "Target: " + target;
    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;


$(document).ready(function() {

    //create a function that generates a random number between 19-120
    function getRandomArbitrary(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }

    console.log(getRandomArbitrary(19, 121));

    //add target to the page
    target = getRandomArbitrary(19, 121);
    document.getElementById('target').innerHTML = "Target: " + target;

})  


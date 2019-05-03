//create variables for tracking target number, running total, red, orange, yellow, green, blue and purple stones
    var target = 0;
    var runningTotal = 0;
    var redStone = 0;
    var orangeStone = 0;
    var yellowStone = 0;
    var greenStone = 0;
    var blueStone = 0;
    var purpleStone = 0;
    var wins = 0;
    var losses = 0;

    //set initial values for html paragraph tags
    document.getElementById('target').innerHTML = "Target: " + target;
    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;


$(document).ready(function() {

    //create a function that generates a random number between 19-120
    function getRandomArbitrary(min, max){
        return Math.round(Math.random() * (max - min) + min);
    };

    //create a function for resetting stone values to call when running total is greater than, equal to target
    function resetStones() {
        redStone = getRandomArbitrary(1, 12);
        console.log("redStone = " + redStone);
        orangeStone = getRandomArbitrary(1, 12);
        console.log("orangeStone = " + orangeStone);
        yellowStone = getRandomArbitrary(1, 12);
        console.log("yellowStone = " + yellowStone);
        greenStone = getRandomArbitrary(1, 12);
        console.log("greenStone = " + greenStone);
        blueStone = getRandomArbitrary(1, 12);
        console.log("blueStone = " + blueStone);
        purpleStone = getRandomArbitrary(1, 12);
        console.log("purpleStone = " + purpleStone);
    };      

    //create a function that resets the target
    function resetTarget() {
        target = getRandomArbitrary(19, 120);
        document.getElementById('target').innerHTML = "Target: " + target;
    }

    //create a function that includes an if/then statement for equal to target, greater than target
    function checkIt() {
        if (target === runningTotal) {
            alert("You defeated Thanos!");
            wins = wins + 1;
            document.getElementById('win').innerHTML = "Wins: " + wins;
            runningTotal = 0;
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;
            target = getRandomArbitrary(19, 120);
            document.getElementById('target').innerHTML = "Target: " + target;
            resetStones();
        } else if (target < runningTotal) {
            alert ("Thanos defeated you! Snap!");
            losses = losses + 1;
            document.getElementById('loss').innerHTML = "Loss: " + losses;
            runningTotal = 0;
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;
            target = getRandomArbitrary(19, 120);
            document.getElementById('target').innerHTML = "Target: " + target;
            resetStones();
        }
    }

    //add target to the page
    resetTarget();

    //generate random values for each stone
        //create an array for a loop
                //var array1 = [redStone, orangeStone, yellowStone, greenStone, blueStone, purpleStone];

        //for loop that sets the value of each variable to a random number between 1 and 12
        //not working quite right
                // for (i = 0; i < array1.length; i++) {
                //     array1[i] = getRandomArbitrary(1, 13);
                //     console.log(array1[i] + "=" + i);
                // };

    resetStones();

    //on click event for each of the stones that adds to the runningTotal variable
        //this could probably be a loop for an array of stone variable names

        //on click of red stone add assigned value to running total, write to div
        $("#redStone").on("click", function(){
            // console.log("got here");
            runningTotal = runningTotal + redStone;
            console.log("runningTotal = " + runningTotal);

            //refresh running total div
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

            //if statement to compare target and runningtotal
                //if target = running total, add 1 to win and reset
                //if target < running total, add 1 to loss and reset
            checkIt();           
        });

        $("#orangeStone").on("click", function(){
            // console.log("got here");
            runningTotal = runningTotal + orangeStone;
            console.log("runningTotal = " + runningTotal);

            //refresh running total div
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

            //if statement
            checkIt();
        });

        $("#yellowStone").on("click", function(){
            // console.log("got here");
            runningTotal = runningTotal + yellowStone;
            console.log("runningTotal = " + runningTotal);

            //refresh running total div
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

            //if statement
            checkIt();
        });
    
        $("#greenStone").on("click", function(){
            // console.log("got here");
            runningTotal = runningTotal + greenStone;
            console.log("runningTotal = " + runningTotal);

            //refresh running total div
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

            //if statement
            checkIt();
        });

        $("#blueStone").on("click", function(){
            // console.log("got here");
            runningTotal = runningTotal + blueStone;
            console.log("runningTotal = " + runningTotal);

            //refresh running total div
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

            //if statement to compare target and runningtotal
            checkIt();
        });

        $("#purpleStone").on("click", function(){
            // console.log("got here");
            runningTotal = runningTotal + purpleStone;
            console.log("runningTotal = " + runningTotal);

            //refresh running total div
            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

            //if statement to compare target and runningtotal
            checkIt();
        });
})  




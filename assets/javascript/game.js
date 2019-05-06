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

            //declare variables for the GoT sigels
            var houseStark = 0;
            var houseTargaryen = 0;
            var houseLannister = 0;
            var houseMormont = 0;
            var houseGreyjoy = 0;
            var wildLing = 0;

    //set initial values for html paragraph tags
    document.getElementById('target').innerHTML = "Target: " + target;
    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

    // create a variable and set it equal to 0, on click change it to 1, toggle between 0 and 1 value for variable

    var toggle = 0;

    $(".btnToggle").on("click", function() {

        if (toggle === 0) {
            toggle = 1;
            console.log("Toggle value is " + toggle);
            //change the toggle button image and the background image
            document.getElementById('toggleAvenger').setAttribute('id', 'toggleGOT');
            document.getElementById('bg').setAttribute('id', 'bgNightKing');

                //change the stones to sigils
                document.getElementById('redStone').setAttribute('id', 'houseTargaryen');
                document.getElementById('orangeStone').setAttribute('id', 'houseLannister');
                document.getElementById('yellowStone').setAttribute('id', 'houseMormont');
                document.getElementById('greenStone').setAttribute('id', 'houseStark');
                document.getElementById('blueStone').setAttribute('id', 'houseGreyjoy');
                document.getElementById('purpleStone').setAttribute('id', 'wildLings');

                //change the paragraphs to sigil verbiage
                document.getElementById('changeMe1').innerHTML = "There are 6 House Sigils below. By clicking on a House Sigil you will add a specific amount of points to your total score.";
                document.getElementById('changeMe2').innerHTML = "The value of each House Sigil is only revealed after clicking.";
                document.getElementById('changeMe3').innerHTML = "Each time the game starts, values for each House Sigil will change";

                
                document.getElementById('target').innerHTML = "Target: " + target;

                //change text in the title
                //change text in the instructions div / paragraph divs
                $(document).ready(function() {
                    
                    //reset the target
                    resetTarget();
                    //create a function to generate a random number between a min and a max
                    function getRandomArbitrary(min, max) {
                        return Math.round(Math.random() * (max-min) + min);
                    }
                    //create a function to reset sigils after a loss or a win
                    function resetSigils () {
                    
                        houseTargaryen = getRandomArbitrary(1,12);
                            console.log("houseTargaryen = " + houseTargaryen);
                        
                        houseLannister = getRandomArbitrary(1,12);
                            console.log("houseLannister = " + houseLannister);

                        houseMormont = getRandomArbitrary(1,12);
                            console.log("houseTargaryen = " + houseMormont);

                        houseStark = getRandomArbitrary(1,12);
                            console.log("houseStark = " + houseStark);

                        houseGreyjoy = getRandomArbitrary(1,12);
                            console.log("houseGreyjoy = " + houseGreyjoy);

                        wildLing = getRandomArbitrary(1,12);
                            console.log("wildLing = " + wildLing);
                    
                    }

                    //create a function that resets the target after a loss or a win
                    function resetTarget() {
                        target = getRandomArbitrary(19, 120);
                        document.getElementById('target').innerHTML = "Target: " + target;
                    }

                    //create an if/then statement to compare the target value to the running total
                    function checkIt() {
                        if (target === runningTotal) {
                            alert("Catspaw to the abdomen! You defeated the Night King!");
                            wins = wins + 1;
                            document.getElementById('win').innerHTML = "Wins: " + wins;
                            runningTotal = 0;
                            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;
                            target = getRandomArbitrary(19, 120);
                            document.getElementById('target').innerHTML = "Target: " + target;
                            resetSigils();
                        } else if (target < runningTotal) {
                            alert ("The Night King has taken Winterfell. You lose!");
                            losses = losses + 1;
                            document.getElementById('loss').innerHTML = "Loss: " + losses;
                            runningTotal = 0;
                            document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;
                            target = getRandomArbitrary(19, 120);
                            document.getElementById('target').innerHTML = "Target: " + target;
                            resetSigils();
                        }
                    }
                    //on click events for each sigil

                        //on click of sigil add assigned value to running total, write to div
                                $("#houseTargaryen").on("click", function(){
                                    // console.log("got here");
                                    runningTotal = runningTotal + houseTargaryen;
                                    console.log("runningTotal = " + runningTotal);

                                    //refresh running total div
                                    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

                                    //if statement to compare target and runningtotal
                                    checkIt();           
                                });

                                $("#houseLannister").on("click", function(){
                                    // console.log("got here");
                                    runningTotal = runningTotal + houseLannister;
                                    console.log("runningTotal = " + runningTotal);

                                    //refresh running total div
                                    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

                                    //if statement
                                    checkIt();
                                });

                                $("#houseMormont").on("click", function(){
                                    // console.log("got here");
                                    runningTotal = runningTotal + houseMormont;
                                    console.log("runningTotal = " + runningTotal);

                                    //refresh running total div
                                    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

                                    //if statement
                                    checkIt();
                                });
                            
                                $("#houseStark").on("click", function(){
                                    // console.log("got here");
                                    runningTotal = runningTotal + houseStark;
                                    console.log("runningTotal = " + runningTotal);

                                    //refresh running total div
                                    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

                                    //if statement
                                    checkIt();
                                });

                                $("#houseGreyjoy").on("click", function(){
                                    // console.log("got here");
                                    runningTotal = runningTotal + houseGreyjoy;
                                    console.log("runningTotal = " + runningTotal);

                                    //refresh running total div
                                    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

                                    //if statement to compare target and runningtotal
                                    checkIt();
                                });

                                $("#wildLing").on("click", function(){
                                    // console.log("got here");
                                    runningTotal = runningTotal + wildLing;
                                    console.log("runningTotal = " + runningTotal);

                                    //refresh running total div
                                    document.getElementById('runningTotal').innerHTML = "Score: " + runningTotal;

                                    //if statement to compare target and runningtotal
                                    checkIt();
                                });
                            } 
                )} else{
            toggle = 0;
            console.log("Toggle value is " + toggle);
            //change the toggle button image and the background image
            document.getElementById('toggleGOT').setAttribute('id', 'toggleAvenger');
            document.getElementById('bgNightKing').setAttribute('id', 'bg');

                //change the sigils to stones
                document.getElementById('houseTargaryen').setAttribute('id', 'redStone');
                document.getElementById('houseLannister').setAttribute('id', 'orangeStone');
                document.getElementById('houseMormont').setAttribute('id', 'yellowStone');
                document.getElementById('houseStark').setAttribute('id', 'greenStone');
                document.getElementById('houseGreyjoy').setAttribute('id', 'blueStone');
                document.getElementById('wildLings').setAttribute('id', 'purpleStone');
        
                // change the paragraphs to stone verbiage
                    document.getElementById('changeMe1').innerHTML = "There are 6 Infinity Stones below. By clicking on an Infinity Stone you will add a specific amount of points to your total score.";
                    document.getElementById('changeMe2').innerHTML = "The value of each Infinity Stone is hidden from you until you click it.";
                    document.getElementById('changeMe3').innerHTML = "Each time the game starts, the values of each Infinity Stone will change.";

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
            
            }

    });


  




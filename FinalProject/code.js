function StartTheCountdown(){
    // This function will start the countdown

    // declare my varables
    var countdown = 10;  //This will be displayed on the screen for the user to see

    var timeout = 10000;  //actual time in milliseconds
 //                         1000 milliseconds equals 1 second
// Blast Off!!    
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = "Blast Off !!!";
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 0
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 1
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 2
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 3
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 4  
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 5    
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 6     
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 7
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 8
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 9
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;
// 10
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;
}

//Never know when these may come in useful.
function simCount() {
    var currentTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to 
after each loop) i++ same as  i = i+1*/
    for (var i = 1; i < 12; i++) {
            //Counts down from 10 to 0
        setTimeout(function () { 
              //Displays a sentence next to the counter
            document.getElementById("CountdownDisplay").innerHTML = "The time left is " + currentTime;
            currentTime = currentTime - 1;
        }, 1000 * i);
    }
}


function bestCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 12; i++) { //for loop to count down to include a zero.

        if (i == 12) {
            setTimeout(function () { //When timer reaches zero it displays "Blast..."
                document.getElementById("CountdownDisplay").innerHTML = 
"Blast Off!!!...Houston, we have Lift Off!!"; //Printed on screen when timer reaches 0
            }, 1000 * i);

        } else if (i > 6) {
            setTimeout(function () { //Displays the warning when timer is below 6
                document.getElementById("CountdownDisplay").innerHTML =
                    "WARNING!!! Less than half way to launch. Time left is  " + currTime;
                currTime = currTime - 1;                
            }, 1000 * i);
            
        } else {
            setTimeout(function () { //Displays "T - " while timer is above 6
                document.getElementById("CountdownDisplay").innerHTML = "T minus " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}


function simpleDo() {
    var currTime = 1;
    var i = 1;
    do {
        setTimeout(function () {
            document.getElementById("startButton").innerHTML = "Time in seconds" + currTime;
            currTime = currTime + 1;
        }, 1000 * i);
        i += 1;
    } while (i < 30);
}


function simpleCount() {
    var currTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to 
after each loop) i++ same as  i = i+1*/
    for (var i = 1; i < 12; i++) {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "The time left is" + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    }
}


function whileCount() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = 
"Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = 
                "Warning Less than half way to launch, time left = " + 
currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}

function lastCountdown(){
    var currentTime = 10;
    for (var i = 1; i <= 12; i++){
        if( i == 12){
            setTimeout(function(){
                document.getElementById("CountdownDisplay").innerHTML = "Blast Off !!!...Houston, we have Lift Off.";
            }, 1000 * i);
        } else if (i > 6){
            setTimeout(function(){
                document.getElementById("CountdownDisplay").innerHTML = "Warning!! Less than halfway to Launch.  T - " + currentTime;
                currentTime = currentTime - 1;
            }, 1000 * i);
        }else {
            setTimeout(function(){
                document.getElementById("CountdownDisplay").innerHTML = "T - " + currentTime
                currentTime = currentTime - 1;
            }, 1000 * 1);
        }
        
    }
}

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerHTML = "Reading Data...";
   simpleDo()
}

function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function chkCreds() {//I barely changed anything.  I changed the minumum number for the fullName.
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    if (fullName.length > 20 || fullName.length < 7) {
        document.getElementById("loginStatus").innerHTML = "Full name has an invalid number of characters!";
 
    } else if (badgeNum > 999 || badgeNum < 100) {//bade number will only take a three digit number.
        document.getElementById("loginStatus").innerHTML = "Badge ID is an invalid number!";
      
         //I couldn't figure out how to reset the loginStatus if the person got the error.
        //I don't know the correct phrase.  I've tried reset and refresh but neither are correct.
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("FinalProject/Home.html");
    }
}

//function playStation() {
//    mySound = new sound("us-lab-background.mp3");
//    mySound.play();
//}

//function playOddity() {
//    mySound = new sound("David_Bowie_Space_Oddity.mp3");
//    mySound.play();
//}

//function playChief() {
//    mySound = new sound("hail_to_the_chief.mp3");
//    mySound.play();
//}

//function sound(src) {
//    this.sound = document.createElement("audio");
//    this.sound.src = src;
//    this.sound.setAttribute("preload", "audio");
//    this.sound.setAttribute("controls","none");
//    this.sound.style.display = "none";
//    document.body.appendChild(this.sound);
//    this.play = function() {
//        this.sound.play();
//    }
//     this.stop = function() {
//        this.sound.pause();
//     }
//}

playBowie = function () {
    var audio = new Audio("David_Bowie_Space_Oddity.mp3");
    audio.loop = false;
    audio.play(); 
}

playHail = function () {
    var audio = new Audio("hail_to_the_chief.mp3");
    audio.loop = false;
    audio.play(); 
}
playLab = function () {
    var audio = new Audio("us-lab-background.mp3");
    audio.loop = false;
    audio.play(); 
}

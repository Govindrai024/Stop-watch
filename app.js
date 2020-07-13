//========Stop watch

var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

//create timer function
function timer(){
    msec++;
    msecHeading.innerHTML= msec;
    if(msec >= 99){
        sec++;
        secHeading.innerHTML =sec;
        msec =0;
    }else if(set >= 60){
        min ++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}

//start function
function start(event){
    interval = setInterval(timer,10);
   
}

function stopall(){
    var sum = document.getElementById("sum");
    var Stop = document.getElementById("StopText");
    var Userinput = document.getElementById("useInput");
    
    //getting input name from user
     var name = Userinput.value;
    
    //tatal time
    var total = '<b>'+ name +'</b>'+ ' : ' +  min +'.' + sec + '.'+ msec + ' '+'total';
    sum.innerHTML =  total;
    
    //call reset function
    Stop.innerHTML = 'Stop'; 
    Stop =reset();

    //after stop input field remain empty
    Userinput.value = ' ';
    
}
//stop function
function stop(){
    clearInterval(interval);
    
    var Userinput = document.getElementById("useInput");
    
    //getting input name from user
   
    Userinput.innerHTML = null;
       
}

//reset/pause function
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML =min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    // clearInterval();
    stop();
    var Userinput = document.getElementById("useInput");
    
    //getting input name from user
   
    Userinput.innerHTML = null;
}



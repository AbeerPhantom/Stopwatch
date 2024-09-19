var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;


var Hour = document.getElementById('hour');
var Minute = document.getElementById('min');
var Second = document.getElementById('sec');
var Mili = document.getElementById('msec');

var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');

var interval;

function Starttime(){
    msec++
    Mili.innerHTML=msec;
    if(msec>=100){
        sec++
        msec=0;
        Second.innerHTML=sec;
    }
    else if(sec>=60){
        min++
        sec = 0;
        Minute.innerHTML = min;
    }

    else if(min>=60){
        hour++
        min = 0;
        Hour.innerHTML = min;
    }
}



function Start(){
    interval = setInterval(Starttime,10)

    start.disabled= true;
    pause.disabled= false;
    reset.disabled= false;
}

function Pause(){
    clearInterval(interval)
    start.disabled= false;
    pause.disabled= true;
    reset.disabled= false;
}

function Reset(){
    hour=0;
    min=0;
    sec=0;
    msec=0;
    Hour.innerHTML = min;
    Minute.innerHTML = min;
    Second.innerHTML=sec;
    Mili.innerHTML=msec;
    Pause();
    start.disabled= false;
    pause.disabled= true;

}
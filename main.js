var second=document.querySelector('.second')
var minute=document.querySelector('.minute')
var hour=document.querySelector('.hour')
var Start=document.querySelector('.start-timer')
var Pause=document.querySelector('.pause-timer')
var Reset=document.querySelector('.reset-timer')
var new_second=0
var new_minute=0
var new_hour=0

Start.onclick=function(e){
    var x = setInterval(function(e){
        new_second++
        second.innerText=new_second
    if(new_second==60){
        new_minute++
        new_second=0
        minute.innerText=new_minute
    }
    if(new_minute==59){
        new_hour++
        new_minute=0
        hour.innerText=new_hour
    }
    if(new_hour==24){
        new_second=0
        new_second.innerText=second
        new_minute=0
        new_minute.innerText=minute
        new_hour=0
        new_hour.innerText=hour
    }
    },1000)

    Pause.onclick=function(){
        clearInterval(x)
    }

    Reset.onclick=function(){
        new_second=0
        second.innerText=new_second
        new_minute=0
        second.innerText=new_minute
        new_hour=0
        second.innerText=new_hour
    }
}
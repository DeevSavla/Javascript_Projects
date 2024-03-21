var buttons=document.querySelectorAll(".drum").length;
for(var i=0;i<buttons;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",
    function(){
        var symbol=this.innerHTML;
        makesound(symbol);
        buttonAnimation(symbol);
});
}
document.addEventListener("keydown",function(e){
    makesound(e.key);
    buttonAnimation(e.key);   //e.key helps in detecting which is key is pressed.
});
function makesound(symbol)
{
    switch(symbol)
        {
            case "w":var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":var kick_bass=new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break;
            case "s":var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "d":var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        }       
}
function buttonAnimation(currentKey)
{
    var active=document.querySelector("."+currentKey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}


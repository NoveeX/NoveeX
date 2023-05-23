poop = new Audio('fuckyou.wav');
poop.volume = 0.25
if (typeof poop.loop == 'boolean')
{
    poop.loop = true;
}
else
{
    poop.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
poop.play();

function toggleSound(){
    if(poop.volume == 0.25){
        document.getElementById("tglsnd").innerHTML = "🔇";
        poop.volume = 0.000001;
    }
    else if(poop.volume == 0.000001){
        document.getElementById("tglsnd").innerHTML = "🔉";
        poop.volume = 0.25;
    }
        

}

var i = 0;
var txt = 'Welcome to my website'; /* The text */
var txt2 = 'Subscribe to my youtube channel and join discord'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
var fuckyou = 1000;
var line1 = true;
writeln1();
function writeln1() {
    if (i < txt.length) {
        //onsole.log(i)
        if(i == 0){
            document.getElementById("typing").innerHTML = txt.charAt(0)
        }
        else{
            document.getElementById("typing").innerHTML += txt.charAt(i);
        }
        
        i++;
        setTimeout(writeln1, speed);
    }
    else{
        line1 = true;
        setTimeout(erase, fuckyou);
    }
}

function erase() {
    if (i > 0) {
        //console.log(i)
        document.getElementById("typing").innerHTML = document.getElementById("typing").innerHTML.slice(0, -1);
        i--;
        if(i == 0){
            document.getElementById("typing").innerHTML = "<br>"
        }
        setTimeout(erase, speed);
    }
    else{
        if(line1)
            setTimeout(writeln2, fuckyou);
        else
            setTimeout(writeln1, fuckyou);
    }
}

function writeln2() {
    if (i < txt2.length) {
        //console.log(i)
        if(i == 0){
            document.getElementById("typing").innerHTML = txt2.charAt(0)
        }
        else
            document.getElementById("typing").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(writeln2, speed);
    }
    else{
        line1 = false;
        setTimeout(erase, fuckyou);
    }
}
var count=0;

function play() {

    var x =document.getElementById("name_sound");
var b= document.getElementById("eat_sound");
var c = document.getElementById("crash_sound");
var d = document.getElementById("fall_sound");
    count= count+1;

    if (count == 1) {
        console.log("count 1 enabled")

        x.play();

    } else if (count  == 2 ) {
        console.log("count 2 enabled")
        b.play();
    }   else if (count  == 3 ) {
        console.log("count 3 enabled")
        
        c.play();

    }else if (count  == 4 ) {
        console.log("count 4 enabled")
        d.play();
    } else {
        count= 0;
        console.log("count reset enabled")
    }
}
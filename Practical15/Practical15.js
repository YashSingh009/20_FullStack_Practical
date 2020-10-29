var a=document.getElementById("dec");
var b=document.getElementById("inc");
var c=document.getElementById("result");
let score=0;
var over=false;

b.addEventListener("click",function() {
    over = false;
    if(!over){
        score++;
        c.textContent = score;
    }
});
a.addEventListener("click",function(){
    if(score == 0){
        over = true;

    }
    else {
        score--;
        if(!over){
            c.textContent = score;

        }
        over = false;
    }

});


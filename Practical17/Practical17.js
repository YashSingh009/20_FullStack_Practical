var time = document.getElementById("time");
var greeting = document.getElementById("greeting");
let grab = document.getElementById("hit")
var date = document.getElementById("date");
console.log(grab);


grab.addEventListener("keypress",setName);
grab.addEventListener("blur",setName);


function showtime(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let todaydate = today.toDateString();



    var ampm = hour>12 ? "PM":"AM";
    hour = hour%12 || 12;
    time.innerHTML = `${addzero(hour)}<span>:</span>${addzero(minutes)}<span>:</span>${addzero(seconds)} ${ampm}`;

    date.innerHTML = `${todaydate}`

    setTimeout(showtime,1000);
};

function addzero(n){
    return (parseInt(n,10)<10 ? "0":"")+ n;
};

function showgreeting(){
    let today = new Date(2020,03,11,19,11,11);
    let hour = today.getHours();
    if(hour<12){
        document.body.style.backgroundImage = 'url("pexels-roberto-shumski-1903702.jpg")';
        greeting.innerHTML = "Good Morning!";
    }
    else if(hour<18){
        document.body.style.backgroundImage = 'url("pexels-ray-bilcliff-2055389.jpg")';
        greeting.innerHTML = "Good Afternoon!";
    }
    else{
        document.body.style.backgroundImage = 'url("pexels-stein-egil-liland-1933239.jpg")';
        // document.body.style.color = "white";
        greeting.innerHTML = "Good Evening!";
    }
};

function getName(){
    if(localStorage.getItem("myData")===null ){
        grab.innerHTML = "[Enter Name]";
    }
    else{
        grab.innerHTML = localStorage.getItem("myData");
    }
}


function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode === 13){
            localStorage.setItem("myData",e.target.innerHTML);
            grab.blur();
        }
    }
    else {
        localStorage.setItem("myData",e.target.innerHTML);
    }
}


getName();
showtime();
showgreeting();
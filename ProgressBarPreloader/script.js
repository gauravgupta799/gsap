const percent = document.getElementById("percent");
const bar = document.getElementById("barconfirm");


const till = gsap.timeline({
    paused:"true"
});

till.to("#percent, #bar",{
    duration:0.2,
    opacity:0,
    zIndex:-1,
});

till.to("#preloader", {
    duration:0.8,
    width:"0%",
});

till.from("body", {
    duration:1.5,
    y:"-150%",
} , "-=.2");

let width = 1;
let id;
function move(){
    id = setInterval(frame, 10);
}

function frame(){
    if(width>= 100){
        clearInterval(id);
        till.play();
    }else{
        width++;
        bar.style.width = width + "%";
        percent.innerHTML = width + "%";
    }
}
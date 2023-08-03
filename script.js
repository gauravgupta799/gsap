const timeline = gsap.timeline();
timeline.to(".animate",{
    delay:3,
    duration:0.5,
    opacity:0,
})

timeline.to(".animation",{
    delay:1,
    duration:1,
    x:"100%",
    ease:"power4.out"
});

timeline.to(".animation",{
    zIndex:-1
})

timeline.from(".container h1", {
    delay:0.5,
    duration:0.8,
    skewY:10,
    y:100,
    x:-199,
    opacity:0,
})
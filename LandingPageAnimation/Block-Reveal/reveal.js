
console.log("js")
window.addEventListener("load", ()=>{
    
    gsap.registerPlugin(CSSRulePlugin);
    
    const tl = gsap.timeline();

    tl.from(".navbar", {
        opacity:0,
        delay:0,
        duration:1,
        stagger:0.5,
        y:-20,
        ease:Expo.easeInOut
    })
    
    tl.to(".strps ", {
        delay:0,
        height:"100%",
        stagger:0.5,
        ease:Power2.easeInOut
    })

    tl.fromTo(".img img", 
        {   opacity:0,
            x:-10,
        },
        { 
            opacity:1, 
            x:0, 
            delay:0,
            duaration:2,
            ease:Power4.easeInOut
        }
    )

    tl.from(".title",{
        opacity:0, delay:0,
        x:-50,
        duration:1,
        ease:Power4.easeInOut
    })

    tl.from(".sub-title", {
        opacity:0,
        delay:0,
        duration:1,
        y:-100,
        ease:Power4.easeInOut
    })
    tl.from(".number", {
        opacity:0,
        delay:0,
        y:10,
        duaration:1,
        ease:Expo.easeInOut
    })
    tl.from(".button", {
        opacity:0,
        delay:0,
        y:10,
        duaration:1,
        ease:Expo.easeInOut
    })
    tl.from(".media ul li, .scroll-down", {
        opacity:0,
        delay:0,
        y:30,
        duration:1,
        ease:Expo.easeInOut
    })
})
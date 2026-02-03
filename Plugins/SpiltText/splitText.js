"use strict"

gsap.registerPlugin(SplitText);

// Defulat Split by words & lines

document.fonts.ready.then(()=>{
    // const segmenter = new Intl.Segmenter("zh", {granularity:"word"});

    let splitText = SplitText.create(".text", {
        type:"words, lines",
        mask:"lines", // for Reveal Effect
        // charClass:"char",
        // wordClass:"word",
        lineClass:"line",
        // linesClass:"line++",
        // smartWrap:true, // wrap the chars or words smartly according to the screensizes
        autoSplit:true, // reflow the new lines
        ignore:"sup",
        onSplit:(self)=>{
            return gsap.from(self.words,{
                opacity:0,
                autoAlpha:0,
                duration:0.8,
                ease:"power3",
                y:20,
                // yPercent:"random([-100, 100])",
                // rotation:"random(-20, 20)",
                // repeat:-1,
                // yoyo:true,
                // stagger:0.25, 
                stagger:{
                    each:0.05,
                    // amount:0.5,
                    // from:"random",  // "end" "center" , "random"
                    // repeat:-1,
                    // yoyo:true,
                },
                onComplete:()=>{
                    self.revert();
                },
            });
        },
        // prepareText:(text, el)=>{
        //     return [...segmenter.segment(text)].map((s)=> s.segment).join(segmenter)
        // },
        // wordDelimiter:{delimeter:/\u200c/, replaceWith:" "},
    });
});
/* 

====== SplitText =======
let split = SplitText.create(".split", {
type:"words, lines"})
gsap.from(split.lines, {
    y:100,
    duration:1,
    autoAlpha: // fade in from opacity:0 and visibility:hidden
    stagger:0.05
})

or onSplit() syntax

SplitText.create(".split", {
    type:"lines, words",
    mask:"lines",
    autoSplit:true,
    onSplit(self){
        return gsap.from(self.words,{
            autoAlpha:0,
            y:100,
            duration:1,
            stagger:0.05
        })
    }
})
*/
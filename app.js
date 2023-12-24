const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro',
        start: 'top top',
        end: 'bottom+=500px bottom-=210px',
        scrub: true,
        markers: false,
        pin: true,
    }
})

let tllogo= gsap.timeline({
    scrollTrigger:{
        trigger:".topleftlogo",
        start:"top center",
        end:"bottom+=100px center",
        markers:false,
        scrub:true,
        repeat:0
    }
});
tllogo.to(".logocover",{y:"100%",duration:1})

let tllogo2= gsap.timeline({
    scrollTrigger:{
        trigger:".topleftlogo2",
        start:"top center",
        end:"bottom center",
        markers:false,
        scrub:true,
        repeat:0
    }
});
tllogo2.to(".topleftlogo2",{opacity:1,duration:1})
// tllogo2.to(".logocover2",{width:"0",duration:1})
// .call(logoindex,null)
// function logoindex(){
//     let i = document.getElementsByClassName(".logocover2");
//     i.style.zIndex = -4;
// }
let tllogo3= gsap.timeline({
    scrollTrigger:{
        trigger:".topleftlogo3",
        start:"top center",
        end:"bottom center",
        markers:false,
        scrub:true,
        repeat:0
    }
});
tllogo3.to(".topleftlogo3",{opacity:1,duration:1})


// tl.to(".directors-start", { y: "-670px", duration: 1 })
//     .to(".directors-content", { y: "-670px", duration: 1 }, "-=1")

document.getElementById("backbutton").onclick = function () { back() };
function back() {
    let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
    tlback.to(".directors-info-wrap", { y: "755px", duration: 1 })
    tlback.to(".directors-info-wrap", { display: "none", duration: 0.1 }, "-=0.5")
}

document.getElementById("backbutton2").onclick = function () { back2() };
function back2() {
    console.log("backing");
    let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
    tlback.to(".directors-info-wrap2", { y: "755px", duration: 1 })
    tlback.to(".directors-info-wrap2", { display: "none", duration: 0.1 }, "-=0.5")
}

document.getElementById("backbutton3").onclick = function () { back3() };
function back3() {
    console.log("backing");
    let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
    tlback.to(".directors-info-wrap3", { y: "755px", duration: 1 })
    tlback.to(".directors-info-wrap3", { display: "none", duration: 0.1 }, "-=0.5")
}

// document.getElementById("backbutton4").onclick = function () { back4() };
// function back4() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap4", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap4", { display: "none", duration: 0.1 }, "-=0.5")
// }
// document.getElementById("backbutton5").onclick = function () { back5() };
// function back5() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap5", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap5", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton6").onclick = function () { back6() };
// function back6() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap6", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap6", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton7").onclick = function () { back7() };
// function back7() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap7", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap7", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton8").onclick = function () { back8() };
// function back8() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap8", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap8", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton9").onclick = function () { back9() };
// function back9() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap9", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap9", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton10").onclick = function () { back10() };
// function back10() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap10", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap10", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton11").onclick = function () { back11() };
// function back11() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap11", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap11", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton12").onclick = function () { back12() };
// function back12() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap12", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap12", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton13").onclick = function () { back13() };
// function back13() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap13", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap13", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton14").onclick = function () { back14() };
// function back14() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap14", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap14", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton15").onclick = function () { back15() };
// function back15() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap15", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap15", { display: "none", duration: 0.1 }, "-=0.5")
// }

// document.getElementById("backbutton16").onclick = function () { back16() };
// function back16() {
//     console.log("backing");
//     let tlback = gsap.timeline({ defaults: { ease: "power1.out" } });
//     tlback.to(".directors-info-wrap16", { y: "755px", duration: 1 })
//     tlback.to(".directors-info-wrap16", { display: "none", duration: 0.1 }, "-=0.5")
// }

document.getElementById("name1").onmouseover = function () { mouseOver1() };
document.getElementById("name1").onmouseout = function () { mouseOut1() };
document.getElementById("name1").onclick = function () { click1() };

function mouseOver1() {
    document.getElementById("video1").style.opacity = 1;
    document.getElementById("video1").play();
}

function mouseOut1() {
    document.getElementById("video1").style.opacity = 0;
    document.getElementById("video1").pause();
}

function click1() {
    document.getElementById("directors-info-wrap").style.display = "block";
    let tldir1 = gsap.timeline({ defaults: { ease: "power1.out" } });
    tldir1.to(".directors-info-wrap", { y: "-755px", duration: 1 })
}


document.getElementById("name2").onmouseover = function () { mouseOver2() };
document.getElementById("name2").onmouseout = function () { mouseOut2() };
document.getElementById("name2").onclick = function () { click2() };

function mouseOver2() {
    document.getElementById("video2").style.opacity = 1;
    document.getElementById("video2").play();
}

function mouseOut2() {
    document.getElementById("video2").style.opacity = 0;
    document.getElementById("video2").pause();
}

function click2() {
    document.getElementById("directors-info-wrap2").style.display = "block";
    let tldir1 = gsap.timeline({ defaults: { ease: "power1.out" } });
    tldir1.to(".directors-info-wrap2", { y: "-755px", duration: 1 })
}


document.getElementById("name3").onmouseover = function () { mouseOver3() };
document.getElementById("name3").onmouseout = function () { mouseOut3() };

function mouseOver3() {
    document.getElementById("video3").style.opacity = 1;
    document.getElementById("video3").play();
}

function mouseOut3() {
    document.getElementById("video3").style.opacity = 0;
    document.getElementById("video3").pause();
}

document.getElementById("name4").onmouseover = function () { mouseOver4() };
document.getElementById("name4").onmouseout = function () { mouseOut4() };

function mouseOver4() {
    document.getElementById("video4").style.opacity = 1;
    document.getElementById("video4").play();
}

function mouseOut4() {
    document.getElementById("video4").style.opacity = 0;
    document.getElementById("video4").pause();
}


document.getElementById("name5").onmouseover = function () { mouseOver5() };
document.getElementById("name5").onmouseout = function () { mouseOut5() };

function mouseOver5() {
    document.getElementById("video5").style.opacity = 1;
    document.getElementById("video5").play();
}

function mouseOut5() {
    document.getElementById("video5").style.opacity = 0;
    document.getElementById("video5").pause();
}

document.getElementById("name6").onmouseover = function () { mouseOver6() };
document.getElementById("name6").onmouseout = function () { mouseOut6() };

function mouseOver6() {
    document.getElementById("video6").style.opacity = 1;
    document.getElementById("video6").play();
}

function mouseOut6() {
    document.getElementById("video6").style.opacity = 0;
    document.getElementById("video6").pause();
}

document.getElementById("name7").onmouseover = function () { mouseOver7() };
document.getElementById("name7").onmouseout = function () { mouseOut7() };

function mouseOver7() {
    document.getElementById("video7").style.opacity = 1;
    document.getElementById("video7").play();
}

function mouseOut7() {
    document.getElementById("video7").style.opacity = 0;
    document.getElementById("video7").pause();
}

document.getElementById("name8").onmouseover = function () { mouseOver8() };
document.getElementById("name8").onmouseout = function () { mouseOut8() };

function mouseOver8() {
    document.getElementById("video8").style.opacity = 1;
    document.getElementById("video8").play();
}

function mouseOut8() {
    document.getElementById("video8").style.opacity = 0;
    document.getElementById("video8").pause();
}


document.getElementById("name9").onmouseover = function () { mouseOver9() };
document.getElementById("name9").onmouseout = function () { mouseOut9() };

function mouseOver9() {
    document.getElementById("video9").style.opacity = 1;
    document.getElementById("video9").play();
}

function mouseOut9() {
    document.getElementById("video9").style.opacity = 0;
    document.getElementById("video9").pause();
}

document.getElementById("name10").onmouseover = function () { mouseOver10() };
document.getElementById("name10").onmouseout = function () { mouseOut10() };

function mouseOver10() {
    document.getElementById("video10").style.opacity = 1;
    document.getElementById("video10").play();
}

function mouseOut10() {
    document.getElementById("video10").style.opacity = 0;
    document.getElementById("video10").pause();
}

document.getElementById("name11").onmouseover = function () { mouseOver11() };
document.getElementById("name11").onmouseout = function () { mouseOut11() };

function mouseOver11() {
    document.getElementById("video11").style.opacity = 1;
    document.getElementById("video11").play();
}

function mouseOut11() {
    document.getElementById("video11").style.opacity = 0;
    document.getElementById("video11").pause();
}

document.getElementById("name12").onmouseover = function () { mouseOver12() };
document.getElementById("name12").onmouseout = function () { mouseOut12() };

function mouseOver12() {
    document.getElementById("video12").style.opacity = 1;
    document.getElementById("video12").play();
}

function mouseOut12() {
    document.getElementById("video12").style.opacity = 0;
    document.getElementById("video12").pause();
}


document.getElementById("name13").onmouseover = function () { mouseOver13() };
document.getElementById("name13").onmouseout = function () { mouseOut13() };

function mouseOver13() {
    document.getElementById("video13").style.opacity = 1;
    document.getElementById("video13").play();
}

function mouseOut13() {
    document.getElementById("video13").style.opacity = 0;
    document.getElementById("video13").pause();
}

document.getElementById("name14").onmouseover = function () { mouseOver14() };
document.getElementById("name14").onmouseout = function () { mouseOut14() };

function mouseOver14() {
    document.getElementById("video14").style.opacity = 1;
    document.getElementById("video14").play();
}

function mouseOut14() {
    document.getElementById("video14").style.opacity = 0;
    document.getElementById("video14").pause();
}

document.getElementById("name15").onmouseover = function () { mouseOver15() };
document.getElementById("name15").onmouseout = function () { mouseOut15() };

function mouseOver15() {
    document.getElementById("video15").style.opacity = 1;
    document.getElementById("video15").play();
}

function mouseOut15() {
    document.getElementById("video15").style.opacity = 0;
    document.getElementById("video15").pause();
}

document.getElementById("name16").onmouseover = function () { mouseOver16() };
document.getElementById("name16").onmouseout = function () { mouseOut16() };

function mouseOver16() {
    document.getElementById("video16").style.opacity = 1;
    document.getElementById("video16").play();
}

function mouseOut16() {
    document.getElementById("video16").style.opacity = 0;
    document.getElementById("video16").pause();
}

function playVid(el) {
    let vid = document.getElementById(el);
    vid.play();
}

function pauseVid(ele) {
    let vid = document.getElementById(ele);
    vid.pause();
}

//Portfolio
let tlport1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.mainvid1-wrap',
        start: 'top 50%',
        end: 'bottom-=100px bottom-=500px',
        scrub: true,
        markers: false,
    }
})

tlport1.to(".mainvid1", { scale: 1.03 })
tlport1.to(".mainvid1", { scale: 1 })

let tlport2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.mainvid2-wrap',
        start: 'top 50%',
        end: 'bottom-=200px bottom-=500px',
        scrub: true,
        markers: false,
    }
})

tlport2.to(".mainvid2", { scale: 1.03, duration: 3 })
tlport2.to(".mainvid2", { scale: 1, duration: 3 })

//1st director works

//Commercials
document.getElementById("portcomvid1-1").onmouseover = function () { mouseOverCom1of1() };
document.getElementById("portcomvid1-1").onmouseout = function () { mouseOutCom1of1() };

function mouseOverCom1of1() {
    document.getElementById("portcomvid1-1").play();
}

function mouseOutCom1of1() {
    document.getElementById("portcomvid1-1").pause();
}

document.getElementById("portcomvid1-2").onmouseover = function () { mouseOverCom2of1() };
document.getElementById("portcomvid1-2").onmouseout = function () { mouseOutCom2of1() };

function mouseOverCom2of1() {
    document.getElementById("portcomvid1-2").play();
}

function mouseOutCom2of1() {
    document.getElementById("portcomvid1-2").pause();
}

document.getElementById("portcomvid1-3").onmouseover = function () { mouseOverCom3of1() };
document.getElementById("portcomvid1-3").onmouseout = function () { mouseOutCom3of1() };

function mouseOverCom3of1() {
    document.getElementById("portcomvid1-3").play();
}

function mouseOutCom3of1() {
    document.getElementById("portcomvid1-3").pause();
}

document.getElementById("portcomvid1-4").onmouseover = function () { mouseOverCom4of1() };
document.getElementById("portcomvid1-4").onmouseout = function () { mouseOutCom4of1() };

function mouseOverCom4of1() {
    document.getElementById("portcomvid1-4").play();
}

function mouseOutCom4of1() {
    document.getElementById("portcomvid1-4").pause();
}

document.getElementById("portcomvid1-5").onmouseover = function () { mouseOverCom5of1() };
document.getElementById("portcomvid1-5").onmouseout = function () { mouseOutCom5of1() };

function mouseOverCom5of1() {
    document.getElementById("portcomvid1-5").play();
}

function mouseOutCom5of1() {
    document.getElementById("portcomvid1-5").pause();
}

document.getElementById("portcomvid1-6").onmouseover = function () { mouseOverCom6of1() };
document.getElementById("portcomvid1-6").onmouseout = function () { mouseOutCom6of1() };

function mouseOverCom6of1() {
    document.getElementById("portcomvid1-6").play();
}

function mouseOutCom6of1() {
    document.getElementById("portcomvid1-6").pause();
}

document.getElementById("portcomvid1-7").onmouseover = function () { mouseOverCom7of1() };
document.getElementById("portcomvid1-7").onmouseout = function () { mouseOutCom7of1() };

function mouseOverCom7of1() {
    document.getElementById("portcomvid1-7").play();
}

function mouseOutCom7of1() {
    document.getElementById("portcomvid1-7").pause();
}

document.getElementById("portcomvid1-8").onmouseover = function () { mouseOverCom8of1() };
document.getElementById("portcomvid1-8").onmouseout = function () { mouseOutCom8of1() };

function mouseOverCom8of1() {
    document.getElementById("portcomvid1-8").play();
}

function mouseOutCom8of1() {
    document.getElementById("portcomvid1-8").pause();
}

//Shorts
document.getElementById("portshortvid1-1").onmouseover = function () { mouseOverShort1of1() };
document.getElementById("portshortvid1-1").onmouseout = function () { mouseOutShort1of1() };

function mouseOverShort1of1() {
    document.getElementById("portshortvid1-1").play();
}

function mouseOutShort1of1() {
    document.getElementById("portshortvid1-1").pause();
}

document.getElementById("portshortvid1-2").onmouseover = function () { mouseOverShort2of1() };
document.getElementById("portshortvid1-2").onmouseout = function () { mouseOutShort2of1() };

function mouseOverShort2of1() {
    document.getElementById("portshortvid1-2").play();
}

function mouseOutShort2of1() {
    document.getElementById("portshortvid1-2").pause();
}

document.getElementById("portshortvid1-3").onmouseover = function () { mouseOverShort3of1() };
document.getElementById("portshortvid1-3").onmouseout = function () { mouseOutShort3of1() };

function mouseOverShort3of1() {
    document.getElementById("portshortvid1-3").play();
}

function mouseOutShort3of1() {
    document.getElementById("portshortvid1-3").pause();
}

document.getElementById("portshortvid1-4").onmouseover = function () { mouseOverShort4of1() };
document.getElementById("portshortvid1-4").onmouseout = function () { mouseOutShort4of1() };

function mouseOverShort4of1() {
    document.getElementById("portshortvid1-4").play();
}

function mouseOutShort4of1() {
    document.getElementById("portshortvid1-4").pause();
}

//Promos
document.getElementById("portpromvid1-1").onmouseover = function () { mouseOverprom1of1() };
document.getElementById("portpromvid1-1").onmouseout = function () { mouseOutprom1of1() };

function mouseOverprom1of1() {
    document.getElementById("portpromvid1-1").play();
}

function mouseOutprom1of1() {
    document.getElementById("portpromvid1-1").pause();
}

document.getElementById("portpromvid1-2").onmouseover = function () { mouseOverprom2of1() };
document.getElementById("portpromvid1-2").onmouseout = function () { mouseOutprom2of1() };

function mouseOverprom2of1() {
    document.getElementById("portpromvid1-2").play();
}

function mouseOutprom2of1() {
    document.getElementById("portpromvid1-2").pause();
}

document.getElementById("portpromvid1-3").onmouseover = function () { mouseOverprom3of1() };
document.getElementById("portpromvid1-3").onmouseout = function () { mouseOutprom3of1() };

function mouseOverprom3of1() {
    document.getElementById("portpromvid1-3").play();
}

function mouseOutprom3of1() {
    document.getElementById("portpromvid1-3").pause();
}

document.getElementById("portpromvid1-4").onmouseover = function () { mouseOverprom4of1() };
document.getElementById("portpromvid1-4").onmouseout = function () { mouseOutprom4of1() };

function mouseOverprom4of1() {
    document.getElementById("portpromvid1-4").play();
}

function mouseOutprom4of1() {
    document.getElementById("portpromvid1-4").pause();
}



//OurWorks
document.getElementById("subvid1").onmouseover = function () { mouseOverSub1() };
document.getElementById("subvid1").onmouseout = function () { mouseOutSub1() };

function mouseOverSub1() {
    document.getElementById("subvid1").play();
}

function mouseOutSub1() {
    document.getElementById("subvid1").pause();
}

document.getElementById("subvid2").onmouseover = function () { mouseOverSub2() };
document.getElementById("subvid2").onmouseout = function () { mouseOutSub2() };

function mouseOverSub2() {
    document.getElementById("subvid2").play();
}

function mouseOutSub2() {
    document.getElementById("subvid2").pause();
}

document.getElementById("subvid3").onmouseover = function () { mouseOverSub3() };
document.getElementById("subvid3").onmouseout = function () { mouseOutSub3() };

function mouseOverSub3() {
    document.getElementById("subvid3").play();
}

function mouseOutSub3() {
    document.getElementById("subvid3").pause();
}

document.getElementById("subvid4").onmouseover = function () { mouseOverSub4() };
document.getElementById("subvid4").onmouseout = function () { mouseOutSub4() };

function mouseOverSub4() {
    document.getElementById("subvid4").play();
}

function mouseOutSub4() {
    document.getElementById("subvid4").pause();
}


let tlabout = gsap.timeline({ defaults: { ease: "power1.out" } });
tlabout.to(".about-text p", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
        trigger: ".about-text p",
        scrub: true,
        start: "top center",
        end: "bottom+=700px top",
        markers: false,
    }
})


let tlaboutvid = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-video",
        scrub: true,
        start: "center center",
        end: "bottom+=700x center",
        markers: false,
        pin: true,
    }
});

let tlPlayAboutVid = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-video",
        start: "top center",
        end: "bottom+=700x center",
        markers: false,
    },
});
tlPlayAboutVid.call(playVid, ["about-video"])

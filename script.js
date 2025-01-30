var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start:"0% 95%",
    end:"70% 80%",
    scrub: true,
    markers: true, 
}})

tl.to("#fanta",{
top: "103%",
left: "10%"
}, 'orange')
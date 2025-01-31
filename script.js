
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start:"0% 95%",
    end:"70% 70%",
    scrub: true,
    //markers: true, 
}})

tl.to("#fanta",{
top: "103%",
left: "10%"
}, 'orange')

tl.to("#orange-cut",{
top: "155%",
left: "22%",
scale:1
}, 'orange')

tl.to("#orange",{
    width: "15%",
    top:"165%",
    right: "6%"
}, 'orange')

tl.to("#leaf",{
    top:"105%",
    rotate: "130deg",
    left: "77%"
}, 'orange')

tl.to("#leaf2",{
    top:"104.2%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "70% 80%",
    scrub: true,
    markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#sprite",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"19%",
    left: "41%",
    top: "206%",
}, 'ca')

tl2.to("#fanta",{
    width:"13.5%",
    top: "214%",
    left: "43.5%",
}, 'ca')

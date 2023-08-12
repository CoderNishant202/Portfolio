
gsap.from("ul li", {
  scale: 0,
  opacity: 0,
  duration:1.3,
  delay:1,
  y: 50,
});
gsap.from('.logo img',{
    // transition:0.7,
    duration:1,
   opacity:0,
    y:-60
})
var tl = gsap.timeline();
tl.from('.text h2',{
    opacity:0,
    y:20,
    duration:1,
delay:1,
})
tl.from('.text h3',{
    opacity:0,
    y:20,
    duration:1,
delay:1,
})

tl.from('.text h4',{
    opacity:0,
    y:20,
    duration:1,
    delay:1,
})
gsap.from('.image img',{
    opacity:0,
    duration:1,
    y:50
})

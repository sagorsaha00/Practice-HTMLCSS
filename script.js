const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from('.nlink',{
    stagger:.1,
    y:10,
    duration:2,
    ease:Power2,
    opacity:0,

})
Shery.textAnimate("#headings h2" , {
 
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  gsap.from('.anim2',{
    y:50,
    stagger:.3,
    opacity:0,
    ease:Expo,
    duration:1,
  }) 

  Shery.imageEffect('#imgntext img', {
    style:3,
    debug:true
  })
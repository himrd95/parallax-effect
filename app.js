let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  
  .to(".bg", 10, { y: -300 })
  .to(".girl", 10, { x: -200 }, "-=10")
  .fromTo(".bike", { y: -200 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".nav", { opacity: 1 }, { opacity: 0, duration: 5 })
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 5 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 5 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
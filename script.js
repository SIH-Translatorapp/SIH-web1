Shery.mouseFollower();
Shery.makeMagnet('.magnet');
function headingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:1,
        duration:0.5,    
        stagger:0.3
  })}
function bttnAnimation(){
    gsap.from(".btn a",{
        y:200,
        opacity:0,
        delay:1.5,
        duration:0.5,  
        // stagger:0.3
})}
function navAnimation(){
    gsap.from('.navbar',{
        y:'-100%',
        opacity:0,
        delay:1,
        duration:0.3
    })
}
function cardAnimation(){
    gsap.from('.card',{
        scale:0,
        ease:"elastic.out(0.6,0.5)",
        opacity:0,
        delay:2,
        duration:1.3,
        stagger:0.1
    })
}
cardAnimation();
navAnimation();
bttnAnimation();
headingAnimation();
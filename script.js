Shery.mouseFollower();
Shery.makeMagnet('.magnet');

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
    gsap.from('.team__member-image',{
        scale:0,
        ease:"elastic.out(0.6,0.5)",
        opacity:0,
        delay:1.5,
        duration:1.3,
        stagger:0.1
    })
    gsap.from('.team__member-info',{
        scale:0,
        ease:"elastic.out(0.6,0.5)",
        opacity:0,
        delay:1.5,
        duration:1.3,
        stagger:0.1
    })
}
function h1Animation(){
    gsap.from("#page1 h1",{
        y:0,
        opacity:1,
        delay:1,
        duration:0.5,    
        stagger:0.3
    })}
cardAnimation();
navAnimation();
bttnAnimation();
h1Animation();
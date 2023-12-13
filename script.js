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
    gsap.from('.hide',{
        y:-100,
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
const sliderItem = document.querySelector('.text-child');
const fileslide = document.querySelector('.file')
const textslide = document.querySelector('.text')

// Add a click event listener to move the slider
textslide.addEventListener('click', () => {
    // Move the slider to a new position (you can adjust the left value)
    sliderItem.style.left = '-50px'; // Set to the desired left position
});
fileslide.addEventListener('click', () => {
    sliderItem.style.left = '210px';
    sliderItem.style.color = "red";
    console.log(sliderItem)
})
cardAnimation();
navAnimation();
bttnAnimation();
h1Animation();
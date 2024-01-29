// Audio playing function
//Path: Source of Audio
const play_sound = (path) =>{
    let audio = new Audio(path);
    audio.loop = true;
    audio.play();
}

// Animation Gsap
const t1  = gsap.timeline({repeat:Infinity});
t1.to('.baloons img',{
    y:-1000,
    delay:1,
    duration:2,
    stagger: 0.5,
})
t1.pause()
const btn = document.querySelector("#btn-1");
btn.addEventListener('click',() =>{
    // play_sound('./Audio/audio.mp3');
    t1.play()
});














// Photo swipe function 
// const image_data = ['1','2','3']; 
// let image = document.getElementById('image');
// const image_slidder = (image,image_data) =>{
//     let image = image;
//     let image_data = image_data;
//     let index = 0;
//     alert("photo");
//     setTimeout((image,image_data,index) =>{
//         image.src = image_data[index];
//     },1000);
//     index > 2 ? index = 0 : index += 1;
// }
// image_slidder(image,image_data);





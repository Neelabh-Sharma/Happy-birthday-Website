// Audio playing function
//Path: Source of Audio
const play_sound = (path) => {
  let audio = new Audio(path);
  audio.loop = true;
  audio.play();
};

// Animation Gsap
const t1 = gsap.timeline({ repeat: Infinity });
t1.to(".baloons img", {
  y: -1000,
  delay: 1,
  duration: 2,
  stagger: 0.5,
});
t1.pause();
const btn = document.querySelector("#btn-1");
const button = document.createElement('button');
button.innerText = 'Cut Me!';
button.className = 'btn';
btn.addEventListener("click", () => {
  play_sound('./Audio/audio.mp3');
  t1.play();
  const element = document.querySelector(".box");
  element.innerHTML = `
    <div class="text-container text">
            let cut the cake!
    </div>
    <div class="image-Frame">
        <div class="image-box">
            <img 
                src="https://media.giphy.com/media/MCeIiRETfwBK2rtGRi/giphy.gif" 
                alt="person-image" 
                class="image-property" 
                id="image"
            />
        </div>
    </div>
    `;
    element.appendChild(button);
});
button.addEventListener("click", () => {
    // play_sound('./Audio/audio.mp3');
    t1.pause();
    const element = document.querySelector(".box");
    element.innerHTML = `
      <div class="image-Frame" style="margin-top:15px;">
          <div class="image-box">
              <img 
                  src="./img//image.jpeg" 
                  alt="person-image" 
                  class="image-property" 
                  id="image"
              />
          </div>
      </div>
      <div class="text-container text" style=" font-size: 14px">
      Happy Birthday, Afsha! 🎉 Thank you for always laughing at my bad jokes. I don't need auto-spell correct because I have you! 😄 Thank you for being such a great friend. Best wishes to you on your special day. Happy birthday once again! 🎂🎈  
      </div>
      `;
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

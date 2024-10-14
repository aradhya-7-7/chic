let hasSwapped = false;
function swapImage() {

  if (hasSwapped) return; // If the function has already run, exit

  hasSwapped = true;

   const image = document.getElementById("image");
   image.style.opacity = "0";
   const button = document.getElementById('startConfetti');

   button.classList.toggle('transparent');
 
   // After the fade-out transition completes (0.5s in this case), change the source and fade back in
   setTimeout(() => {
     image.src = "path-to-image2.png";
     image.style.opacity = "12"; // Smooth transition for fade in
   }, 500); // Matches the duration of the opacity transition

   var audio = new Audio('song.mp3');
   audio.play();

 }
 
 let hasSwapped2 = false;
 document.getElementById('startConfetti').addEventListener('click', function() {

  if (hasSwapped2) return; // If the function has already run, exit

  hasSwapped2 = true;

      var duration = 5 * 100000; // 5 seconds
      var end = Date.now() + duration;

      (function frame() {
        // Basic waterfall confetti effect
        confetti({
          particleCount: 10,
          angle: 90,
          spread: 1000,
          origin: { x: Math.random(), y: 0 } // Falling from the top
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    });

// Array of image URLs (you can replace these with any image links)
const images = [
  's1.jpg',
  's2.jpg',
  's3.png',
  's4.png',
];

// Select the image grid container
const imageGrid = document.getElementById('imageGrid');

// Create image elements dynamically
images.forEach(imageUrl => {
  const div = document.createElement('div');
  div.classList.add('image-container');
  const img = document.createElement('img');
  img.src = imageUrl;
  div.appendChild(img);
  imageGrid.appendChild(div);
});

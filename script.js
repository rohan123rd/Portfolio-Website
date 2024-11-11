function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openModal() {
  var modal = document.getElementById("videoModal");
  modal.style.display = "block";

  loadVideo();

  var video = document.getElementById("myVideo");
  video.load();
  video.play();
}

function closeModal() {
  var modal = document.getElementById("videoModal");
  modal.style.display = "none";
}

var videoModalClose = document.getElementById("videoModalClose");
videoModalClose.addEventListener('click', closeModal);

var video = document.getElementById("myVideo");
video.addEventListener('ended', function() {
  video.pause();
  var modal = document.getElementById("videoModal");
  modal.style.display = "none";
});

function loadVideo() {
  var video = document.getElementById("myVideo");
  var source = video.querySelector("source");

  if (window.innerWidth <= 768) {
    source.src = "./assets/denish-bhai.mp4";
    video.width = 320;
    video.height = 560;
  } else {
    source.src = "./assets/rick-roll.mp4";
    video.width = 720;
    video.height = 480;
  }
}



// LOADER

window.addEventListener('load', function() {
document.getElementById('loader').style.display = 'none';
document.getElementById('content').style.display = 'block';
})


// CLOCK

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();


// HOVERING OVER A ELEMENT CHANGES THE WHOLE BODY COLOR

// const hoverBox = document.querySelector('.socials-linkedin');

// hoverBox.addEventListener('mouseenter', (e) => {
//   const rect = e.target.getBoundingClientRect();
//   const xPos = rect.left + rect.width / 2;
//   const yPos = rect.top + rect.height / 2;

//   document.body.style.background = `radial-gradient(circle at ${xPos}px ${yPos}px, lightblue 10%, white 100%)`;
//   document.body.style.backgroundSize = '150% 150%';
// });

// hoverBox.addEventListener('mouseleave', () => {
//   document.body.style.backgroundSize = '0';
// });



// CUSTOM CURSOR

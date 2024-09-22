  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function openModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "block";
  
    loadVideo(); // Call the function to load the correct video
  
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
      // Set smaller resolution for mobile screens
      source.src = "./assets/denish-bhai.mp4";
      video.width = 320;  // Set new width
      video.height = 560; // Set new height
    } else {
      // Set default resolution for larger screens
      source.src = "./assets/rick-roll.mp4";
      video.width = 720;  // Default width
      video.height = 480; // Default height
    }
  }
  
  
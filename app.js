// Fullscreen
const fullscreenButton = document.querySelector("#fullscreen-btn");
fullscreenButton.addEventListener("click", () => {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
});

// Show & Hide Sidebar
const openSide = document.querySelector(".sidebar-show-btn");
const closeSide = document.querySelector(".back-btn");
const siderBar = document.querySelector(".aside");

openSide.addEventListener("click", () => {
  siderBar.style.display = "block";
});
closeSide.addEventListener("click", () => {
  siderBar.style.display = "none";
});
